import { Client, Message } from "discord.js";
import VirtualUser from "virtual/models/virtualUser";

const MAX_WINNINGS = 15;

export default async (client: Client, message: Message, user: VirtualUser) => {
    if (user.money < MAX_WINNINGS) {
        return message.reply(`**<@${user.id}>** does not have enough money to gamble.`);
    }

    let gambaResult = Math.ceil(Math.random() * 100);
    let gambaAmount = Math.floor(Math.random() * (MAX_WINNINGS + 1));

    const isWinner = gambaResult > 60;
    const isMax = gambaResult==100;

    let messageBuilder=``;
    if (isMax){
        messageBuilder += `\t**Jackpot!**\n`;
        gambaAmount+=100;
    }

    if (gambaAmount === 0) {
        return message.reply(`**<@${user.id}>** breaks even. Boring.`);
    }

    if (isWinner) {
        messageBuilder+=`**<@${user.id}>** wins ${gambaAmount} money!`;
        user.money += gambaAmount;
        return message.reply(messageBuilder);
    }

    if (!isWinner) {
        user.money -= gambaAmount;
        return message.reply(`**<@${user.id}>** loses ${gambaAmount} money! What a loser!`);
    }
};
