import { Client, Message } from "discord.js";
import VirtualUser from "virtual/models/virtualUser";

export default async (client: Client, message: Message, user: VirtualUser) => {
    let healResult = Math.ceil(Math.random() * 15) + 5;
    let healed;
    healed = await user.heal(healResult);
    let messageBuilder;
    if (healed != 0) {
        messageBuilder = `**<@${user.id}>** cries themselves to sleep and heals **${healed}** hp!`;
    } else {
        messageBuilder = `**<@${user.id}>** is allready full health!`;
    }
    message.reply(messageBuilder);
};
