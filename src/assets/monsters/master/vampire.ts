import { weapons } from "../../../assets/items/weapons";
import { minerals } from "../../../assets/items/minerals";
import { AdventureLevel } from "../../../constants/adventure";

export default {
    id: "vampire",
    name: "Vampire",
    description: "Is it Dracula? Nosferatu? Darren? DIO?",
    damagetype: "succ",
    adventureLevel: AdventureLevel.master,
    hp: 30,
    power: 40,
    expDrop: 40,
    dropTable: {
        [weapons.pimpcane.id]: {
            item: weapons.pimpcane,
            chance: 40,
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
            chance: 30,
            amount: 2,
            randomAmount: true,
        },
    },
};
