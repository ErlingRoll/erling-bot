import Item, { ItemType } from "../../virtual/models/item";

export const materials: { [id: string]: Item } = {
    wood: {
        id: "wood",
        name: "<:woodItem:974640810601639987> Wood",
        description: "Common Wood used in crafting",
        value: 5,
        type: ItemType.material,
    },
    pebble: {
        id: "pebble",
        name: "<:stoneItem:974640810593230899> Pebble",
        description: "Small rock, used in crafting and tripping foes",
        value: 5,
        type: ItemType.material,
    },
    vine: {
        id: "vine",
        name: "<:vineItem:974640810509353011> Vine",
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
    mums: {
        id: "mums",
        name: "<:yellowmums:974647669865734194> Mums",
        description: "Common weed with a puffy and yellow flower.",
        value: 35,
        type: ItemType.material,
    },
    cosmos: {
        id: "cosmos",
        name: "<:cosmos:974647669672779796> Cosmos",
        description: "A bright pink flower often found by waters and roads.",
        value: 10,
        type: ItemType.material,
    },
    pansies: {
        id: "pansies",
        name: "<:whitePansies:974647669899280454> Pansies",
        description: "This flower is used in cooking, mostly for decoration",
        value: 10,
        type: ItemType.material,
    },
    roses: {
        id: "roses",
        name: "<:redRose:974647669844766720> Rose",
        description: "A beautiful flower for m'lady",
        value: 10,
        type: ItemType.material,
    },
    carnations: {
        id: "carnation",
        name: "<:carnation:974647669777657876> Carnation",
        description: "Also known as a clove pink, it is a populare gifting flower",
        value: 10,
        type: ItemType.material,
    },
    fourleafclover: {
        id: "fourleafclover",
        name: "<:4leafclover:974647669802823772> Fourleaf Clover",
        value: 250,
        description: "You lucky motherfucker",
        type: ItemType.material,
    },
};
