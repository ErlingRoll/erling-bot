import { Client, Message } from "discord.js";
import VirtualUser from "virtual/models/virtualUser";

const SHAME_DAMAGE = 3;

export default async (client: Client, message: Message, user: VirtualUser, target: VirtualUser) => {
    if (!user || !target) return;

    let roll = Math.floor(Math.random() * 100) + 1;

    if (roll < 70) {
        user.hp -= SHAME_DAMAGE;
        await user.update();
        message.reply(
            `**${target.name}** catches **${user.name}** red handed! **${user.name}** takes **${SHAME_DAMAGE}** shame damage.`
        );
        return;
    }

    return message.reply(
        `**${user.name}** feels **${target.name}** purse and estimates it contains **${target.money}** money.`
    );
};
