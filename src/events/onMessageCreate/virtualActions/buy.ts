import { Client, Message } from "discord.js";
import MemeAPI from "../../../services/meme";
import { parseArgs } from "../../../events/middleware";
import VirtualUser from "../../../virtual/models/virtualUser";
import sendLongMessage from "../../../utils/sendLongMessage";
import Item, { ItemType } from "../../../virtual/models/item";

import { items } from "../../../assets/items/items";
import Armor from "../../../virtual/models/armor";
import Weapon from "../../../virtual/models/weapon";

const shopItems: { [itemId: string]: Item } = {};

// Add items to shop
Object.values(items[ItemType.consumable]).forEach(item => {
    shopItems[item.id] = new Item(item.id, item.name, item.description, item.value, item.type);
});
Object.values(items[ItemType.instant]).forEach(item => {
    shopItems[item.id] = new Item(item.id, item.name, item.description, item.value, item.type);
});
Object.values(items[ItemType.armor]).forEach(item => {
    shopItems[item.id] = new Armor(
        item.id,
        item.name,
        item.description,
        item.value,
        item.type,
        item.defence
    );
});
Object.values(items[ItemType.weapon]).forEach(item => {
    shopItems[item.id] = new Weapon(
        item.id,
        item.name,
        item.description,
        item.value,
        item.type,
        item.damage
    );
});

export default async (client: Client, message: Message, user: VirtualUser) => {
    const args = parseArgs(message);
    if (!args || !args[1]) {
        const shopWeapon = Object.values(shopItems).filter(
            shopItem => shopItem.type == ItemType.weapon
        );
        const shopArmor = Object.values(shopItems).filter(
            shopItem => shopItem.type == ItemType.armor
        );
        const shopConsumable = Object.values(shopItems).filter(
            shopItem => shopItem.type == ItemType.consumable
        );
        const shopInstant = Object.values(shopItems).filter(
            shopItem => shopItem.type == ItemType.instant
        );

        let messageBuilder = "__**Shop**__";
        messageBuilder += "\n\n__Weapons__";
        Object.values(shopWeapon).forEach(shopItem => {
            const weaponItem = shopItem as Weapon;
            messageBuilder += `\n${shopItem.name} (${shopItem.id}) | **+${weaponItem.damage}** damage | value: **${shopItem.value}** money | ${shopItem.description}`;
        });
        messageBuilder += "\n\n__Armors__";
        Object.values(shopArmor).forEach(shopItem => {
            const armorItem = shopItem as Armor;
            messageBuilder += `\n${armorItem.name} (${armorItem.id}) | **+${armorItem.defence}** defence | value: **${armorItem.value}** money | ${armorItem.description}`;
        });
        messageBuilder += "\n\n__Consumables__";
        Object.values(shopConsumable).forEach(shopItem => {
            messageBuilder += `\n${shopItem.name} (${shopItem.id}) | value: **${shopItem.value}** money | ${shopItem.description}`;
        });
        messageBuilder += "\n\n__Instants__";
        Object.values(shopInstant).forEach(shopItem => {
            messageBuilder += `\n${shopItem.name} (${shopItem.id}) | value: **${shopItem.value}** money | ${shopItem.description}`;
        });
        return sendLongMessage(message, messageBuilder, true, true);
    }

    const requestedItem = args[1];
    const item = shopItems[requestedItem];

    if (!item) {
        return message.reply(
            `Sorry, we are all out of *${requestedItem}*. We will probably receive a new supply next year.`
        );
    }

    if (requestedItem === "meme") {
        const subReddit = args[2];

        let meme = null;
        let messageBuilder = "";
        let memeCost = subReddit ? item.value * 10 : item.value;

        if (user.money < memeCost) {
            return message.reply(
                `LOL! **<@${user.id}>** is broke and cannot afford a ${requestedItem}`
            );
        }

        if (subReddit) {
            meme = await MemeAPI.getRandomMeme(subReddit);
            if (!meme) {
                return message.reply(`Subreddit merchant for *${subReddit}* is on vacation`);
            }
            messageBuilder = `**<@${user.id}>** bought special ${subReddit} **${requestedItem}** for **${memeCost}** money.\n`;
        } else {
            meme = await MemeAPI.getRandomMeme();
            messageBuilder = `**<@${user.id}>** bought **${requestedItem}** for **${item.value}** money.\n`;
        }

        if (!meme) {
            return message.reply("Shop is out of memes");
        }

        user.money -= memeCost;
        await user.update();

        messageBuilder += `**${meme.data.title}**\n`;

        if (meme.data.nsfw) {
            return message.reply({
                content: messageBuilder,
                files: [
                    {
                        attachment: meme.data.url,
                        name: "SPOILER_FILE.jpg",
                    },
                ],
            });
        } else {
            return message.reply({
                content: messageBuilder,
                files: [
                    {
                        attachment: meme.data.url,
                    },
                ],
            });
        }
    }

    let amountString = args[2];
    let buyAmount = 1;
    if (!isNaN(Number(amountString))) {
        buyAmount = Number(amountString);
    }
    let cost = item.value * buyAmount;
    item.count = buyAmount;

    if (user.money < cost) {
        return message.reply(
            `LOL! **<@${user.id}>** is broke and cannot afford ${requestedItem} x ${buyAmount}`
        );
    }

    user.money -= cost;
    await user.addItem(item);
    return message.reply(
        `**<@${user.id}>** bought **${item.name}** x ${buyAmount} for **${cost}** :coin:`
    );
};
