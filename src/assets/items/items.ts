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
    wood: {
        id: "wood",
        name: "Wood",
        description: "Common Wood used in crafting",
        value: 5,
        type: ItemType.material,
    },
    pebble: {
        id: "pebble",
        name: "Pebble",
        description: "Small rock, used in crafting and tripping foes",
        value: 5,
        type: ItemType.material,
    },
    vine: {
        id: "vine",
        name: "Vine",
        description: "Used in crafting",
        value: 25,
        type: ItemType.material,
    },
    leather: {
        id: "leather",
        name: "Leather",
        description: "Used in crafting",
        value: 35,
        type: ItemType.material,
    },
    dandelion: {
        id: "dandelion",
        name: "Dandelion",
        description: "Common weed with a puffy and yellow flower.",
        value: 35,
        type: ItemType.material,
    },
    fireweed: {
        id: "fireweed",
        name: "Fireweed",
        description: "A bright pink flower often found by waters and roads.",
        value: 10,
        type: ItemType.material,
    },
    meadowbuttercup: {
        id: "meadowbuttercup",
        name: "Meadow ButterCup",
        value: 15,
        description: "A common myth is that meadow Buttercups are made of butter",
        type: ItemType.material,
    },
    fourleafclover: {
        id: "fourleafclover",
        name: "4-Leafed Clover",
        value: 250,
        description: "You lucky motherfucker",
        type: ItemType.material,
    },
    minecraftstevediamondpickaxe: {
        id: "minecraftstevediamondpickaxe",
        name: "Minecraft Steve's Diamond Picaxe",
        value: 400,
        description: "We don't need to stripmine",
        type: ItemType.weapon,
    },
};
