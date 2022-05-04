import { Client, Message } from "discord.js";

const BOT_PREFIX = process.env.BOT_PREFIX;

function capitalizeFirstLetter(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export default (
    client: Client,
    message: Message,
    actionsCommands: { [actionGroup: string]: string[] },
    groupName: string
) => {
    if (!BOT_PREFIX) return;
    let helpMessage = "";

    if (groupName) {
        if (!actionsCommands.hasOwnProperty(groupName)) {
            return message.reply(`Command group for **${groupName}** does not exist`);
        }
        helpMessage += `\n**${capitalizeFirstLetter(groupName)}:**\n`;
        actionsCommands[groupName].forEach(_command => {
            helpMessage += BOT_PREFIX + _command + "\n";
        });
        return message.reply(helpMessage);
    }

    delete actionsCommands["sounds"];

    helpMessage += `\n**Sounds:**\n${BOT_PREFIX}help sounds\n`;

    Object.keys(actionsCommands).forEach(groupName => {
        helpMessage += `\n**${capitalizeFirstLetter(groupName)}:**\n`;
        actionsCommands[groupName].forEach(command => {
            helpMessage += BOT_PREFIX + command + "\n";
        });
    });

    message.reply(helpMessage);
};
