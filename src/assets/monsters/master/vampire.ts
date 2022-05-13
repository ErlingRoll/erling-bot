import { AdventureLevel } from "../../../constants/adventure";
import { weapons } from "../../../assets/items/weapons";
import { armors } from "../../items/armors";
import { minerals } from "../../../assets/items/minerals";
import { consumables } from "../../items/consumables";

export default {
    id: "vampire",
    name: "Vampire",
    description: "Is it Dracula? Nosferatu? Darren? DIO?",
    damagetype: "succ",
    adventureLevel: AdventureLevel.master,
    hp: 300,
    power: 100,
    expDrop: 220,
    dropTable: {
        [armors.dragonarmor.id]: {
            item: armors.dragonarmor,
            chance: 5,
            amount: 2,
            randomAmount: true,
        },
        [weapons.minigun.id]: {
            item: weapons.minigun,
            chance: 5,
            amount: 1,
        },
        [minerals.diamond.id]: {
            item: minerals.diamond,
            chance: 70,
            amount: 6,
            randomAmount: true,
        },
        [minerals.netherite.id]: {
            item: minerals.netherite,
            chance: 25,
            amount: 2,
            randomAmount: true,
        },
    },
};
