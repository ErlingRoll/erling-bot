import { Client, Message } from "discord.js";
import VirtualUser from "virtual/models/virtualUser";

export default async (client: Client, message: Message, user: VirtualUser) => {
    let messageBuilder = `**<@${user.id}>** (Level ${user.level})`;
    messageBuilder += `\nHP: ${user.hp} / ${user.maxHp}`;
    messageBuilder += `\nPower: ${user.power}`;
    if (user.weapon) messageBuilder += ` (+${user.weapon.damage})`;
    messageBuilder += `\nDefence: ${user.defence}`;
    if (user.armor) messageBuilder += ` (+${user.armor.defence})`;
    messageBuilder += `\nDamage reduction: ${(100 * user.getDamageReduction()).toFixed(2)}%`;
    messageBuilder += `\nLuck: ${user.luck}`;
    messageBuilder += `\nCDR: ${(100 * user.getCDR()).toFixed(2)}%`;
    messageBuilder += `\nEXP: ${user.exp} / ${user.maxExp}`;
    messageBuilder += `\nMoney: ${user.money} money`;

    if (user.armor) {
        messageBuilder += `\nArmor: ${user.armor.name} (+${user.armor.defence} defence)`;
    }

    if (user.weapon) {
        messageBuilder += `\nWeapon: ${user.weapon.name} (+${user.weapon.damage} damage)`;
    }

    if (user.soulStone) {
        messageBuilder += `\nWeapon: ${user.soulStone.name} (+${user.soulStone.maxHp} damage)`;
    }

    message.reply(messageBuilder);
};
