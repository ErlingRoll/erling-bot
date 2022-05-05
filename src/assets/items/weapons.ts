import Weapon from "../../virtual/models/weapon";
import { ItemType } from "../../virtual/models/item";

export const weapons: { [id: string]: Weapon } = {
    toothpick: {
        id: "toothpick",
        name: "Toothpick",
        description: "Using your fists is probably a better idea.",
        value: 20,
        type: ItemType.weapon,
        damage: 1,
    },
    cottonsword: {
        id: "cottonsword",
        name: "Cotton sword",
        description: "Pretty bad. A butterknife would probably do better.",
        value: 200,
        type: ItemType.weapon,
        damage: 5,
    },
};
