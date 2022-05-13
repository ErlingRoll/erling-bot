import { Client, Message } from "discord.js";
import ActionGroup from "../../../events/actionGroup";

const BOT_PREFIX = process.env.BOT_PREFIX;

function capitalizeFirstLetter(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export default (
    client: Client,
    message: Message,
    actionsCommands: { [actionGroup: string]: ActionGroup },
    groupName: string
) => {
    if (!BOT_PREFIX) return;
    let helpMessage = "__**Commands**__\n";

    if (groupName) {
        if (!actionsCommands.hasOwnProperty(groupName)) {
            return message.reply(`Command group for **${groupName}** does not exist`);
        }
        helpMessage += `\n**${capitalizeFirstLetter(groupName)}:**\n`;
        Object.values(actionsCommands[groupName].actions).forEach(action => {
            console.log(action.name);
            helpMessage += `**${BOT_PREFIX} ${action.name}** | Cooldown: ${(
                action.cooldown / 1000
            ).toFixed(2)}\n`;
        });
        return message.author.send(helpMessage);
    }

    delete actionsCommands["sounds"];

    Object.keys(actionsCommands).forEach(groupName => {
        helpMessage += `\n**${capitalizeFirstLetter(groupName)}:**\n`;
        Object.values(actionsCommands[groupName].actions).forEach(action => {
            helpMessage += `**${BOT_PREFIX} ${action.name}** | Cooldown: ${(
                action.cooldown / 1000
            ).toFixed(2)} seconds\n`;
        });
    });

    helpMessage += `\n**Sounds:**\n${BOT_PREFIX}help sounds\n`;

    message.author.send(helpMessage);
};
