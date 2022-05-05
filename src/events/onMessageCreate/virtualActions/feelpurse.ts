import { Client, Message } from "discord.js";
import VirtualUser from "virtual/models/virtualUser";

const SHAME_DAMAGE = 3;

export default async (client: Client, message: Message, user: VirtualUser, target: VirtualUser) => {
    if (!user || !target) return;

    let roll = Math.ceil(Math.random() * 100);

    if (roll > 70) {
        user.hp -= SHAME_DAMAGE;
        await user.update();
        message.reply(
            `**<@${target.id}>** catches **<@${user.id}>** red handed! **<@${user.id}>** takes **${SHAME_DAMAGE}** shame damage.`
        );
        return;
    }

    return message.reply(
        `**<@${user.id}>** feels **<@${target.id}>** purse and estimates it contains **${target.money}** money.`
    );
};
