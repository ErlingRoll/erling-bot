import { AdventureLevel } from "../../../constants/adventure";
import { minerals } from "../../items/minerals";
import { weapons } from "../../items/weapons";
import { armors } from "../../items/armors";
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
            chance: 70,
            amount: 20,
            randomAmount: true,
        },
        [consumables.burger.id]: {
            item: consumables.burger,
            chance: 50,
            amount: 2,
            randomAmount: true,
        },
        [weapons.rpg7.id]: {
            item: weapons.rpg7,
            chance: 10,
            amount: 2,
            randomAmount: true,
        },
        [armors.havelsarmor.id]: {
            item: armors.havelsarmor,
            chance: 3,
            amount: 1,
            randomAmount: true,
        },
        [armors.mandalorianarmor.id]: {
            item: armors.mandalorianarmor,
            chance: 1,
            amount: 1,
            randomAmount: true,
        },
    },
};
