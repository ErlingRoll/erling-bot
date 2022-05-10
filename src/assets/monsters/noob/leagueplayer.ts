import { minerals } from "../../items/minerals";
import { AdventureLevel } from "../../../constants/adventure";

export default {
    id: "leagueplayer",
    name: "League player",
    description: "Big meanie",
    damagetype: "flame",
    adventureLevel: AdventureLevel.noob,
    hp: 11,
    power: 5,
    expDrop: 10,
    dropTable: {
        [minerals.salt.id]: {
            item: minerals.salt,
            chance: 100,
            amount: 20,
            randomAmount: true,
        },
    },
};
