import { minerals } from "../../../assets/items/minerals";
import { weapons } from "../../../assets/items/weapons";
import { AdventureLevel } from "../../../constants/adventure";

export default {
    id: "evilchicken",
    name: "Evil Chicken",
    description:
        "A megalomaniac filled with a deep seated hatred for his fellow chickens and especially humans, his former captors.",
    adventureLevel: AdventureLevel.intermediate,
    hp: 23,
    power: 18,
    expDrop: 20,
    dropTable: {
        [weapons.pickaxe.id]: {
            item: weapons.pickaxe,
            chance: 80,
            amount: 2,
            randomAmount: true,
        },
        [minerals.diamond.id]: {
            item: minerals.diamond,
            chance: 70,
            amount: 2,
            randomAmount: true,
        },
    },
};
