import { Client, Message } from "discord.js";
import VirtualUser from "virtual/models/virtualUser";

const SLAP_DAMAGE = 1;

export default async (client: Client, message: Message, user: VirtualUser, target: VirtualUser) => {
    if (!user || !target) return;
    target.hp -= SLAP_DAMAGE;
    await target.update();
    message.reply(
        `**<@${user.id}>** slaps **<@${target.id}>** for **${SLAP_DAMAGE}** damage. **<@${target.id}>** now has ${target.hp} hp.`
    );
};
