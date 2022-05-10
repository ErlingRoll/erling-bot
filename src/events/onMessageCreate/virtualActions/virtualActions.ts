import { Client, Message } from "discord.js";
import Action from "../../../virtual/models/action";
import VirtualUser from "virtual/models/virtualUser";

// Actions
import slap from "./slap";
import rob from "./rob";
import balance from "./balance";
import stats from "./stats";
import gamba from "./gamba";
import challenge from "./challenge";
import buy from "./buy";
import mine from "./mine";
import feelpurse from "./feelpurse";
import forage from "./forage";
import duel from "./duel";
import items from "./items";
import use from "./use";
import equip from "./equip";
import leaderboard from "./leaderboard";
import adventure from "./adventure";
import rest from "./rest";
import sell from "./sell";
import unequip from "./unequip";
import inspect from "./inspect";

const virtualActions: Action[] = [
    new Action(
        "adventure",
        (client: Client, message: Message, user: VirtualUser) => adventure(client, message, user),
        { cooldown: 10000 }
    ),
    new Action(
        "balance",
        (client: Client, message: Message, user: VirtualUser) => balance(client, message, user),
        {},
        ["money"]
    ),
    new Action(
        "buy",
        (client: Client, message: Message, user: VirtualUser) => buy(client, message, user),
        { cooldown: 1000 },
        ["shop", "store"]
    ),
    new Action(
        "duel",
        (client: Client, message: Message, user: VirtualUser, targetUser: VirtualUser) =>
            duel(client, message, user, targetUser),
        { cooldown: 60000 },
        ["fight"]
    ),
    new Action(
        "equip",
        (client: Client, message: Message, user: VirtualUser, targetUser: VirtualUser) =>
            equip(client, message, user),
        { cooldown: 1000 }
    ),
    new Action(
        "feelpurse",
        (client: Client, message: Message, user: VirtualUser, targetUser: VirtualUser) =>
            feelpurse(client, message, user, targetUser),
        { cooldown: 60000 }
    ),
    new Action(
        "forage",
        (client: Client, message: Message, user: VirtualUser, targetUser: VirtualUser) =>
            forage(client, message, user),
        { cooldown: 60000 }
    ),
    new Action(
        "gamba",
        (client: Client, message: Message, user: VirtualUser) => gamba(client, message, user),
        { cooldown: 1000 },
        ["gamble"]
    ),
    new Action(
        "inspect",
        (client: Client, message: Message, user: VirtualUser) => inspect(client, message, user),
        { cooldown: 1000 },
        ["check", "details", "examine"]
    ),
    new Action(
        "items",
        (client: Client, message: Message, user: VirtualUser) => items(client, message, user),
        { cooldown: 1000 },
        ["inventory"]
    ),
    new Action(
        "leaderboard",
        (client: Client, message: Message, user: VirtualUser) => leaderboard(client, message, user),
        { cooldown: 5000 }
    ),
    new Action(
        "mine",
        (client: Client, message: Message, user: VirtualUser) => mine(client, message, user),
        { cooldown: 10000 }
    ),
    new Action(
        "rest",
        (client: Client, message: Message, user: VirtualUser) => rest(client, message, user),
        { cooldown: 120000 },
        ["heal", "sleep"]
    ),
    new Action(
        "rob",
        (client: Client, message: Message, user: VirtualUser, targetUser: VirtualUser) =>
            rob(client, message, user, targetUser),
        { cooldown: 10000 },
        ["steal"]
    ),
    new Action("sell", (client: Client, message: Message, user: VirtualUser) =>
        sell(client, message, user)
    ),
    new Action(
        "stats",
        (client: Client, message: Message, user: VirtualUser) => stats(client, message, user),
        {},
        ["status"]
    ),
    new Action(
        "slap",
        (client: Client, message: Message, user: VirtualUser, targetUser: VirtualUser) =>
            slap(client, message, user, targetUser),
        { cooldown: 60000 }
    ),
    new Action(
        "unequip",
        (client: Client, message: Message, user: VirtualUser) => unequip(client, message, user),
        { cooldown: 1000 }
    ),
    new Action(
        "use",
        (client: Client, message: Message, user: VirtualUser, targetUser: VirtualUser) =>
            use(client, message, user, targetUser),
        { cooldown: 1000 }
    ),
];

export default virtualActions;
