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

const virtualActions: Action[] = [
    new Action("adventure", (client: Client, message: Message, user: VirtualUser) =>
        adventure(client, message, user)
    ),
    new Action("balance", (client: Client, message: Message, user: VirtualUser) =>
        balance(client, message, user)
    ),
    new Action(
        "buy",
        (client: Client, message: Message, user: VirtualUser) => buy(client, message, user),
        { cooldown: 1000 }
    ),
    new Action(
        "duel",
        (client: Client, message: Message, user: VirtualUser, targetUser: VirtualUser) =>
            duel(client, message, user, targetUser),
        { cooldown: 60 * 1000 }
    ),
    new Action(
        "equip",
        (client: Client, message: Message, user: VirtualUser, targetUser: VirtualUser) =>
            equip(client, message, user, targetUser),
        { cooldown: 1000 }
    ),
    new Action(
        "feelpurse",
        (client: Client, message: Message, user: VirtualUser, targetUser: VirtualUser) =>
            feelpurse(client, message, user, targetUser),
        { cooldown: 10000 }
    ),
    new Action(
        "Forage",
        (client: Client, message: Message, user: VirtualUser) => forage(client, message, user),
        { cooldown: 10000 }
    ),
    new Action(
        "gamba",
        (client: Client, message: Message, user: VirtualUser) => gamba(client, message, user),
        { cooldown: 1000 }
    ),
    new Action(
        "items",
        (client: Client, message: Message, user: VirtualUser) => items(client, message, user),
        { cooldown: 1000 }
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
        { cooldown: 120000 }
    ),

    new Action(
        "rob",
        (client: Client, message: Message, user: VirtualUser, targetUser: VirtualUser) =>
            rob(client, message, user, targetUser),
        { cooldown: 10000 }
    ),
    new Action("stats", (client: Client, message: Message, user: VirtualUser) =>
        stats(client, message, user)
    ),
    new Action(
        "slap",
        (client: Client, message: Message, user: VirtualUser, targetUser: VirtualUser) =>
            slap(client, message, user, targetUser),
        { cooldown: 10000 }
    ),
    new Action(
        "use",
        (client: Client, message: Message, user: VirtualUser, targetUser: VirtualUser) =>
            use(client, message, user, targetUser),
        { cooldown: 1000 }
    ),
];

export default virtualActions;
