import { Client, Message } from "discord.js";
import { dropTableItem } from "../../../virtual/models/dropTableItem";
import Item from "virtual/models/item";
import VirtualUser from "virtual/models/virtualUser";
import { items } from "../../../assets/items/items";

const dropTable: { [name: string]: dropTableItem } = {
    Wood: {
        item: items.Wood,
        chance: 60,
        amount: 3,
    },
    Pebble: {
        item: items.Pebble,
        chance: 44,
        amount: 2,
    },
    Vine: {
        item: items.Vine,
        chance: 33,
        amount: 1,
    },
    Leather: {
        item: items.Leather,
        chance: 21,
        amount: 1,
    },
};
// Droptable for flower
const dropTableFlower: { [name: string]: dropTableItem } = {
    Dandelion: {
        item: items.Dandelion,
        chance: 60,
        amount: 1,
    },
    Fireweed: {
        item: items.Fireweed,
        chance: 50,
        amount: 1,
    },
    MeadowButterCup: {
        item: items.MeadowButterCup,
        chance: 33,
        amount: 1,
    },
    FourLeafedClover: {
        item: items.FourLeafedClover,
        chance: 10,
        amount: 1,
    },
};
//Droptable for treasurechest
const dropTableTreasure: { [name: string]: dropTableItem } = {
    FourLeafedClover: {
        item: items.FourLeafedClover,
        chance: 10,
        amount: 1,
    },
    MinecraftSteveDiamondPickaxe: {
        item: items.MinecraftSteveDiamondPickaxe,
        chance: 1,
        amount: 1,
    },
};

export default async (client: Client, message: Message, user: VirtualUser) => {
    let loot: Item[] = [];

    Object.keys(dropTable).forEach(dropName => {
        let forageRarity = Math.floor(Math.random() * 100) + 1;
        const item: dropTableItem = dropTable[dropName];
        if (forageRarity <= item.chance) {
            loot.push(item.item);
        }
    });
    // Object.keys(dropTableFlower).forEach(dropName => {
    //     let flowerPick = Math.floor(Math.random() * 120) + 1;
    //     const flower: dropTableItem = dropTableFlower[dropName];
    //     if (flowerPick <= flower.chance) {
    //         loot.push(flower.item);
    //     }
    // });
    // Object.keys(dropTableTreasure).forEach(dropName => {
    //     let treasureRarity = Math.floor(Math.random() * 200) + 1;
    //     const treasure: dropTableItem = dropTableTreasure[dropName];
    //     if (treasureRarity <= treasure.chance) {
    //         loot.push(treasure.item);
    //     }
    // });

    if (loot.length === 0) {
        return message.reply("You couldn't find anything on the trip. You are devastated");
    }

    let messageBuilder = "__**LOOT**__";

    let lootSavePromise = loot.map(async _item => {
        if (
            _item === items.Wood ||
            _item === items.Pebble ||
            _item === items.Vine ||
            _item === items.Leather
        ) {
            if (!messageBuilder.includes("Forest Loot")) {
                messageBuilder += `\n:evergreen_tree:**Forest Loot**:evergreen_tree: `;
                console.log("ForestTitle");
            }
        }
        if (
            _item === items.Dandelion ||
            _item === items.Fireweed ||
            _item === items.MeadowButterCup ||
            _item === items.FourLeafedClover
        ) {
            if (!messageBuilder.includes("Flower")) {
                messageBuilder += `\n:blossom:**Flower**:blossom:`;
                console.log("FlowerTitle");
            }
        }

        if (_item === items.MinecraftSteveDiamondPickaxe) {
            if (!messageBuilder.includes("Treasure")) {
                messageBuilder += `\n:gem:**Treasure**:gem:`;
                console.log("TreasureTitle");
            }
        }

        messageBuilder += `\n*${_item.name}* | ${_item.value} x :coin: `;
        return user.addItem(_item);
    });
    await Promise.all(lootSavePromise);

    messageBuilder += `\n**${user.name}** tucks the loot safely in their pocket!`;
    return message.reply(messageBuilder);
};
