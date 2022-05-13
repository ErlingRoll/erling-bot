import { Client, Message } from "discord.js";
import { parseArgs } from "../../middleware";
import VirtualUser from "../../../virtual/models/virtualUser";
import { MetaSkill } from "../../../constants/user";

export default async (client: Client, message: Message, user: VirtualUser) => {
    const args = parseArgs(message);

    const nextLevelCost = user.levelCost;

    if (!args || !args[1] || !Object.values(MetaSkill).includes(args[1])) {
        let messageBuilder = "__**The Devil welcomes you to his humble shop**__";
        messageBuilder += `\nYour next purchase will sacrifice **${nextLevelCost}** levels`;
        messageBuilder += "\nTo complete a deal write: `!devildeal <skill>`";
        messageBuilder += "\n__Skill offers__";
        messageBuilder +=
            "\n - luck | Increases the amount of times you roll loot. Does not affect combat rolls.";
        messageBuilder +=
            "\n - cdr | Decreases cooldown on actions by a percentage. 1 cdr = 13%, 2 cdr = 23%, 3 cr = 30%...";
        return message.author.send(messageBuilder);
    }

    if (user.level <= nextLevelCost) {
        return message.reply(
            `You try to negotiate with the devil but you do not have **${nextLevelCost}** levels to offer.`
        );
    }

    let metaSkill: MetaSkill = args[1] as unknown as MetaSkill;
    await user.levelUpMetaSkill(metaSkill);

    let messageBuilder = `**<@${user.id}> takes a deal with the devil!**`;
    messageBuilder += `\n**<@${user.id}>** sacrifices **${nextLevelCost}** levels and increases their **${metaSkill}**!`;
    message.reply(messageBuilder);
};
