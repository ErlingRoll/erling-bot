import { Client, Message } from "discord.js";
import { AdventureLevel } from "../constants/adventure";
import Action from "../virtual/models/action";
import VirtualUser from "../virtual/models/virtualUser";

const BOT_PREFIX = process.env.BOT_PREFIX;

export const parseArgs = (message: Message): string[] | null | void => {
    if (!BOT_PREFIX) return;
    const args = message.content.slice(BOT_PREFIX.length).split(/ +/);
    return args.length === 0 ? null : args;
};

export const parseCommand = (args: string[]): string | void => {
    let command = args.shift();
    if (!command) return;
    return command.toLowerCase();
};

export const getTargetUser = async (
    client: Client,
    message: Message
): Promise<VirtualUser | void> => {
    const args = parseArgs(message);
    if (!args) return;
    let targetId = args[1];
    if (!targetId) return;
    targetId = targetId.replace(/\D/g, ""); // Remove all none digits
    const targetDiscordUser = await client.users.fetch(targetId).catch(_error => {});
    if (!targetDiscordUser) return;
    return await VirtualUser.getVirtualUser(targetDiscordUser);
};

export const cooldown = async (
    action: Action,
    message: Message,
    virtualUser: VirtualUser
): Promise<number | void> => {
    if (action.cooldown) {
        const currentDate = Date.now();
        const cooldownFinish = virtualUser.cooldowns[action.name] || 0;
        let cooldownSecondsLeft = (cooldownFinish - currentDate) / 1000;
        if (cooldownSecondsLeft < 0) cooldownSecondsLeft = 0;
        let skipSetCooldown = false;
        let args = parseArgs(message);

        // Skip setting some cooldowns
        if (action.name === "adventure") {
            if (
                !args ||
                !args[1] ||
                args[1] === "levels" ||
                !Object.values(AdventureLevel).includes(args[1])
            ) {
                skipSetCooldown = true;
            }
        }

        if (!skipSetCooldown && (!cooldownFinish || currentDate > cooldownFinish)) {
            virtualUser.cooldowns = {
                ...virtualUser.cooldowns,
                [action.name]: currentDate + action.cooldown,
            };
            return;
        }

        return cooldownSecondsLeft;
    }
};
