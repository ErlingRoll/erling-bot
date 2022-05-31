import { Client, Message } from "discord.js";
import VirtualUser from "../../../virtual/models/virtualUser";
import Item from "../../../virtual/models/item";
import { randomAdjective } from "../../../constants/adjectives";
import { parseArgs } from "../../../events/middleware";
import CreatureCaught from "../../../virtual/models/creatureCaught";

const bugsmeadow: CreatureCaught = new CreatureCaught({
    yellowbutterfly: {
        specieId: "yellowbutterfly",
        chance: 80,
        medianSize: 35,
        amount: 1,
    },
    monarchbutterfly: {
        specieId: "monarchbutterfly",
        chance: 60,
        medianSize: 70,
        amount: 1,
    },
    spider: {
        specieId: "spider",
        chance: 40,
        medianSize: 100,
        amount: 1,
    },
    grasshopper: {
        specieId: "grasshopper",
        chance: 15,
        medianSize: 160,
        amount: 1,
    },
    prayingmantis: {
        specieId: "prayingmantis",
        chance: 5,
        medianSize: 75,
        amount: 1,
    },
});
const bugsbeach: CreatureCaught = new CreatureCaught({
    hermitcrab: {
        specieId: "hermitcrab",
        chance: 70,
        medianSize: 160,
        amount: 1,
    },
    hornedhercules: {
        specieId: "hornedhercules",
        chance: 15,
        medianSize: 160,
        amount: 1,
    },
    goliathbeetle: {
        specieId: "goliathbeetle",
        chance: 5,
        medianSize: 15,
        amount: 1,
    },
});
const bugsforest: CreatureCaught = new CreatureCaught({
    yellowbutterfly: {
        specieId: "yellowbutterfly",
        chance: 80,
        medianSize: 35,
        amount: 1,
    },
    spider: {
        specieId: "spider",
        chance: 70,
        medianSize: 100,
        amount: 1,
    },
    browncicada: {
        specieId: "browncicada",
        chance: 40,
        medianSize: 30,
        amount: 1,
    },
    walkingstick: {
        specieId: "walkingstick",
        chance: 15,
        medianSize: 160,
        amount: 1,
    },
});

export default async (client: Client, message: Message, user: VirtualUser) => {
    const args = parseArgs(message);
    let bugPool: Item[] = [];
    if (!args || !args[1] || !args[0]) {
        return message.reply("Please choose a location to catch bugs (*meadow*,*beach*,*forest*)");
    }
    if (args[1] === "meadow") {
        bugPool = bugsmeadow.calculateCatch("bug");
    }
    if (args[1] === "beach") {
        bugPool = bugsbeach.calculateCatch("bug");
    }
    if (args[1] === "forest") {
        bugPool = bugsforest.calculateCatch("bug");
    }
    let adjectiveItem = randomAdjective("item");
    if (bugPool.length === 0) {
        return message.reply(`\nNo bugs today, sad times only`);
    }

    let messageBuilder = `\n**<@${user.id}>** grabs their ${adjectiveItem} bug net and tries to find ${args[1]}`;

    let bugSavePromise = bugPool.map(async (_bug: Item) => {
        messageBuilder += `\n${_bug.name} | Value: ${_bug.value} x :coin: `;
        return user.addItem(_bug);
    });
    let adjectiveBug = randomAdjective("fish");
    messageBuilder += `\n**<@${user.id}>** brings the ${adjectiveBug} bugs back to their bug-box!`;
    await Promise.all(bugSavePromise);

    return message.reply(messageBuilder);
};
