import { Client, Message } from "discord.js";
import VirtualUser from "virtual/models/virtualUser";
import Item, { ItemType } from "../../virtual/models/item";

export const consumables: { [id: string]: Item } = {
    burger: {
        id: "burger",
        name: ":burger: Burger",
        description: "Pretty decent BK burger. Greasy AF.",
        value: 100,
        type: ItemType.consumable,
        use: async (
            client: Client,
            message: Message,
            user: VirtualUser,
            targetUser: VirtualUser
        ): Promise<string> => {
            await user.heal(50);
            return `**<@${user.id}>** eats a burger and heals 50 hp!`;
        },
    },
    steamedham: {
        id: "steamedham",
        name: "Steamed ham",
        description: "Crusty burger.",
        value: 50,
        type: ItemType.consumable,
        use: async (
            client: Client,
            message: Message,
            user: VirtualUser,
            targetUser: VirtualUser
        ): Promise<string> => {
            await user.heal(20);
            return `**<@${user.id}>** eats a steamed clam and heals 20 hp!`;
        },
    },
    balkankebab: {
        id: "balkankebab",
        name: "Balkan kebab",
        description: "Kebabgudenes gud",
        value: 200,
        type: ItemType.consumable,
        use: async (
            client: Client,
            message: Message,
            user: VirtualUser,
            targetUser: VirtualUser
        ): Promise<string> => {
            await user.heal(60);
            return `**<@${user.id}>** eats a steamed clam and heals 20 hp!`;
        },
    },
    balkankebabmeddrikke: {
        id: "balkankebabmeddrikke",
        name: "Balkan kebab m/brus",
        description: "Kebabgudenes gud",
        value: 250,
        type: ItemType.consumable,
        use: async (
            client: Client,
            message: Message,
            user: VirtualUser,
            targetUser: VirtualUser
        ): Promise<string> => {
            await user.heal(80);
            return `**<@${user.id}>** eats a steamed clam and heals 20 hp!`;
        },
    },
};
