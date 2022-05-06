import { Client, Message } from "discord.js";
import { DropTableItem } from "../../../virtual/models/dropTableItem";
import Item from "../../../virtual/models/item";
import VirtualUser from "../../../virtual/models/virtualUser";
import { items } from "../../../assets/items/items";

const dropTable: { [name: string]: DropTableItem } = {
    wood: {
        item: items.wood,
        chance: 60,
        amount: 3,
    },
    pebble: {
        item: items.pebble,
        chance: 44,
        amount: 2,
    },
    vine: {
        item: items.vine,
        chance: 33,
        amount: 1,
    },
    leather: {
        item: items.leather,
        chance: 21,
        amount: 1,
    },
};

const dropTableFlower: { [name: string]: DropTableItem } = {
    dandelion: {
        item: items.dandelion,
        chance: 60,
        amount: 1,
    },
    fireweed: {
        item: items.fireweed,
        chance: 50,
        amount: 1,
    },
    meadowbuttercup: {
        item: items.meadowbuttercup,
        chance: 33,
        amount: 1,
    },
    fourleafedclover: {
        item: items.fourleafedclover,
        chance: 10,
        amount: 1,
    },
};

const dropTableTreasure: { [name: string]: DropTableItem } = {
    fourleafedclover: {
        item: items.fourleafedclover,
        chance: 10,
        amount: 1,
    },
    minecraftstevediamondpickaxe: {
        item: items.minecraftstevediamondpickaxe,
        chance: 1,
        amount: 1,
    },
};

export default async (client: Client, message: Message, user: VirtualUser) => {
    let loot: Item[] = [];

    Object.keys(dropTable).forEach(dropName => {
        let forageRarity = Math.floor(Math.random() * 100) + 1;
        const item: DropTableItem = dropTable[dropName];
        if (forageRarity <= item.chance) {
            loot.push(item.item);
        }
    });
    Object.keys(dropTableFlower).forEach(dropName => {
        let flowerPick = Math.floor(Math.random() * 120) + 1;
        const flower: DropTableItem = dropTableFlower[dropName];
        if (flowerPick <= flower.chance) {
            loot.push(flower.item);
        }
    });
    Object.keys(dropTableTreasure).forEach(dropName => {
        let treasureRarity = Math.floor(Math.random() * 200) + 1;
        const treasure: DropTableItem = dropTableTreasure[dropName];
        if (treasureRarity <= treasure.chance) {
            loot.push(treasure.item);
        }
    });

    if (loot.length === 0) {
        return message.reply("You couldn't find anything on the trip. You are devastated");
    }

    let messageBuilder = "__**LOOT**__";

    let lootSavePromise = loot.map(async _item => {
        if (
            _item === items.wood ||
            _item === items.pebble ||
            _item === items.vine ||
            _item === items.leather
        ) {
            if (!messageBuilder.includes("Forest Loot")) {
                messageBuilder += `\n:evergreen_tree:**Forest Loot**:evergreen_tree: `;
            }
        }
        if (
            _item === items.dandelion ||
            _item === items.fireweed ||
            _item === items.meadowButterCup ||
            _item === items.fourLeafedClover
        ) {
            if (!messageBuilder.includes("Flower")) {
                messageBuilder += `\n:blossom:**Flower**:blossom:`;
            }
        }

        if (_item === items.minecraftstevediamondpickaxe) {
            if (!messageBuilder.includes("Treasure")) {
                messageBuilder += `\n:gem:**Treasure**:gem:`;
            }
        }

        messageBuilder += `\n*${_item.name}* | ${_item.value} x :coin: `;
        return user.addItem(_item);
    });
    await Promise.all(lootSavePromise);

    messageBuilder += `\n**<@${user.id}>** tucks the loot safely in their pocket!`;
    return message.reply(messageBuilder);
};
