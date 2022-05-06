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
    baseballbat: {
        id: "baseballbat",
        name: "Baseball bat",
        description: "Made of steel!",
        value: 299,
        type: ItemType.weapon,
        damage: 9,
    },
    pimpcane: {
        id: "pimpcane",
        name: "Pimp cane",
        description: "\"Pimpin' ain't dead 'cause I be the life line.\"",
        value: 420,
        type: ItemType.weapon,
        damage: 12,
    },
};
