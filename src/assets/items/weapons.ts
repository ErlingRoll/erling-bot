import Weapon from "../../virtual/models/weapon";
import { ItemType } from "../../virtual/models/item";

export const weapons: { [id: string]: Weapon } = {
    cottonsword: {
        id: "cottonsword",
        name: "Cotton sword",
        description: "Pretty bad. A butterknife would probably do better.",
        value: 200,
        type: ItemType.weapon,
        damage: 5,
    },
};
