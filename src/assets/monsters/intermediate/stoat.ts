import { armors } from "../../../assets/items/armors";
import { minerals } from "../../../assets/items/minerals";
import { AdventureLevel } from "../../../constants/adventure";

export default {
    id: "stoat",
    name: "Stoat",
    description: "Total misplay.",
    damagetype: "misplay",
    adventureLevel: AdventureLevel.intermediate,
    hp: 80,
    power: 30,
    expDrop: 65,
    dropTable: {
        [armors.plasticbag.id]: {
            item: armors.plasticbag,
            chance: 30,
            amount: 3,
            randomAmount: true,
        },
        [minerals.iron.id]: {
            item: minerals.iron,
            chance: 80,
            amount: 20,
            randomAmount: true,
        },
    },
};
