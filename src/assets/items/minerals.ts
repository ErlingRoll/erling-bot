import Item, { ItemType } from "../../virtual/models/item";

export const minerals: { [id: string]: Item } = {
    copper: {
        id: "copper",
        name: "Copper",
        description: "The most common mineral.",
        value: 1,
        type: ItemType.material,
    },
    iron: {
        id: "iron",
        name: "Iron",
        description: "Iron was used in the iron age. It is also used now.",
        value: 3,
        type: ItemType.material,
    },
    silver: {
        id: "silver",
        name: "Silver",
        description: "The average league of legends rank.",
        value: 5,
        type: ItemType.material,
    },
    gold: {
        id: "gold",
        name: "Gold",
        description: "It is really heavy. Why is it so valuable?",
        value: 10,
        type: ItemType.material,
    },
    diamond: {
        id: "diamond",
        name: "Diamond",
        description: "Shine bright!",
        value: 50,
        type: ItemType.material,
    },
    netherite: {
        id: "netherite",
        name: "Netherite",
        description: "From the nether!",
        value: 100,
        type: ItemType.material,
    },
};
