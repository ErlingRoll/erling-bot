import Item, { ItemType } from "../../virtual/models/item";

export const minerals: { [id: string]: Item } = {
    salt: {
        id: "salt",
        name: "<:saltItem:974640811172053052> Salt",
        description: "Tastes pretty salty",
        value: 2,
        type: ItemType.material,
    },
    copper: {
        id: "copper",
        name: "<:copperBar:974650729186881636> Copper",
        description: "The most common mineral.",
        value: 2,
        type: ItemType.material,
    },
    iron: {
        id: "iron",
        name: "<:ironBar:974650729002315826> Iron",
        description: "Iron was used in the iron age. It is also used now.",
        value: 6,
        type: ItemType.material,
    },
    silver: {
        id: "silver",
        name: "<:silverBar:974651553787019284> Silver",
        description: "The average league of legends rank.",
        value: 10,
        type: ItemType.material,
    },
    gold: {
        id: "gold",
        name: "<:goldBar:974650729245581322> Gold",
        description: "It is really heavy. Why is it so valuable?",
        value: 20,
        type: ItemType.material,
    },
    diamond: {
        id: "diamond",
        name: "<:diamondItem:974651785417482281> Diamond",
        description: "Shine bright!",
        value: 100,
        type: ItemType.material,
    },
    netherite: {
        id: "netherite",
        name: "<:netheriteBar:974650728780038215> Netherite",
        description: "From the nether!",
        value: 200,
        type: ItemType.material,
    },
};
