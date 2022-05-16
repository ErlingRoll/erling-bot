import { fishes } from "../../../assets/items/fishes";
import { Client, Message } from "discord.js";
import FishCaught from "../../../virtual/models/fishCaught";
import VirtualUser from "../../../virtual/models/virtualUser";
import Item from "virtual/models/item";
import { randomAdjective } from "../../../constants/adjectives";
const fishSpecieTable: FishCaught = new FishCaught({
    yellowperch: {
        specieId: "yellowperch",
        chance: 80,
        habitat: "lake",
        medianSize: 35,
        amount: 1,
    },

    carp: {
        specieId: "carp",
        chance: 60,
        habitat: "lake",
        medianSize: 70,
        amount: 1,
    },

    salmon: {
        specieId: "salmon",
        chance: 40,
        habitat: "lake",
        medianSize: 100,
        amount: 1,
    },

    koi: {
        specieId: "koi",
        chance: 30,
        habitat: "lake",
        medianSize: 75,
        amount: 1,
    },

    piranha: {
        specieId: "piranha",
        chance: 20,
        habitat: "lake",
        medianSize: 30,
        amount: 1,
    },

    freshwatergoby: {
        specieId: "freshwatergoby",
        chance: 5,
        habitat: "lake",
        medianSize: 15,
        amount: 1,
    },

    sturgeon: {
        specieId: "sturgeon",
        chance: 1,
        habitat: "lake",
        medianSize: 160,
        amount: 1,
    },
});
export default async (client: Client, message: Message, user: VirtualUser) => {
    let freshWaterFish = fishSpecieTable.calculateCatch();
    let adjectiveItem = randomAdjective("item");
    if (freshWaterFish.length === 0) {
        return message.reply(`\nFish ain't biting today, you are bad fisher`);
    }

    let messageBuilder = `\n**<@${user.id}>** grabs their ${adjectiveItem} fishing rod and walks to the beach`;

    let fishSavePromise = freshWaterFish.map(async (_fish: Item) => {
        messageBuilder += `\n${_fish.name} | Value: ${_fish.value} `;
        return user.addItem(_fish);
    });
    let adjectiveFish = randomAdjective("fish");
    messageBuilder += `\n**<@${user.id}>** brings the ${adjectiveFish} fish back to their homemade aquarium!`;
    await Promise.all(fishSavePromise);

    return message.reply(messageBuilder);
};
