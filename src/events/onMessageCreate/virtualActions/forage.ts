import { Client, Message } from "discord.js";
import { DropTableItem } from "../../../virtual/models/dropTableItem";
import DropTable from "../../../virtual/models/dropTable";
import Item from "../../../virtual/models/item";
import VirtualUser from "virtual/models/virtualUser";
import { items } from "../../../assets/items/items";
import { weapons } from "../../../assets/items/weapons";
import { materials } from "../../../assets/items/materials";

const dropTableForage: DropTable = new DropTable({
    wood: {
        item: materials.wood,
        chance: 40,
        amount: 2,
        randomAmount: true,
    },
    pebble: {
        item: materials.pebble,
        chance: 30,
        amount: 2,
        randomAmount: true,
    },
    vine: {
        item: materials.vine,
        chance: 20,
        amount: 2,
        randomAmount: true,
    },
    leather: {
        item: materials.leather,
        chance: 15,
        amount: 2,
        randomAmount: true,
    },
    mums: {
        item: materials.mums,
        chance: 40,
        amount: 1,
        randomAmount: true,
    },
    cosmos: {
        item: materials.cosmos,
        chance: 30,
        amount: 1,
        randomAmount: true,
    },
    pansies: {
        item: materials.pansies,
        chance: 25,
        amount: 2,
        randomAmount: true,
    },
    roses: {
        item: materials.roses,
        chance: 20,
        amount: 2,
        randomAmount: true,
    },
    carnations: {
        item: materials.carnations,
        chance: 10,
        amount: 2,
        randomAmount: true,
    },
    fourleafedclover: {
        item: materials.fourleafedclover,
        chance: 6,
        amount: 2,
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
    let lootForest = dropTableForage.rollLoot(user.luck);

    if (lootForest.length === 0) {
        return message.reply("You couldn't find anything on the trip. You are devastated");
    }

    let messageBuilder = `\n**<@${user.id}>** walks into the woods hoping to find some dank stuff, and so they did! \n__**LOOT**__`;

    let lootSavePromise = lootForest.map(async _item => {
        messageBuilder += `\n*${_item.count} x ${_item.name}* | ${Math.floor(
            _item.value / 2
        )} :coin: `;
        return user.addItem(_item);
    });
    messageBuilder += `\n**<@${user.id}>** tucks the loot safely in their pocket!`;
    await Promise.all(lootSavePromise);

    return message.reply(messageBuilder);
};
