import Armor from "../../virtual/models/armor";
import { ItemType } from "../../virtual/models/item";

export const armors: { [id: string]: Armor } = {
    plasticbag: {
        id: "plasticbag",
        name: "Plastic bag",
        description: "Better than the birthday suit.",
        value: 100,
        type: ItemType.armor,
        defense: 5,
    },
};
