import { Client, Message } from "discord.js";
import MemeAPI from "../../../services/meme";
import { parseArgs } from "../../middleware";
import VirtualUser from "../../../virtual/models/virtualUser";
import Item from "../../../virtual/models/item";

export default async (client: Client, message: Message, user: VirtualUser) => {
    const args = parseArgs(message);
    if (!args || !args[1]) {
        return message.reply("Please select an item to sell");
    }

    const requestedItem = args[1];

    if (!user.items || !user.items[requestedItem] || user.items[requestedItem] < 1) {
        return message.reply(
            `You do not own any **${requestedItem}**. Please aquire at least one before trying to sell. The shop does not buy imaginary items.`
        );
    }

    let amountString = args[2];
    let sellAmount = 1;
    if (!isNaN(Number(amountString))) {
        sellAmount = Number(amountString);
    }

    const sellItem: Item = user.items[requestedItem];

    if (!sellItem.count) {
        return message.reply(`You do not own any **${sellItem.name}**`);
    }

    if (amountString === "all") {
        sellAmount = sellItem.count;
    }

    const moneyEarned = Math.floor((sellItem.value * sellAmount) / 2);
    user.money += moneyEarned;
    await user.removeItem(sellItem, sellAmount);
    return message.reply(
        `**<@${user.id}>** sold **${sellItem.name}** x ${sellAmount} for **${moneyEarned}** money!`
    );
};
