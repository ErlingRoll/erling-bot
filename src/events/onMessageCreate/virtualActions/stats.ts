import { Client, Message } from "discord.js";
import VirtualUser from "virtual/models/virtualUser";

export default async (client: Client, message: Message, user: VirtualUser) => {
    let messageBuilder = `**${user.name}**\nMoney: ${user.money}\nHP: ${user.hp}`;

    if (user.armor) {
        messageBuilder += `\nArmor: ${user.armor.name} (+${user.armor.defense} defence)`;
    }

    if (user.weapon) {
        messageBuilder += `\nWeapon: ${user.weapon.name} (+${user.weapon.damage} damage)`;
    }

    message.reply(messageBuilder);
};
