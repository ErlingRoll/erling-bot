import { Client, Message } from "discord.js";
import DropTable from "../../../virtual/models/dropTable";
import VirtualUser from "virtual/models/virtualUser";
import { materials } from "../../../assets/items/materials";
import { weapons } from "../../../assets/items/weapons";

const dropTableForage: DropTable = new DropTable({
    wood: {
        item: materials.wood,
        chance: 60,
        amount: 5,
        randomAmount: true,
    },
    pebble: {
        item: materials.pebble,
        chance: 35,
        amount: 4,
        randomAmount: true,
    },
    vine: {
        item: materials.vine,
        chance: 30,
        amount: 3,
        randomAmount: true,
    },
    leather: {
        item: materials.leather,
        chance: 20,
        amount: 3,
        randomAmount: true,
    },
    dandelion: {
        item: materials.dandelion,
        chance: 37,
        amount: 3,
        randomAmount: true,
    },
    fireweed: {
        item: materials.fireweed,
        chance: 25,
        amount: 2,
        randomAmount: true,
    },
    meadowbuttercup: {
        item: materials.meadowbuttercup,
        chance: 20,
        amount: 3,
        randomAmount: true,
    },
    fourleafclover: {
        item: materials.fourleafclover,
        chance: 6,
        amount: 3,
        randomAmount: true,
    },
    minecraftstevediamondpickaxe: {
        item: weapons.minecraftstevediamondpickaxe,
        chance: 1,
        amount: 1,
        randomAmount: false,
    },
});

export default async (client: Client, message: Message, user: VirtualUser) => {
    let lootForest = dropTableForage.rollLoot();

    if (lootForest.length === 0) {
        return message.reply("You couldn't find anything on the trip. You are devastated");
    }

    let messageBuilder = `\n**<@${user.id}>** walks into the woods hoping to find some dank stuff, and so they did! \n__**LOOT**__`;

    let lootSavePromise = lootForest.map(async _item => {
        if (
            _item === materials.wood ||
            _item === materials.pebble ||
            _item === materials.vine ||
            _item === materials.leather
        ) {
            if (!messageBuilder.includes("Forest Loot")) {
                messageBuilder += `\n:evergreen_tree:**Forest Loot**:evergreen_tree: `;
            }
        }
        if (
            _item === materials.dandelion ||
            _item === materials.fireweed ||
            _item === materials.meadowButterCup ||
            _item === materials.fourLeafedClover
        ) {
            if (!messageBuilder.includes("Flower")) {
                messageBuilder += `\n:blossom:**Flower**:blossom:`;
            }
        }

        if (_item === weapons.minecraftstevediamondpickaxe) {
            if (!messageBuilder.includes("Treasure")) {
                messageBuilder += `\n:gem:**Treasure**:gem:`;
            }
        }

        messageBuilder += `\n*${_item.count} x ${_item.name}* | ${Math.floor(
            _item.value / 2
        )} :coin:`;
        return user.addItem(_item);
    });
    await Promise.all(lootSavePromise);

    messageBuilder += `\n**<@${user.id}>** tucks the loot safely in their pocket!`;
    return message.reply(messageBuilder);
};
