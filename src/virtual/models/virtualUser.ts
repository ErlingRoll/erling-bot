import { doc, setDoc, Timestamp } from "@firebase/firestore";
import { firestore } from "../../services/firebase";
import Armor from "./armor";
import Entity from "./entity";
import Item, { ItemType } from "./item";
import Weapon from "./weapon";

export default class VirtualUser extends Entity {
    money: number;
    isBusy: boolean;
    cooldowns: { [command: string]: number };
    items: { [name: string]: Item | any };
    weapon?: Weapon | null;
    armor?: Armor | null;

    constructor(
        id: string,
        name: string,
        hp: number,
        power: number,
        isBusy: boolean = false,
        money: number = 0,
        cooldowns: { [command: string]: number } = {},
        items: { [name: string]: Item } = {},
        weapon: Weapon | null = null,
        armor: Armor | null = null
    ) {
        super(id, name, hp, power);
        this.isBusy = isBusy;
        this.money = money;
        this.cooldowns = cooldowns;
        this.items = items;
        this.weapon = weapon || null;
        this.armor = armor || null;
    }

    // Sync user with database
    update(): Promise<void> {
        return setDoc(doc(firestore, "users", this.id), {
            id: this.id,
            name: this.name,
            isBusy: this.isBusy,
            hp: this.hp,
            money: this.money,
            cooldowns: this.cooldowns || {},
            items: this.items,
            armor: this.armor || null,
            weapon: this.weapon || null,
        });
    }

    async addItem(item: Item): Promise<void> {
        let existingItemStack = this.items[item.id];
        if (existingItemStack && existingItemStack.count && item.count) {
            existingItemStack.count += item.count;
        } else {
            delete item.use;
            const { ...jsonItem } = item;
            this.items[item.id] = jsonItem;
        }
        this.update();
    }

    // Does not actually use it but removes 1 from inventory
    async useItem(item: Item): Promise<void> {
        const existingItem = this.items[item.id];
        if (existingItem.count && existingItem.count > 1) {
            existingItem.count -= 1;
        } else {
            delete this.items[item.id];
        }
        return this.update();
    }

    async equipItem(item: Item): Promise<string> {
        const existingItem = this.items[item.id];

        if (!existingItem) {
            return `You do now own a(n) **${item.name}**`;
        }

        if (![ItemType.armor, ItemType.weapon].includes(item.type)) {
            return `${item.name} is not equipable`;
        }

        if (item.type === ItemType.armor) {
            this.armor = item as Armor;
        }

        if (item.type === ItemType.weapon) {
            this.weapon = item as Weapon;
        }

        await this.update();
        return `You equip **${item.name}**`;
    }

    async checkKilled(killer?: VirtualUser): Promise<string> {
        let messageBuilder = "";
        if (this.hp <= 0) {
            const moneyToLoot = Math.floor(this.money * 0.5);

            this.reset();

            let promises = [this.update()];

            if (killer) {
                killer.money += moneyToLoot;
                promises.push(killer.update());
                messageBuilder += `\n**<@${killer.id}>** kills **<@${this.id}>** and loots **${moneyToLoot}** money!`;
            }

            await Promise.all(promises);
        }

        return messageBuilder;
    }

    getDamage() {
        let damage = this.power;
        if (this.weapon) {
            damage += this.weapon.damage;
        }
        return damage;
    }

    getDefense() {
        let defense = 0;
        if (this.armor) {
            defense += this.armor.defense;
        }
        return defense;
    }

    async takeDamage(damage: number): Promise<void> {
        this.hp -= damage;
        return this.update();
    }

    async attackPlayer(target: VirtualUser): Promise<string> {
        let messageBuilder = "";
        let hitRoll = Math.floor(Math.random() * 100) + 1;

        let damageRoll = this.getDamage();
        let targetDefense = target.getDefense();

        let damage = damageRoll - targetDefense;

        if (hitRoll < 30) {
            messageBuilder += `\n**<@${this.id}>** attacks **<@${this.id}>** but trips on a small pebble and misses...`;
            return messageBuilder;
        }

        if (this.weapon) {
            messageBuilder += `\n**<@${this.id}>** attacks with **${this.weapon.name}** (+${this.weapon.damage} damage).`;
        } else {
            messageBuilder += `\n**<@${this.id}>** attacks with their bare fists.`;
        }

        if (target.armor) {
            messageBuilder += `\n**<@${target.id}>** is protected by **${target.armor.name}** (+${target.armor.defense} defense).`;
        }

        if (damage <= 0) {
            messageBuilder += `\n**<@${target.id}>** negates all damage.`;
            return messageBuilder;
        }

        messageBuilder += `\n**<@${this.id}>** hits **<@${target.id}>** for ${damage} PvP damage!`;
        await target.takeDamage(damage);
        return messageBuilder;
    }

    reset() {
        this.hp = 100;
        this.money = 0;
        this.cooldowns = {
            duel: Date.now() + 120000,
        };
        this.items = {};
        this.armor = undefined;
        this.weapon = undefined;
    }
}
