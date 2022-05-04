import { Client, Message } from "discord.js";
import VirtualUser from "virtual/models/virtualUser";

export default async (client: Client, message: Message, user: VirtualUser, target: VirtualUser) => {
    let messageBuilder = `**<@${user.id}>** challenges **<@${target.id}>** to a duel! **<@${target.id}>** accepts, as is custom.`;

    let userHitRoll = Math.floor(Math.random() * 100) + 1;
    let targetHitRoll = Math.floor(Math.random() * 100) + 1;

    if (targetHitRoll > 30) {
        let targetDamageRoll = Math.floor(Math.random() * 30) + 1;
        user.hp -= targetDamageRoll;
        await user.update();
        messageBuilder += `\n**<@${target.id}>** hits **<@${user.id}>** for ${targetDamageRoll} duel damage!`;
    } else {
        messageBuilder += `\n**<@${target.id}>** trips on a small pebble and misses...`;
    }

    let loot = await user.isKilled(target);
    if (loot) {
        messageBuilder += `\n**<@${target.id}>** kills **<@${user.id}>** and loots **${loot}** money!`;
        return message.reply(messageBuilder);
    }

    if (userHitRoll > 30) {
        let userDamageRoll = Math.floor(Math.random() * 20) + 1;
        target.hp -= userDamageRoll;
        await target.update();
        messageBuilder += `\n**<@${user.id}>** hits **<@${target.id}>** for ${userDamageRoll} duel damage!`;
    } else {
        messageBuilder += `\n**<@${user.id}>** trips on a small pebble and misses...`;
    }

    loot = await target.isKilled(user);
    if (loot) {
        messageBuilder += `\n**<@${user.id}>** kills **<@${target.id}>** and loots **${loot}** money!`;
        return message.reply(messageBuilder);
    }

    return message.reply(messageBuilder);
};
