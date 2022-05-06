import { Client, Message } from "discord.js";
import VirtualUser from "virtual/models/virtualUser";

export default async (client: Client, message: Message, user: VirtualUser) => {
    let messageBuilder = `**<@${user.id}>**\nMoney: ${user.money}\nHP: ${user.hp}/${user.maxHp}`;

    if (user.armor) {
        messageBuilder += `\nArmor: ${user.armor.name} (+${user.armor.defense} defense)`;
    }

    if (user.weapon) {
        messageBuilder += `\nWeapon: ${user.weapon.name} (+${user.weapon.damage} damage)`;
    }

    message.reply(messageBuilder);
};
