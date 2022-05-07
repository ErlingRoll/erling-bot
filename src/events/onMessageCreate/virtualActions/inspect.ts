import { getMonster } from "../../../assets/monsters/monsters";
import { getItem } from "../../../assets/items/items";
import { Client, Message } from "discord.js";
import { parseArgs } from "../../../events/middleware";
import VirtualUser from "virtual/models/virtualUser";
import { AdventureLevel } from "../../../constants/adventure";
import Armor from "../../../virtual/models/armor";
import Weapon from "../../../virtual/models/weapon";
import SoulStone from "../../../virtual/models/soulStone";
import { ItemType } from "../../../virtual/models/item";

export default async (client: Client, message: Message, user: VirtualUser) => {
    const args = parseArgs(message);

    if (!args || !args[1]) {
        return message.reply(
            "Please specify item or monster: `!inspect pickaxe` or `!inspect evilchicken`"
        );
    }

    const monster = getMonster(args[1]);
    if (monster) {
        let messageBuilder = `Monster: **${monster.name}** (Rank: ${
            AdventureLevel[monster.adventureLevel]
        })`;
        messageBuilder += `\nDescription: ${monster.description}`;
        messageBuilder += `\nHP: ${monster.hp}`;
        messageBuilder += `\nPower: ${monster.power}`;
        messageBuilder += `\nExp: ${monster.expDrop}`;
        messageBuilder += `\n__**Drop table**__`;
        Object.values(monster.dropTable).forEach(dropTableItem => {
            messageBuilder += `\n${dropTableItem.item.name} | ${dropTableItem.chance.toFixed(
                2
            )}% | Amount: `;
            if (dropTableItem.randomAmount && dropTableItem.amount > 1) {
                messageBuilder += `1 - ${dropTableItem.amount}`;
            } else {
                messageBuilder += dropTableItem.amount;
            }
        });
        return message.reply(messageBuilder);
    }

    const item = getItem(args[1]);
    if (item) {
        let messageBuilder = `**${item.name}** (${item.value} money)`;
        messageBuilder += `\nDescription: ${item.description}`;
        messageBuilder += `\nType: ${ItemType[item.type]}`;

        if (item.type === ItemType.armor) messageBuilder += `\nDefense: ${(item as Armor).defense}`;
        if (item.type === ItemType.weapon) messageBuilder += `\nDamage: ${(item as Weapon).damage}`;

        return message.reply(messageBuilder);
    }

    return message.reply(`No item or monster with the ID: *${args[1]}*`);
};
