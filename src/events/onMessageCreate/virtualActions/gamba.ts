import { Client, Message } from "discord.js";
import VirtualUser from "virtual/models/virtualUser";

const MAX_WINNINGS = 10;

export default async (client: Client, message: Message, user: VirtualUser) => {
    if (user.money < MAX_WINNINGS) {
        return message.reply(`**<@${user.id}>** does not have enough money to gamble.`);
    }

    let gambaResult = Math.floor(Math.random() * 101) + 1;
    let gambaAmount = Math.floor(Math.random() * (MAX_WINNINGS + 1));

    const isWinner = gambaResult > 48;

    if (gambaAmount === 0) {
        return message.reply(`**<@${user.id}>** breaks even. Boring.`);
    }

    if (isWinner) {
        user.money += gambaAmount;
        return message.reply(`**<@${user.id}>** wins ${gambaAmount} money!`);
    }

    if (!isWinner) {
        user.money -= gambaAmount;
        return message.reply(`**<@${user.id}>** loses ${gambaAmount} money! What a loser!`);
    }
};
