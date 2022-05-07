import Item, { ItemType } from "../../virtual/models/item";

export const materials: { [id: string]: Item } = {
    wood: {
        id: "wood",
        name: "Wood",
        description: "Common Wood used in crafting",
        value: 5,
        type: ItemType.material,
    },
    pebble: {
        id: "pebble",
        name: "Pebble",
        description: "Small rock, used in crafting and tripping foes",
        value: 5,
        type: ItemType.material,
    },
    vine: {
        id: "vine",
        name: "Vine",
        description: "Used in crafting",
        value: 25,
        type: ItemType.material,
    },
    leather: {
        id: "leather",
        name: "Leather",
        description: "Used in crafting",
        value: 35,
        type: ItemType.material,
    },
    dandelion: {
        id: "dandelion",
        name: "Dandelion",
        description: "Common weed with a puffy and yellow flower.",
        value: 35,
        type: ItemType.material,
    },
    fireweed: {
        id: "fireweed",
        name: "Fireweed",
        description: "A bright pink flower often found by waters and roads.",
        value: 10,
        type: ItemType.material,
    },
    meadowbuttercup: {
        id: "meadowbuttercup",
        name: "Meadow ButterCup",
        value: 15,
        description: "A common myth is that meadow Buttercups are made of butter",
        type: ItemType.material,
    },
    fourleafclover: {
        id: "fourleafclover",
        name: "4-Leafed Clover",
        value: 250,
        description: "You lucky motherfucker",
        type: ItemType.material,
    },
};
