import Monster from "../../virtual/models/monster";
import { armors } from "../../assets/items/armors";
import { items } from "../../assets/items/items";
import { weapons } from "../../assets/items/weapons";
import { AdventureLevel } from "../../constants/adventure";

export const monsters: { [id: string]: Monster | any } = {
    highschoolbully: {
        id: "highschoolbully",
        name: "Highschool bully",
        description: "Big meanie",
        adventureLevel: AdventureLevel.monkey,
        hp: 4,
        power: 7,
        expDrop: 10,
        dropTable: {
            [weapons.toothpick.id]: {
                item: weapons.toothpick,
                chance: 20,
                amount: 1,
            },
        },
    },
    marius: {
        id: "marius",
        name: "Marius",
        description: "Proud racist",
        adventureLevel: AdventureLevel.monkey,
        hp: 3,
        power: 10,
        expDrop: 10,
        dropTable: {
            [weapons.toothpick.id]: {
                item: weapons.toothpick,
                chance: 40,
                amount: 2,
                randomAmount: true,
            },
        },
    },
    karatepanda: {
        id: "karatepanda",
        name: "Karate panda",
        description: "Probably also knows kung fu!",
        adventureLevel: AdventureLevel.beginner,
        hp: 9,
        power: 7,
        expDrop: 14,
        dropTable: {
            [weapons.toothpick.id]: {
                item: weapons.toothpick,
                chance: 40,
                amount: 1,
            },
            [weapons.pickaxe.id]: {
                item: weapons.pickaxe,
                chance: 20,
                amount: 1,
            },
        },
    },
    sentienttoaster: {
        id: "sentienttoaster",
        name: "Sentient toaster",
        description: "Will toast and roast you.",
        adventureLevel: AdventureLevel.beginner,
        hp: 8,
        power: 14,
        expDrop: 14,
        dropTable: {
            [weapons.toothpick.id]: {
                item: weapons.toothpick,
                chance: 80,
                amount: 2,
                randomAmount: true,
            },
        },
    },
    evilchicken: {
        id: "evilchicken",
        name: "Evil Chicken",
        description:
            "A megalomaniac filled with a deep seated hatred for his fellow chickens and especially humans, his former captors.",
        adventureLevel: AdventureLevel.intermediate,
        hp: 23,
        power: 18,
        expDrop: 20,
        dropTable: {
            [weapons.pickaxe.id]: {
                item: weapons.pickaxe,
                chance: 60,
                amount: 2,
                randomAmount: true,
            },
        },
    },
    flyingpig: {
        id: "flyingpig",
        name: "Flying pig",
        description: '"I cannot believe it!"',
        adventureLevel: AdventureLevel.intermediate,
        hp: 20,
        power: 17,
        expDrop: 20,
        dropTable: {
            [weapons.cottonsword.id]: {
                item: weapons.cottonsword,
                chance: 40,
                amount: 1,
            },
        },
    },
};
