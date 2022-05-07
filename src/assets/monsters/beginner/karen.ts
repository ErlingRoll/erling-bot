import { weapons } from "../../items/weapons";
import { minerals } from "../../items/minerals";
import { armors } from "../../items/armors";
import { AdventureLevel } from "../../../constants/adventure";

export default {
    id: "karen",
    name: "Karen",
    description: "Be careful it's screeching",
    damagetype: "toast",
    adventureLevel: AdventureLevel.beginner,
    hp: 12,
    power: 8,
    expDrop: 15,
    dropTable: {
        [armors.plasticbag.id]: {
            item: armors.plasticbag,
            chance: 30,
            amount: 1,
        },
        [weapons.toothpick.id]: {
            item: weapons.toothpick,
            chance: 50,
            amount: 1,
        },
        [minerals.salt.id]: {
            item: minerals.salt,
            chance: 90,
            amount: 20,
            randomAmount: true,
        },
    },
};
