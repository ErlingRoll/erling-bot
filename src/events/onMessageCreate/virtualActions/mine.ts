import { Client, Message } from "discord.js";
import VirtualUser from "virtual/models/virtualUser";

const dropTable: any = {
    "Old meme": {
        name: "Old meme",
        value: 1,
        chance: 80,
    },
    Copper: {
        name: "Copper",
        value: 2,
        chance: 50,
    },
    Iron: {
        name: "Iron",
        value: 3,
        chance: 40,
    },
    Silver: {
        name: "Silver",
        value: 5,
        chance: 30,
    },
    Gold: {
        name: "Gold",
        value: 10,
        chance: 10,
    },
    Diamond: {
        name: "Diamond",
        value: 50,
        chance: 2,
    },
    Netherite: {
        name: "Netherite",
        value: 100,
        chance: 1,
    },
};

export default async (client: Client, message: Message, user: VirtualUser) => {
    let loot: any[] = [];

    Object.keys(dropTable).forEach(dropName => {
        let mineRarity = Math.floor(Math.random() * 101) + 1;
        const item: any = dropTable[dropName];
        if (mineRarity <= item.chance) {
            loot.push(item);
        }
    });

    if (loot.length === 0) {
        return message.reply("No loot today. You are sad.");
    }

    let messageBuilder = "__**Loot**__";
    let totalValue = 0;

    loot.forEach(_item => {
        messageBuilder += `\n${_item.name} | Value: ${_item.value}`;
        totalValue += _item.value;
    });

    user.money += totalValue;
    messageBuilder += `\n**${user.name}** sells loot for a total of ${totalValue} :coin:!`;
    return message.reply(messageBuilder);
};
