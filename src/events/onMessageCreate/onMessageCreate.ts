import { Client, Message } from "discord.js";
import { cooldown, getTargetUser, parseArgs, parseCommand } from "../../events/middleware";
import ActionGroup from "../actionGroup";
import soundActions from "./soundActions/soundActions";
import defaultActions from "./defaultActions/defaultActions";
import virtualActions from "./virtualActions/virtualActions";
import Action from "../../virtual/models/action";
import VirtualUser from "../../virtual/models/virtualUser";
const BOT_PREFIX = process.env.BOT_PREFIX;

const defaultActionGroup = new ActionGroup("commands", defaultActions);
const soundActionGroup = new ActionGroup("sounds", soundActions);
const virtualActionGroup = new ActionGroup("virtual", virtualActions);

export async function onMessageCreate(client: Client, message: Message): Promise<any> {
    if (!BOT_PREFIX) return;

    if (!message.content.startsWith(BOT_PREFIX) || message.author.bot) return;

    if (!message.author.bot) {
        console.log(`Message (${message.author.username}):`, message.content);
    }

    const args = parseArgs(message);
    if (!args) return;

    const command = parseCommand(args);
    if (!command) return;

    // Register command groups
    let defaultActionCommands = Object.keys(defaultActionGroup.actions);
    let soundActionsCommands = Object.keys(soundActionGroup.actions);
    let virtualActionsCommands = Object.keys(virtualActionGroup.actions);

    // Pre action stuff
    const virtualUser = (await VirtualUser.getVirtualUser(message.author)) as VirtualUser;
    const targetVirtualUser = ((await getTargetUser(client, message)) as VirtualUser) || null;

    if (targetVirtualUser && targetVirtualUser.id === "905526390764486656") {
        virtualUser.hp = 0;
        virtualUser.checkKilled();
        return message.reply(
            "Stop trying to interact with god. You are smited for **9999999** admin damage and crumble to dust :D"
        );
    }

    if (virtualUser.isBusy) {
        return message.reply("You are busy with something. Calm down.");
    }

    virtualUser.isBusy = true;
    await virtualUser.update();

    let action: Action | null = null;
    let actionPromise: Promise<any> | null = null;

    // "help" command is special!
    if (command === "help") {
        action = defaultActionGroup.actions[command];
        actionPromise = defaultActionGroup.actions[command].action(
            client,
            message,
            {
                commands: defaultActionCommands,
                sounds: soundActionsCommands,
                virtual: virtualActionsCommands,
            },
            args[0]
        );
    }

    // Sound Actions
    if (!action && soundActionsCommands.includes(command)) {
        action = soundActionGroup.actions[command];
        actionPromise = soundActionGroup.actions[command].action(client, message, virtualUser);
    }

    // Make alias for virtual actions
    const virtualActionAliasMap: { [alias: string]: string } = virtualActions.reduce(
        (map, action) => {
            action.alias.forEach(alias => {
                map = { ...map, [alias]: action.name };
            });
            return map;
        },
        {}
    );

    let commandFromAlias = virtualActionAliasMap[command] || command;

    // Virtual actions
    if (!action && virtualActionsCommands.includes(commandFromAlias)) {
        action = virtualActionGroup.actions[commandFromAlias];
        const cooldownLeft = await cooldown(action, message, virtualUser);

        if (cooldownLeft) {
            message.reply(`!${command} is on ${cooldownLeft.toFixed(2)} seconds cooldown`);
        } else {
            actionPromise = virtualActionGroup.actions[commandFromAlias].action(
                client,
                message,
                virtualUser,
                targetVirtualUser
            );
        }
    }

    // Default actions
    if (!action && defaultActionCommands.includes(command)) {
        action = virtualActionGroup.actions[command];
        actionPromise = defaultActionGroup.actions[command].action(client, message);
    }

    // Post action stuff
    virtualUser.isBusy = false;
    await virtualUser.update();
}
