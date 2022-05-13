import { minerals } from "../../items/minerals";
import { AdventureLevel } from "../../../constants/adventure";
import { weapons } from "../../items/weapons";
import { consumables } from "../../../assets/items/consumables";

export default {
    id: "thereaper",
    name: "The Reaper",
    description: "Literally fucking death himself.",
    damagetype: "deadly",
    adventureLevel: AdventureLevel.legendary,
    hp: 1000,
    power: 1000,
    expDrop: 1000,
    dropTable: {
        [minerals.gold.id]: {
            item: minerals.gold,
            chance: 100,
            amount: 100,
            randomAmount: true,
        },
        [minerals.diamond.id]: {
            item: minerals.diamond,
            chance: 100,
            amount: 50,
            randomAmount: true,
        },
        [minerals.netherite.id]: {
            item: minerals.netherite,
            chance: 100,
            amount: 20,
            randomAmount: true,
        },
        [consumables.burger.id]: {
            item: consumables.burger,
            chance: 100,
            amount: 3,
            randomAmount: true,
        },
        [weapons.mjolnir.id]: {
            item: weapons.mjolnir,
            chance: 30,
            amount: 1,
            randomAmount: false,
        },
        [weapons.deathstar.id]: {
            item: weapons.deathstar,
            chance: 1,
            amount: 1,
            randomAmount: false,
        },
    },
};
