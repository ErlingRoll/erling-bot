import { weapons } from "../../../assets/items/weapons";
import { AdventureLevel } from "../../../constants/adventure";

export default {
    id: "sentienttoaster",
    name: "Sentient toaster",
    description: "Will toast and roast you.",
    damagetype: "toast",
    adventureLevel: AdventureLevel.beginner,
    hp: 32,
    power: 14,
    expDrop: 32,
    dropTable: {
        [weapons.toothpick.id]: {
            item: weapons.toothpick,
            chance: 80,
            amount: 2,
            randomAmount: true,
        },
    },
};
