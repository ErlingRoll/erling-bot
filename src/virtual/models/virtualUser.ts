import { doc, setDoc, Timestamp } from "@firebase/firestore";
import { firestore } from "../../services/firebase";
import Armor from "./armor";
import Item, { ItemType } from "./item";
import Weapon from "./weapon";

export default class VirtualUser {
    id: string;
    name: string;
    hp: number;
    money: number;
    isBusy: boolean;
    cooldowns: { [command: string]: number };
    items: { [name: string]: Item | any };
    weapon?: Weapon | null;
    armor?: Armor | null;

    constructor(
        id: string,
        name: string,
        isBusy: boolean = false,
        hp: number = 100,
        money: number = 0,
        cooldowns: { [command: string]: number } = {},
        items: { [name: string]: Item } = {},
        weapon: Weapon | null = null,
        armor: Armor | null = null
    ) {
        this.id = id;
        this.name = name;
        this.isBusy = isBusy;
        this.hp = hp;
        this.money = money;
        this.cooldowns = cooldowns;
        this.items = items;
        this.weapon = weapon;
        this.armor = armor;
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
            armor: this.armor,
            weapon: this.weapon,
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

    async isKilled(killer?: VirtualUser): Promise<any> {
        if (this.hp <= 0) {
            const moneyToLoot = Math.floor(this.money * 0.5);

            this.reset();

            let promises = [this.update()];

            if (killer) {
                killer.money += moneyToLoot;
                promises.push(killer.update());
            }

            await Promise.all(promises);

            return moneyToLoot;
        }

        return false;
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
