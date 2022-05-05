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
};
