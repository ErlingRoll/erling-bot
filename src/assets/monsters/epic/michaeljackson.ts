import { AdventureLevel } from "../../../constants/adventure";
import { minerals } from "../../items/minerals";
import { weapons } from "../../items/weapons";
import { consumables } from "../../items/consumables";

export default {
    id: "michaeljackson",
    name: "Michael Jackson",
    description: "You've been hit by, you've been struck by... TRUCK",
    damagetype: "moonwalk",
    adventureLevel: AdventureLevel.epic,
    hp: 470,
    power: 190,
    expDrop: 330,
    dropTable: {
        [minerals.diamond.id]: {
            item: minerals.diamond,
            chance: 100,
            amount: 10,
            randomAmount: true,
        },
        [consumables.burger.id]: {
            item: consumables.burger,
            chance: 90,
            amount: 3,
            randomAmount: true,
        },
        [weapons.chainsaw.id]: {
            item: weapons.chainsaw,
            chance: 70,
            amount: 20,
            randomAmount: true,
        },
        [weapons.infinityedge.id]: {
            item: weapons.infinityedge,
            chance: 3,
            amount: 1,
            randomAmount: true,
        },
    },
};
