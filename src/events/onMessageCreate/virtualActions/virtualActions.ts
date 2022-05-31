import { Client, Message } from "discord.js";
import Action from "../../../virtual/models/action";
import VirtualUser from "virtual/models/virtualUser";

// Actions
import adventure from "./adventure";
import aquarium from "./aquarium";
import balance from "./balance";
import buy from "./buy";
import buggin from "./buggin";
import challenge from "./challenge";
import donate from "./donate";
import duel from "./duel";
import equip from "./equip";
import feelpurse from "./feelpurse";
import fish from "./fish";
import forage from "./forage";
import gamba from "./gamba";
import items from "./items";
import leaderboard from "./leaderboard";
import mine from "./mine";
import rob from "./rob";
import slap from "./slap";
import stats from "./stats";
import time from "./time";
import use from "./use";
import stockmarked from "./stockmarked";
import rest from "./rest";
import sell from "./sell";
import unequip from "./unequip";
import inspect from "./inspect";
import prestige from "./prestige";
import devildeal from "./devildeal";
import { getTargetUser } from "events/middleware";

const virtualActions: Action[] = [
    new Action(
        "adventure",
        (client: Client, message: Message, user: VirtualUser) => adventure(client, message, user),
        { cooldown: 10000 }
    ),
    new Action(
        "aquarium",
        (client: Client, message: Message, user: VirtualUser) => aquarium(client, message, user),
        { cooldown: 5000 }
    ),
    new Action(
        "balance",
        (client: Client, message: Message, user: VirtualUser) => balance(client, message, user),
        { cooldown: 1000 },
        ["money"]
    ),
    new Action(
        "buy",
        (client: Client, message: Message, user: VirtualUser) => buy(client, message, user),
        { cooldown: 1000 },
        ["shop", "store"]
    ),
    new Action(
        "buggin",
        (client: Client, message: Message, user: VirtualUser) => buggin(client, message, user),
        { cooldown: 1000 }
    ),
    new Action(
        "devildeal",
        (client: Client, message: Message, user: VirtualUser) => devildeal(client, message, user),
        { cooldown: 1000 },
        ["devildeals", "dealdevil"]
    ),
    new Action(
        "donate",
        (
            client: Client,
            message: Message,
            user: VirtualUser,
            targetUser: VirtualUser,
            booleanCheck: boolean
        ) => donate(client, message, user, targetUser, (booleanCheck = false)),
        { cooldown: 1000 }
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
        "fish",
        (client: Client, message: Message, user: VirtualUser) => fish(client, message, user),
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
        { cooldown: 1000 }
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
        "prestige",
        (client: Client, message: Message, user: VirtualUser) => prestige(client, message, user),
        { cooldown: 1000 }
    ),
    new Action(
        "rest",
        (client: Client, message: Message, user: VirtualUser) => rest(client, message, user),
        { cooldown: 120000 },
        ["heal", "sleep"]
    ),
    new Action(
        "rob",
        (
            client: Client,
            message: Message,
            user: VirtualUser,
            targetUser: VirtualUser,
            booleanCheck: boolean = false
        ) => rob(client, message, user, targetUser, (booleanCheck = false)),
        { cooldown: 10000 },
        ["steal"]
    ),
    new Action(
        "sell",
        (client: Client, message: Message, user: VirtualUser) => sell(client, message, user),
        { cooldown: 1000 }
    ),
    new Action(
        "stats",
        (client: Client, message: Message, user: VirtualUser) => stats(client, message, user),
        { cooldown: 1000 },
        ["status"]
    ),
    new Action(
        "stockmarked",
        (client: Client, message: Message, user: VirtualUser) => stockmarked(client, message, user),
        { cooldown: 1000 },
        ["stock"]
    ),
    new Action(
        "slap",
        (client: Client, message: Message, user: VirtualUser, targetUser: VirtualUser) =>
            slap(client, message, user, targetUser),
        { cooldown: 60000 }
    ),
    new Action(
        "time",
        (client: Client, message: Message, user: VirtualUser, targetUser: VirtualUser) =>
            time(client, message, user),
        { cooldown: 1000 }
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
