import { armors } from "../../../assets/items/armors";
import { minerals } from "../../../assets/items/minerals";
import { AdventureLevel } from "../../../constants/adventure";

export default {
    id: "stoat",
    name: "Stoat",
    description: "Total misplay.",
    damagetype: "misplay",
    adventureLevel: AdventureLevel.intermediate,
    hp: 30,
    power: 10,
    expDrop: 20,
    dropTable: {
        [armors.plasticbag.id]: {
            item: armors.plasticbag,
            chance: 30,
            amount: 1,
        },
        [minerals.iron.id]: {
            item: minerals.iron,
            chance: 70,
            amount: 10,
            randomAmount: true,
        },
    },
};
