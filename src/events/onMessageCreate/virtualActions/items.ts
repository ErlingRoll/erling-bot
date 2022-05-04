import { Client, Message } from "discord.js";
import VirtualUser from "virtual/models/virtualUser";

export default async (client: Client, message: Message, user: VirtualUser) => {
    if (user.items === {}) {
        message.reply("You do not have any items. Feelsbadman.");
    }

    let messageBuilder = `__**Items**__`;

    Object.values(user.items).forEach(_item => {
        messageBuilder += `\n- ${_item.name} x ${_item.count}`;
    });

    message.reply(messageBuilder);
};
