import { Message, User } from "discord.js";
import { firestore } from "../../services/firebase";
import { doc, getDoc, setDoc } from "@firebase/firestore";
import sendLongMessage from "../../utils/sendLongMessage";
import { MetaSkill } from "../../constants/user";
import Armor from "./armor";
import Entity from "./entity";
import Item, { ItemType } from "./item";
import SoulStone from "./soulStone";
import Weapon from "./weapon";

export default class VirtualUser extends Entity {
    level: number;
    exp: number;
    maxExp: number;
    maxHp: number;
    defence: number;
    levelCost: number;
    luck: number;
    cdr: number;
    money: number;
    isBusy: boolean;
    cooldowns: { [command: string]: number };
    items: { [name: string]: Item | any };
    weapon: Weapon | null;
    armor: Armor | null;
    soulStone: SoulStone | null;

    constructor(
        id: string,
        name: string,
        hp: number,
        power: number,
        level: number,
        exp: number,
        maxExp: number,
        maxHp: number,
        defence: number,
        levelCost: number,
        luck: number,
        cdr: number,
        isBusy: boolean = false,
        money: number = 0,
        cooldowns: { [command: string]: number } = {},
        items: { [name: string]: Item } = {},
        weapon: Weapon | null = null,
        armor: Armor | null = null,
        soulStone: SoulStone | null = null
    ) {
        super(id, name, hp, power);
        this.level = level;
        this.exp = exp;
        this.maxExp = maxExp;
        this.maxHp = maxHp;
        this.defence = defence;
        this.levelCost = levelCost;
        this.luck = luck;
        this.cdr = cdr;
        this.isBusy = isBusy;
        this.money = money;
        this.cooldowns = cooldowns;
        this.items = items;
        this.weapon = weapon || null;
        this.armor = armor || null;
        this.soulStone = soulStone || null;
    }

    // Sync user with database
    update(): Promise<void> {
        return setDoc(doc(firestore, "users", this.id), {
            id: this.id,
            name: this.name,
            hp: this.hp || 100,
            power: this.power || 5,
            level: this.level || 1,
            exp: this.exp || 0,
            maxExp: this.maxExp || 100,
            maxHp: this.maxHp || 100,
            defence: this.defence || 0,
            levelCost: this.levelCost || 0,
            luck: this.luck || 0,
            cdr: this.cdr || 0,
            isBusy: this.isBusy || false,
            money: this.money || 0,
            cooldowns: this.cooldowns || {},
            items: this.items || {},
            armor: this.armor || null,
            weapon: this.weapon || null,
            soulStone: this.soulStone || null,
        });
    }

    roll(max: number = 100, advantage: number = 0) {
        const totalAdvantage = advantage + this.luck;
        let roll = Math.ceil(Math.random() * max);
        for (let i = 0; i < totalAdvantage; i++) {
            let extraRoll = Math.ceil(Math.random() * max);
            if (advantage > 0) {
                if (extraRoll > roll) roll = extraRoll;
            }
            if (advantage < 0) {
                if (extraRoll < roll) roll = extraRoll;
            }
        }
        return roll;
    }

    getCDR(): number {
        return (80 - 400 / (this.cdr + 5)) / 100; // Percent
    }

    async levelUpMetaSkill(metaSkill: MetaSkill): Promise<void> {
        if (Number(MetaSkill[metaSkill]) === MetaSkill.luck) this.luck += 1;
        if (Number(MetaSkill[metaSkill]) === MetaSkill.cdr) this.cdr += 1;

        // Update next devil deal cost
        let metaLevels = 0;
        metaLevels += this.luck;
        metaLevels += this.cdr;
        this.level -= this.levelCost;
        this.levelCost = Math.floor(50 + 4 * Math.pow(metaLevels, 1.05));
        this.validateStats();

        return this.update();
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
        return this.update();
    }

