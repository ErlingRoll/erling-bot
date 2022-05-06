import { Client, Message } from "discord.js";
import VirtualUser from "virtual/models/virtualUser";

export default async (client: Client, message: Message, user: VirtualUser) => {
    let messageBuilder = `**<@${user.id}>** (Level ${user.level})`;
    messageBuilder += `\nHP: ${user.hp} / ${user.maxHp}`;
    messageBuilder += `\nEXP: ${user.exp} / ${user.maxExp}`;
    messageBuilder += `\nMoney: ${user.money} money`;

    if (user.armor) {
        messageBuilder += `\nArmor: ${user.armor.name} (+${user.armor.defense} defense)`;
    }

    if (user.weapon) {
        messageBuilder += `\nWeapon: ${user.weapon.name} (+${user.weapon.damage} damage)`;
    }

    if (user.soulStone) {
        messageBuilder += `\nWeapon: ${user.soulStone.name} (+${user.soulStone.maxHp} damage)`;
    }

    message.reply(messageBuilder);
};
