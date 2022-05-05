import { Client, Message } from "discord.js";
import { parseArgs } from "../../../events/middleware";
import { AdventureLevel } from "../../../virtual/models/adventure";
import VirtualUser from "../../../virtual/models/virtualUser";

export default async (client: Client, message: Message, user: VirtualUser) => {
    const args = parseArgs(message);

    if (!args || !args[1]) {
        return message.reply(
            "Please select an adventure level. To see all levels: `!adventure levels`"
        );
    }

    const level = args[1];

    if (level === "levels") {
        let messageBuilder = "__**Adventure levels**__";

        Object.values(AdventureLevel).forEach((level: any) => {
            if (!isNaN(level)) {
                messageBuilder += `\n - ${AdventureLevel[level]}`;
            }
        });

        return message.reply(messageBuilder);
    }
};
