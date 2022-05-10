import { AdventureLevel } from "../../../constants/adventure";
import { armors } from "../../../assets/items/armors";
import { weapons } from "../../../assets/items/weapons";

export default {
    id: "highschoolbully",
    name: "Highschool bully",
    description: "Big meanie",
    damagetype: "bully",
    adventureLevel: AdventureLevel.noob,
    hp: 9,
    power: 6,
    expDrop: 14,
    dropTable: {
        [armors.plasticbag.id]: {
            item: armors.plasticbag,
            chance: 20,
            amount: 2,
            randomAmount: true,
        },
        [weapons.toothpick.id]: {
            item: weapons.toothpick,
            chance: 40,
            amount: 2,
            randomAmount: true,
        },
    },
};
