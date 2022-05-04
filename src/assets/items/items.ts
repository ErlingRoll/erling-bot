import { Client, Message } from "discord.js";
import Item, { ItemType } from "../../virtual/models/item";
import VirtualUser from "../../virtual/models/virtualUser";

export const items: { [id: string]: Item } = {
    burger: {
        id: "burger",
        name: "Burger",
        description: "Pretty decent BK burger. Greasy AF.",
        value: 100,
        type: ItemType.consumable,
        use: async (
            client: Client,
            message: Message,
            user: VirtualUser,
            targetUser: VirtualUser
        ): Promise<string> => {
            user.hp += 100;
            await user.update();
            return `**<@${user.id}>** eats a burger and heals 100 hp!`;
        },
    },
    meme: {
        id: "meme",
        name: "Meme",
        description: "Trash or treasure. Best of luck.",
        value: 5,
        type: ItemType.insant,
    },
};
