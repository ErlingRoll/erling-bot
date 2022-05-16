import { AdventureLevel } from "../../../constants/adventure";
import { consumables } from "../../../assets/items/consumables";

export default {
    id: "poisoneyvind",
    name: "Poison-Eyvind",
    description: '"Jeg er ikke kokken din!"',
    damagetype: "Not your chef",
    adventureLevel: AdventureLevel.intermediate,
    hp: 75,
    power: 28,
    expDrop: 50,
    dropTable: {
        [consumables.burger.id]: {
            item: consumables.balkankebab,
            chance: 60,
            amount: 2,
            randomAmount: true,
        },
        [consumables.balkankebab.id]: {
            item: consumables.balkankebab,
            chance: 30,
            amount: 2,
            randomAmount: true,
        },
        [consumables.balkankebabmeddrikke.id]: {
            item: consumables.balkankebabmeddrikke,
            chance: 20,
            amount: 2,
            randomAmount: true,
        },
    },
};
