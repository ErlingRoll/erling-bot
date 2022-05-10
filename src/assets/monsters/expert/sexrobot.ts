import { AdventureLevel } from "../../../constants/adventure";
import { consumables } from "../../items/consumables";
import { minerals } from "../../items/minerals";
import { weapons } from "../../items/weapons";

export default {
    id: "sexrobot",
    name: "Sex robot",
    description: "Its name is Henry Fondle",
    damagetype: "erotic",
    adventureLevel: AdventureLevel.expert,
    hp: 170,
    power: 60,
    expDrop: 135,
    dropTable: {
        [weapons.abyssalwhip.id]: {
            item: weapons.abyssalwhip,
            chance: 10,
            amount: 1,
        },
        [weapons.hornystick.id]: {
            item: weapons.hornystick,
            chance: 10,
            amount: 2,
            randomAmount: true,
        },
        [consumables.steamedham.id]: {
            item: consumables.steamedham,
            chance: 50,
            amount: 2,
            randomAmount: true,
        },
    },
};
