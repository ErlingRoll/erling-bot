import { items } from "../../../assets/items/items";
import { Client, Message } from "discord.js";
import { parseArgs } from "../../../events/middleware";
import VirtualUser from "../../../virtual/models/virtualUser";

export default async (
    client: Client,
    message: Message,
    user: VirtualUser,
    targetUser: VirtualUser
) => {
    const args = parseArgs(message);
    if (!args || !args[1]) {
        return message.reply("Select an item to use: `!use burger`");
    }

    let itemId = args[1].toLowerCase();
    let inventoryItem = user.items[itemId];

    if (!inventoryItem || !inventoryItem.count || inventoryItem.count < 1) {
        return message.reply(`You do not have a(n) **${itemId}**`);
    }

    const item = items[itemId];

    if (item && item.use) {
        await user.useItem(item);

        const itemMessage = await item.use(client, message, user, targetUser);

        if (!itemMessage) {
            return message.reply(`**<@${user.id}>** uses a(n) **${item.name}**`);
        }

        return message.reply(itemMessage);
    } else {
        return message.reply(`**${inventoryItem.name}** is not usable.`);
    }
};
