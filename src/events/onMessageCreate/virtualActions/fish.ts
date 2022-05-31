import { fishes } from "../../../assets/items/fishes";
import { Client, Message } from "discord.js";
import CreatureCaught from "../../../virtual/models/creatureCaught";
import VirtualUser from "../../../virtual/models/virtualUser";
import Item from "virtual/models/item";
import { randomAdjective } from "../../../constants/adjectives";
import { parseArgs } from "../../../events/middleware";
const freshwaterFish: CreatureCaught = new CreatureCaught({
    yellowperch: {
        specieId: "yellowperch",
        chance: 80,
        medianSize: 35,
        amount: 1,
    },

    carp: {
        specieId: "carp",
        chance: 60,
        medianSize: 70,
        amount: 1,
    },

    salmon: {
        specieId: "salmon",
        chance: 40,
        medianSize: 100,
        amount: 1,
    },

    koi: {
        specieId: "koi",
        chance: 30,
        medianSize: 75,
        amount: 1,
    },

    piranha: {
        specieId: "piranha",
        chance: 20,
        medianSize: 30,
        amount: 1,
    },

    freshwatergoby: {
        specieId: "freshwatergoby",
        chance: 5,
        medianSize: 15,
        amount: 1,
    },

    sturgeon: {
        specieId: "sturgeon",
        chance: 1,
        medianSize: 160,
        amount: 1,
    },
});
const oceanFish: CreatureCaught = new CreatureCaught({
    seabass: {
        specieId: "seabass",
        chance: 70,
        medianSize: 160,
        amount: 1,
    },
    squid: {
        specieId: "squid",
        chance: 60,
        medianSize: 160,
        amount: 1,
    },
    redsnapper: {
        specieId: "redsnapper",
        chance: 55,
        medianSize: 160,
        amount: 1,
    },
    morayeel: {
        specieId: "morayeel",
        chance: 45,
        medianSize: 160,
        amount: 1,
    },
    pufferfish: {
        specieId: "pufferfish",
        chance: 30,
        medianSize: 160,
        amount: 1,
    },
    ray: {
        specieId: "ray",
        chance: 20,
        medianSize: 160,
        amount: 1,
    },
    bluemarlin: {
        specieId: "bluemarlin",
        chance: 10,
        medianSize: 160,
        amount: 1,
    },
    oarfish: {
        specieId: "oarfish",
        chance: 2,
        medianSize: 160,
        amount: 1,
    },
});
export default async (client: Client, message: Message, user: VirtualUser) => {
    const args = parseArgs(message);
    let fishPool: Item[] = [];
    if (!args || !args[1] || !args[0]) {
        return message.reply("Please choose a location to fish (*lake*,*ocean*)");
    }
    if (args[1] === "lake") {
        fishPool = freshwaterFish.calculateCatch("fish");
    }
    if (args[1] === "ocean") {
        fishPool = oceanFish.calculateCatch("fish");
    }

    let adjectiveItem = randomAdjective("item");
    if (fishPool.length === 0) {
        return message.reply(`\nFish ain't biting today, you are bad fisher`);
    }

    let messageBuilder = `\n**<@${user.id}>** grabs their ${adjectiveItem} fishing rod and walks to the beach`;

    let fishSavePromise = fishPool.map(async (_fish: Item) => {
        messageBuilder += `\n${_fish.name} | Value: ${_fish.value} x :coin: `;
        return user.addItem(_fish);
    });
    let adjectiveFish = randomAdjective("fish");
    messageBuilder += `\n**<@${user.id}>** brings the ${adjectiveFish} fish back to their homemade aquarium!`;
    await Promise.all(fishSavePromise);

    return message.reply(messageBuilder);
};
