import { Client, Message } from "discord.js";
import VirtualUser from "virtual/models/virtualUser";

export default async (client: Client, message: Message, user: VirtualUser, target: VirtualUser) => {
    if (!target) {
        return message.reply("Please select a target to duel: `!duel @username`");
    }

    let messageBuilder = `**<@${user.id}>** challenges **<@${target.id}>** to a duel! **<@${target.id}>** accepts, as is custom.`;

    let attackMessage = await target.attackPlayer(user);
    messageBuilder += attackMessage;
    let killMessage = await user.checkKilled(target);
    messageBuilder += killMessage;

    attackMessage = await user.attackPlayer(target);
    messageBuilder += attackMessage;
    killMessage = await target.checkKilled(user);
    messageBuilder += killMessage;

    return message.reply(messageBuilder);
};
