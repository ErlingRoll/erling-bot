import { weapons } from "../../../assets/items/weapons";
import { AdventureLevel } from "../../../constants/adventure";

export default {
    id: "flyingpig",
    name: "Flying pig",
    description: '"I cannot believe it!"',
    adventureLevel: AdventureLevel.intermediate,
    hp: 20,
    power: 17,
    expDrop: 20,
    dropTable: {
        [weapons.cottonsword.id]: {
            item: weapons.cottonsword,
            chance: 40,
            amount: 1,
        },
    },
};
