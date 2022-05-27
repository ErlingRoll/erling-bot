import { Client, Message } from "discord.js";
import { parseArgs } from "../../../events/middleware";
import { isArguments } from "lodash";
import Time, { tableoftimes, timeString, dateString } from "../../../virtual/models/time";
import VirtualUser from "../../../virtual/models/virtualUser";

export default async (client: Client, message: Message, user: VirtualUser) => {
    const args = parseArgs(message);
    let errorMessage: string =
        "[Invalid !time Command] *You need to type time { , time, date, weekday}*";
    if (!args) {
        return message.reply(errorMessage);
    }
    if (args[0] && !args[1]) {
        return message.reply(`The date and time is:\n${dateString}\n${timeString}`);
    }
    if (args[1] === "time") {
        return message.reply(`The time is:\n${timeString}`);
    }
    if (args[1] === "day") {
        return message.reply(`The date is:\n${dateString}`);
    }
    if (args[1] === "weekday") {
        return message.reply(`Today is ${tableoftimes.realtime.weekday}`);
    } else return message.reply(errorMessage);
};
