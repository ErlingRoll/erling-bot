import { weapons } from "../../../assets/items/weapons";
import { Client, Message } from "discord.js";
import VirtualUser from "../../../virtual/models/virtualUser";

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

    if (!user.hasItem(weapons.pickaxe)) {
        return message.reply("You need a **Pickaxe** to mine");
    }

    let mineCollapseRoll = Math.ceil(Math.random() * 100);
    if (mineCollapseRoll <= 10) {
        let mineCollapseDamageRoll = Math.ceil(Math.random() * 10);
        await user.takeDamage(mineCollapseDamageRoll);
        let messageBuilder = `The mine collapses and **<@${user.id}>** takes ${mineCollapseDamageRoll} collapsing-mine damage.`;
        if (user.hp <= 0) {
            messageBuilder += `**<@${user.id}>** gets buried in rubble and dies.`;
            let checkKilledMessage = await user.checkKilled();
            messageBuilder += checkKilledMessage;
        }
        return message.reply(messageBuilder);
    }

    let pickaxeBreakRoll = Math.ceil(Math.random() * 100);
    if (pickaxeBreakRoll <= 3) {
        let messageBuilder = `**<@${user.id}>** swings the pickaxe at a suprisingly hard rock and the pickaxe breaks :(`;
        await user.removeItem(weapons.pickaxe);
        return message.reply(messageBuilder);
    }

    Object.keys(dropTable).forEach(dropName => {
        let mineRarity = Math.ceil(Math.random() * 100);
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
    messageBuilder += `\n**<@${user.id}>** sells loot for a total of ${totalValue} money!`;
    return message.reply(messageBuilder);
};
