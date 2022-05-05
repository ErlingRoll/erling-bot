import { Client, Message } from "discord.js";
import VirtualUser from "virtual/models/virtualUser";

export default async (client: Client, message: Message, user: VirtualUser) => {
    let healResult = Math.ceil(Math.random() * 15) + 5;
    user.hp += healResult;
    await user.update();
    let messageBuilder = `**<@${user.id}>** heal for **${healResult}** hp! You have now **${user.hp}** hp.`;

    message.reply(messageBuilder);
};
