import Item, { ItemType } from "../../virtual/models/item";

export const instants: { [id: string]: Item } = {
    meme: {
        id: "meme",
        name: "Meme",
        description: "Trash or treasure. Best of luck.",
        value: 5,
        type: ItemType.instant,
    },
};
