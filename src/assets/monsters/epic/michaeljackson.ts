import { items } from "../../items/items";
import { minerals } from "../../items/minerals";
import { AdventureLevel } from "../../../constants/adventure";
import { weapons } from "../../items/weapons";

export default {
    id: "michaeljackson",
    name: "Michael Jackson",
    description: "You've been hit by, you've been struck by... TRUCK",
    damagetype: "moonwalk",
    adventureLevel: AdventureLevel.expert,
    hp: 40,
    power: 35,
    expDrop: 49,
    dropTable: {
        [minerals.diamond.id]: {
            item: minerals.diamond,
            chance: 90,
            amount: 5,
            randomAmount: true,
        },
        [items.burger.id]: {
            item: items.burger,
            chance: 60,
            amount: 1,
            randomAmount: true,
        },
        [weapons.chainsaw.id]: {
            item: weapons.chainsaw,
            chance: 10,
            amount: 1,
            randomAmount: true,
        },
    },
};
