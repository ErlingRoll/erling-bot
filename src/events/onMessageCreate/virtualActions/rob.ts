import { Client, Message } from "discord.js";
import VirtualUser from "virtual/models/virtualUser";

const SHAME_DAMAGE = 5;

export default async (client: Client, message: Message, user: VirtualUser, target: VirtualUser) => {
    if (!user || !target) return;

    let robSuccess = Math.floor(Math.random() * 100) + 1 > 30;
    let robAmount = Math.floor(Math.random() * 10) + 1;

    if (!robSuccess) {
        user.hp -= SHAME_DAMAGE;
        await user.update();
        message.reply(
            `**<@${target.id}>** catches **<@${user.id}>** red handed! **<@${user.id}>** takes **${SHAME_DAMAGE}** shame damage.`
        );
        return;
    }

    if (target.money === 0) {
        return message.reply(
            `**<@${user.id}>** tries to rob **<@${target.id}>** but finds no money.`
        );
    }

    if (robAmount > target.money) {
        robAmount = target.money;
        target.money -= robAmount;
        user.money += robAmount;
        await Promise.all([target.update(), user.update()]);
        return message.reply(
            `**<@${user.id}>** steals **${robAmount}** money from **<@${target.id}>**. **<@${target.id}>** has no money left.`
        );
    }

    target.money -= robAmount;
    user.money += robAmount;
    await Promise.all([target.update(), user.update()]);
    message.reply(`**<@${user.id}>** steals **${robAmount}** money from **<@${target.id}>**.`);
};
