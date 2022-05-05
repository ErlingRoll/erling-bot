import { Client, Message } from "discord.js";
import MemeAPI from "../../../services/meme";
import { parseArgs } from "../../../events/middleware";
import VirtualUser from "../../../virtual/models/virtualUser";
import Item from "../../../virtual/models/item";

import { items } from "../../../assets/items/items";
import { armors } from "../../../assets/items/armors";
import { weapons } from "../../../assets/items/weapons";
import Armor from "../../../virtual/models/armor";
import Weapon from "../../../virtual/models/weapon";

const shopItems: { [itemId: string]: Item } = {};

// Add items to shop
Object.values(items).forEach(item => {
    shopItems[item.id] = new Item(item.id, item.name, item.description, item.value, item.type);
});
Object.values(armors).forEach(item => {
    shopItems[item.id] = new Armor(
        item.id,
        item.name,
        item.description,
        item.value,
        item.type,
        item.defense
    );
});
Object.values(weapons).forEach(item => {
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
        let reply = "__**Shop**__";
        Object.keys(shopItems).forEach(itemName => {
            reply += `\n${shopItems[itemName].name} (${shopItems[itemName].id}) | value: **${shopItems[itemName].value}** money | ${shopItems[itemName].description}`;
        });
        return message.reply(reply);
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

    if (user.money < item.value) {
        return message.reply(
            `LOL! **<@${user.id}>** is broke and cannot afford a ${requestedItem}`
        );
    }

    if (item && requestedItem !== "meme") {
        user.money -= item.value;
        await user.addItem(item);
        return message.reply(
            `**<@${user.id}>** bought a **${item.name}** for **${item.value}** money.`
        );
    }
};
