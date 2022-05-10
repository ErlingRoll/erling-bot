import { AdventureLevel } from "../../../constants/adventure";
import { minerals } from "../../items/minerals";
import { weapons } from "../../items/weapons";
import { consumables } from "../../items/consumables";

export default {
    id: "obama",
    name: "Obama",
    description: "No, you can't",
    damagetype: "obamacare",
    adventureLevel: AdventureLevel.epic,
    hp: 500,
    power: 170,
    expDrop: 330,
    dropTable: {
        [minerals.diamond.id]: {
            item: minerals.diamond,
            chance: 90,
            amount: 5,
            randomAmount: true,
        },
        [consumables.burger.id]: {
            item: consumables.burger,
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
