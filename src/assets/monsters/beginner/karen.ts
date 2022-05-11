import { weapons } from "../../items/weapons";
import { minerals } from "../../items/minerals";
import { armors } from "../../items/armors";
import { AdventureLevel } from "../../../constants/adventure";

export default {
    id: "karen",
    name: "Karen",
    description: "Be careful of it's screeching!",
    damagetype: "toast",
    adventureLevel: AdventureLevel.beginner,
    hp: 30,
    power: 9,
    expDrop: 27,
    dropTable: {
        [armors.plasticbag.id]: {
            item: armors.plasticbag,
            chance: 70,
            amount: 2,
        },
        [weapons.toothpick.id]: {
            item: weapons.toothpick,
            chance: 50,
            amount: 10,
            randomAmount: true,
        },
        [minerals.salt.id]: {
            item: minerals.salt,
            chance: 90,
            amount: 20,
            randomAmount: true,
        },
    },
};
