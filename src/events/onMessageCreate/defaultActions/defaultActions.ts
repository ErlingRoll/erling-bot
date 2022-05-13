import { Client, Message } from "discord.js";
import ActionGroup from "../../../events/actionGroup";
import Action from "../../../virtual/models/action";

// Actions
import help from "./help";
import join from "./join";
import leave from "./leave";
import ping from "./ping";

const defaultActions: Action[] = [
    new Action(
        "help",
        (
            client: Client,
            message: Message,
            actionCommands: { [actionGroup: string]: ActionGroup },
            groupName: string
        ) => help(client, message, actionCommands, groupName)
    ),
    new Action("join", (client: Client, message: Message) => join(client, message)),
    new Action("leave", (client: Client, message: Message) => leave(client, message)),
    new Action("ping", (client: Client, message: Message) => ping(client, message)),
];

export default defaultActions;
