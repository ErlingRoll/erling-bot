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
        hp: 5,
        power: 5,
        dropTable: {
            cottonsword: {
                item: weapons.toothpick,
                chance: 20,
                amount: 1,
            },
        },
    },
    martialartist: {
        id: "Karate panda",
        name: "Karate panda",
        description: "Probably also knows kung fu!",
        adventureLevel: AdventureLevel.beginner,
        hp: 9,
        power: 7,
        dropTable: {
            cottonsword: {
                item: weapons.toothpick,
                chance: 50,
                amount: 1,
            },
        },
    },
    evilchicken: {
        id: "evilchicken",
        name: "Evil Chicken",
        description:
            "A megalomaniac filled with a deep seated hatred for his fellow chickens and especially humans, his former captors.",
        adventureLevel: AdventureLevel.intermediate,
        hp: 17,
        power: 10,
        dropTable: {
            cottonsword: {
                item: weapons.pickaxe,
                chance: 40,
                amount: 1,
            },
        },
    },
};
