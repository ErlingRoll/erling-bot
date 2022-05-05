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
        power: 3,
        dropTable: {
            cottonsword: {
                item: weapons.toothpick,
                chance: 20,
                amount: 1,
            },
        },
    },
};
