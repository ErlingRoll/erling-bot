import Monster from "../../virtual/models/monster";
import { armors } from "../../assets/items/armors";
import { items } from "../../assets/items/items";
import { weapons } from "../../assets/items/weapons";
import { AdventureLevel } from "../../virtual/models/adventure";

export const monsters: { [id: string]: Monster } = {
    highschoolbully: {
        id: "highschoolbully",
        name: "High school",
        description: "Big meanie",
        adventureLevel: AdventureLevel.beginner,
        hp: 8,
        power: 3,
        dropTable: {
            cottonsword: {
                item: weapons.cottonsword,
                chance: 5,
                amount: 1,
            },
        },
    },
};
