import { AdventureLevel } from "../../../constants/adventure";
import { weapons } from "../../items/weapons";
import { armors } from "../../items/armors";
import { minerals } from "../../items/minerals";
import { consumables } from "../../items/consumables";

export default {
    id: "vilemaw",
    name: "Vilemaw",
    description: "Big ass spider.",
    damagetype: "spider",
    adventureLevel: AdventureLevel.master,
    hp: 240,
    power: 110,
    expDrop: 210,
    dropTable: {
        [armors.knightarmor.id]: {
            item: armors.knightarmor,
            chance: 5,
            amount: 5,
            randomAmount: true,
        },
        [weapons.abyssalwhip.id]: {
            item: weapons.abyssalwhip,
            chance: 5,
            amount: 1,
        },
        [minerals.diamond.id]: {
            item: minerals.diamond,
            chance: 80,
            amount: 5,
            randomAmount: true,
        },
        [minerals.netherite.id]: {
            item: minerals.netherite,
            chance: 80,
            amount: 2,
            randomAmount: true,
        },
    },
};
