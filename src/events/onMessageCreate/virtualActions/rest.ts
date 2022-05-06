import { Client, Message } from "discord.js";
import VirtualUser from "virtual/models/virtualUser";

export default async (client: Client, message: Message, user: VirtualUser) => {
    let healResult = Math.ceil(Math.random() * 15) + 5;
    await user.heal(50);
    let messageBuilder = `**<@${user.id}>** cries themselves to sleep and heals **${healResult}** hp!`;

    message.reply(messageBuilder);
};
