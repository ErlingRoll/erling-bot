import { Client, Message } from "discord.js";
import VirtualUser from "virtual/models/virtualUser";

const SHAME_DAMAGE = 1;

export default async (client: Client, message: Message, user: VirtualUser, target: VirtualUser) => {
    if (!user || !target) return;
    let robAmount = Math.floor(Math.random() * 4);

    if (robAmount === 0) {
        user.hp -= SHAME_DAMAGE;
        await user.update();
        message.reply(
            `**<@${target.id}>** catches **<@${user.id}>** red handed! **<@${user.id}>** takes **${SHAME_DAMAGE}** shame damage.`
        );
        return;
    }

    target.money -= robAmount;
    user.money += robAmount;
    await Promise.all([target.update(), user.update()]);
    message.reply(`**<@${user.id}>** steals **${robAmount}** money from **<@${target.id}>**.`);
};
