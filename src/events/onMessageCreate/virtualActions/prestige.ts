import { Client, Message } from "discord.js";
import { parseArgs } from "../../../events/middleware";
import VirtualUser from "../../../virtual/models/virtualUser";

export default async (client: Client, message: Message, user: VirtualUser) => {
    const args = parseArgs(message);

    if (!args || !args[1] || args[1] !== "confirm") {
        return message.reply(
            "Prestiging converts all money and items to exp. To confirm prestige: `!prestige confirm`"
        );
    }

    let messageBuilder = `**<@${user.id}> prestiges!**`;
    let moneyExp = user.money;

    Object.values(user.items).forEach(item => {
        moneyExp += Math.floor(item.value / 2);
    });

    messageBuilder += `\n**<@${user.id}>** sacrifices **${moneyExp}** money and turns it into exp!`;

    await user.addExp(moneyExp, message, false);
    user.reset();
    user.items = {};
    await user.update();

    messageBuilder += `**\n<@${user.id}>** is now lvl **${user.level}!**`;

    message.reply(messageBuilder);
};
