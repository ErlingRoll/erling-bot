import Weapon from "../../virtual/models/weapon";
import { ItemType } from "../../virtual/models/item";

export const weapons: { [id: string]: Weapon } = {
    toothpick: {
        id: "toothpick",
        name: "Toothpick",
        description: "You COULD play golf with this",
        value: 20,
        type: ItemType.weapon,
        damage: 1,
    },
    pickaxe: {
        id: "pickaxe",
        name: "Pickaxe",
        description: "Looks a bit rusty but probably useful for mining.",
        value: 30,
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
