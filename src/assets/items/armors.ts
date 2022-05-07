import Armor from "../../virtual/models/armor";
import { ItemType } from "../../virtual/models/item";

export const armors: { [id: string]: Armor } = {
    plasticbag: {
        id: "plasticbag",
        name: "Plastic bag",
        description: "Better than the birthday suit.",
        value: 100,
        type: ItemType.armor,
        defense: 4,
    },
    bubblewrap: {
        id: "bubblewrap",
        name: "Bubblewrap armor",
        description: "Decreases mobility but makes the enemy laugh",
        value: 200,
        type: ItemType.armor,
        defense: 7,
    },
    beesuit: {
        id: "beesuit",
        name: "Bubblewrap armor",
        description: "You do BEE looking nice!",
        value: 400,
        type: ItemType.armor,
        defense: 10,
    },
    chainvest: {
        id: "chainvest",
        name: "Chainvest",
        description: "Sturdy and lightweight!",
        value: 700,
        type: ItemType.armor,
        defense: 14,
    },
    knightarmor: {
        id: "knightarmor",
        name: "Knight armor",
        description: "*Clunk* *Clunk* *Clunk*",
        value: 1300,
        type: ItemType.armor,
        defense: 20,
    },
};
