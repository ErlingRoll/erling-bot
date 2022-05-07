import { weapons } from "../../../assets/items/weapons";
import { AdventureLevel } from "../../../constants/adventure";

export default {
    id: "highschoolbully",
    name: "Highschool bully",
    description: "Big meanie",
    damagetype: "bully",
    adventureLevel: AdventureLevel.noob,
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
};