    async removeItem(item: Item, amount: number = 1): Promise<void> {
        let existingItemStack = this.items[item.id];
        if (existingItemStack && existingItemStack.count) {
            existingItemStack.count -= amount;

            // If you remove the last item also unequip it if you are wearing it
            if (existingItemStack.count <= 0) {
                if (this.armor && existingItemStack.id === this.armor.id) this.armor = null;
                if (this.weapon && existingItemStack.id === this.weapon.id) this.weapon = null;

                delete this.items[item.id];
            }
            await this.update();
        }
        return;
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

    async unEquip(item: Item): Promise<string> {
        const existingItem = this.items[item.id];

        if (!existingItem) {
            return `You do now own a(n) **${item.name}**`;
        }

        if (![ItemType.armor, ItemType.weapon].includes(item.type)) {
            return `${item.name} is not unequipable`;
        }

        if (item.type === ItemType.armor) {
            this.armor = null;
        }

        if (item.type === ItemType.weapon) {
            this.weapon = null;
        }

        await this.update();
        return `You unequip **${item.name}**`;
    }

    hasItem(item: Item): boolean {
        if (!this.items) return false;
        return Boolean(this.items[item.id] && this.items[item.id].count > 0);
    }

    rollDamage(): number {
        let damage = this.power;
        if (this.weapon) {
            damage += this.weapon.damage;
        }
        if (damage < 0) damage = 0;
        return Math.ceil(Math.random() * damage);
    }

    getDefence(): number {
        let defence = this.defence;
        if (this.armor) {
            defence += this.armor.defence;
        }
        return defence;
    }

    getDamageReduction(): number {
        const defence = this.getDefence();
        return (100 - 10000 / (defence + 100)) / 100; // Percentage
    }

    async attackPlayer(target: VirtualUser): Promise<string> {
        let messageBuilder = "";
        let hitRoll = Math.floor(Math.random() * 100) + 1;

        let damageRoll = this.rollDamage();
        let targetDamageReduction = target.getDamageReduction();

        let damage = Math.floor(damageRoll * (1 - targetDamageReduction));

        if (hitRoll < 20) {
            messageBuilder += `\n**<@${this.id}>** attacks **<@${target.id}>** but trips on a small pebble and misses...`;
            return messageBuilder;
        }

        if (this.weapon) {
            messageBuilder += `\n**<@${this.id}>** attacks with **${this.weapon.name}** (+${this.weapon.damage} damage).`;
        } else {
            messageBuilder += `\n**<@${this.id}>** attacks with their bare fists.`;
        }

        if (target.armor) {
            messageBuilder += `\n**<@${target.id}>** is protected by **${target.armor.name}** (${targetDamageReduction}% damage reduction).`;
        }

        if (damage <= 0) {
            messageBuilder += `\n**<@${target.id}>** negates all damage.`;
            return messageBuilder;
        }

        messageBuilder += `\n**<@${this.id}>** hits **<@${target.id}>** for ${damage.toFixed(
            2
        )} PvP damage!`;
        await target.takeDamage(damage);
        return messageBuilder;
    }

    async takeDamage(damage: number): Promise<void> {
        this.hp -= Math.floor(damage);
        return this.update();
    }

    async heal(heal: number): Promise<number> {
        let health;
        if (this.hp >= this.maxHp) return 0;
        if (this.hp + heal > this.maxHp) {
            health = this.maxHp - this.hp;
            this.hp = this.maxHp;
            await this.update();
            return health;
        }
        this.hp += heal;
        await this.update();
        return heal;
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

    async addExp(exp: number, message: Message, sendMessage: boolean = true): Promise<void> {
        this.exp += exp;
        this.exp = Math.floor(this.exp);
        if (this.exp >= this.maxExp) {
            let messageBuilder = "";
            let remainingExp = this.exp;

            // Level up!
            while (remainingExp >= this.maxExp) {
                remainingExp -= this.maxExp;
                this.level += 1;

                // Change stats
                this.validateStats();

                // Broadcast level up
                if (messageBuilder !== "") messageBuilder += "\n";
                messageBuilder += `**<@${this.id}>** is now level ${this.level}!`;
            }

            this.exp = remainingExp;
            await this.update();
            if (sendMessage) {
                sendLongMessage(message, messageBuilder, false, false);
            }
            return;
        }
        return this.update();
    }

    reset() {
        // User keeps their most valuable possession
        let bestItem: Item | any = null;

        let inventoryItems: Item[] = Object.values(this.items);

        inventoryItems.forEach(item => {
            if (!bestItem) {
                bestItem = item;
            } else if (bestItem.value < item.value) {
                bestItem = item;
            }
        });

        if (bestItem) {
            bestItem.count = 1;
        }

        this.validateStats();

        this.exp = 0;
        this.hp = this.maxHp;
        this.money = 0;
        this.cooldowns = {
            duel: Date.now() + 120000,
        };
        this.items = bestItem ? { [bestItem.id]: bestItem } : {};
        this.armor = null;
        this.weapon = null;
        this.soulStone = null;
    }

    async validateStats(): Promise<void> {
        this.power = Math.floor(5 * Math.pow(1.05, this.level - 1));
        this.defence = Math.floor(3 * Math.pow(1.05, this.level - 1));
        this.maxExp = Math.floor(100 * Math.pow(1.08, this.level - 1));
        this.maxHp = Math.floor(100 * Math.pow(1.025, this.level - 1));
        if (this.hp > this.maxHp) {
            this.hp = this.maxHp;
        }
    }

    static getVirtualUser = async (discordUser: User): Promise<VirtualUser | any> => {
        const userRef = doc(firestore, "users", discordUser.id);
        const userSnap = await getDoc(userRef);
        if (!userSnap.exists()) return this.createVirtualUser(discordUser);

        const userData = userSnap.data() as VirtualUser;
        return new VirtualUser(
            userData.id,
            userData.name,
            userData.hp,
            userData.power,
            userData.level,
            userData.exp,
            userData.maxExp,
            userData.maxHp,
            userData.defence,
            userData.levelCost,
            userData.luck,
            userData.cdr,
            userData.isBusy,
            userData.money,
            userData.cooldowns,
            userData.items,
            userData.weapon,
            userData.armor,
            userData.soulStone
        );
    };

    static createVirtualUser = async (discordUser: User): Promise<VirtualUser | any> => {
        const newUser = new VirtualUser(
            discordUser.id,
            discordUser.username,
            100,
            5,
            1,
            0,
            100,
            100,
            0,
            50,
            0,
            0
        );

        await newUser.update();

        return newUser;
    };
}
