import { items } from "../../../assets/items/items";
import { weapons } from "../../../assets/items/weapons";
import { armors } from "../../../assets/items/armors";

import { Client, Message } from "discord.js";
import { parseArgs } from "../../middleware";
import VirtualUser from "../../../virtual/models/virtualUser";

export default async (
    client: Client,
    message: Message,
    user: VirtualUser,
    targetUser: VirtualUser
) => {
    const args = parseArgs(message);
    if (!args || !args[1]) {
        return message.reply("Select an item to equip: `!equip cottonsword`");
    }

    let itemId = args[1].toLowerCase();
    let inventoryItem = user.items[itemId];

    if (!inventoryItem || !inventoryItem.count || inventoryItem.count < 1) {
        return message.reply(`You do not have a(n) **${itemId}**`);
    }

    const itemMessage = await user.equipItem(inventoryItem);

    message.reply(itemMessage);
};
