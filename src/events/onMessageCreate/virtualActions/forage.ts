import { Client, Message } from "discord.js";
import { DropTableItem } from "../../../virtual/models/dropTableItem";
import DropTable from "../../../virtual/models/dropTable";
import Item from "virtual/models/item";
import VirtualUser from "virtual/models/virtualUser";
import { items } from "../../../assets/items/items";

const dropTableForage: DropTable = new DropTable({
    wood: {
        item: items.wood,
        chance: 60,
        amount: 5,
        randomAmount: true,
    },
    pebble: {
        item: items.pebble,
        chance: 44,
        amount: 4,
        randomAmount: true,
    },
    vine: {
        item: items.vine,
        chance: 33,
        amount: 3,
        randomAmount: true,
    },
    leather: {
        item: items.leather,
        chance: 21,
        amount: 3,
        randomAmount: true,
    },

    dandelion: {
        item: items.dandelion,
        chance: 60,
        amount: 3,
        randomAmount: true,
    },
    fireweed: {
        item: items.fireweed,
        chance: 50,
        amount: 2,
        randomAmount: true,
    },
    meadowbuttercup: {
        item: items.meadowbuttercup,
        chance: 33,
        amount: 3,
        randomAmount: true,
    },
    fourleafedclover: {
        item: items.fourleafedclover,
        chance: 7,
        amount: 2,
        randomAmount: true,
    },

    minecraftstevediamondpickaxe: {
        item: items.minecraftstevediamondpickaxe,
        chance: 1,
        amount: 1,
        randomAmount: false,
    },
});

export default async (client: Client, message: Message, user: VirtualUser) => {
    let lootForest = dropTableForage.rollLoot();

    // Object.keys(dropTableForest).forEach(dropName => {
    //     let forageRarity = Math.floor(Math.random() * 100) + 1;
    //     const forest: DropTableItem = dropTableForest[dropName];
    //     if (forageRarity <= forest.chance) {
    //         loot.push(forest.item);
    //     }
    // });

    // Object.keys(dropTableFlower).forEach(dropName => {
    //     let flowerPick = Math.floor(Math.random() * 120) + 1;
    //     const flower: DropTableItem = dropTableFlower[dropName];
    //     if (flowerPick <= flower.chance) {
    //         loot.push(flower.item);
    //     }
    // });
    // Object.keys(dropTableTreasure).forEach(dropName => {
    //     let treasureRarity = Math.floor(Math.random() * 200) + 1;
    //     const treasure: DropTableItem = dropTableTreasure[dropName];
    //     if (treasureRarity <= treasure.chance) {
    //         loot.push(treasure.item);
    //     }
    // });

    if (lootForest.length === 0) {
        return message.reply("You couldn't find anything on the trip. You are devastated");
    }

    let messageBuilder = "__**LOOT**__";

    let lootSavePromise = lootForest.map(async _item => {
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

    messageBuilder += `\n**@${user.name}** tucks the loot safely in their pocket!`;
    return message.reply(messageBuilder);
};
