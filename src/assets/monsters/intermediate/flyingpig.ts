import { AdventureLevel } from "../../../constants/adventure";
import { weapons } from "../../../assets/items/weapons";
import { armors } from "../../../assets/items/armors";

export default {
    id: "flyingpig",
    name: "Flying pig",
    description: '"I cannot believe it!"',
    damagetype: "pig",
    adventureLevel: AdventureLevel.intermediate,
    hp: 75,
    power: 28,
    expDrop: 50,
    dropTable: {
        [weapons.cottonsword.id]: {
            item: weapons.cottonsword,
            chance: 70,
            amount: 3,
            randomAmount: true,
        },
        [armors.beesuit.id]: {
            item: armors.beesuit,
            chance: 20,
            amount: 1,
        },
    },
};
