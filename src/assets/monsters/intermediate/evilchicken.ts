import { minerals } from "../../../assets/items/minerals";
import { weapons } from "../../../assets/items/weapons";
import { AdventureLevel } from "../../../constants/adventure";

export default {
    id: "evilchicken",
    name: "Evil Chicken",
    description:
        "A megalomaniac filled with a deep seated hatred for his fellow chickens and especially humans, his former captors.",
    damagetype: "evil",
    adventureLevel: AdventureLevel.intermediate,
    hp: 80,
    power: 25,
    expDrop: 55,
    dropTable: {
        [weapons.pickaxe.id]: {
            item: weapons.pickaxe,
            chance: 70,
            amount: 5,
            randomAmount: true,
        },
        [minerals.diamond.id]: {
            item: minerals.diamond,
            chance: 70,
            amount: 5,
            randomAmount: true,
        },
    },
};
