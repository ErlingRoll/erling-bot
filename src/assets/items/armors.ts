import Armor from "../../virtual/models/armor";
import { ItemType } from "../../virtual/models/item";

export const armors: { [id: string]: Armor } = {
    plasticbag: {
        id: "plasticbag",
        name: "Plastic bag",
        description: "Better than the birthday suit.",
        value: 100,
        type: ItemType.armor,
        defence: 4,
    },
    bubblewrap: {
        id: "bubblewrap",
        name: "Bubblewrap armor",
        description: "Decreases mobility but makes the enemy laugh",
        value: 200,
        type: ItemType.armor,
        defence: 7,
    },
    beesuit: {
        id: "beesuit",
        name: "Bee suit",
        description: "You do BEE looking nice!",
        value: 400,
        type: ItemType.armor,
        defence: 10,
    },
    chainvest: {
        id: "chainvest",
        name: "Chainvest",
        description: "Sturdy and lightweight!",
        value: 700,
        type: ItemType.armor,
        defence: 14,
    },
    knightarmor: {
        id: "knightarmor",
        name: "Knight armor",
        description: "*Clunk* *Clunk* *Clunk*",
        value: 1300,
        type: ItemType.armor,
        defence: 20,
    },
    bombsuit: {
        id: "bombsuit",
        name: "Bomb suit",
        description: "Protects from explosives",
        value: 2100,
        type: ItemType.armor,
        defence: 27,
    },
    dragonarmor: {
        id: "dragonarmor",
        name: "Dragon armor",
        description: "You can select from which game you want it.",
        value: 8000,
        type: ItemType.armor,
        defence: 40,
    },
    magicarmor: {
        id: "magearmor",
        name: "Mage armor",
        description: "1st level DnD spell",
        value: 2400,
        type: ItemType.armor,
        defence: 52,
    },
    sexylingerie: {
        id: "sexylingerie",
        name: "Sexy lingerie",
        description: "It works for female game characters for some reason.",
        value: 3500,
        type: ItemType.armor,
        defence: 75,
    },
    havelsarmor: {
        id: "havelsarmor",
        name: "Havel's armor",
        description:
            "Apparel worn by Havel the Rock's warriors. Carved from solid rock, its tremendous weight is matched only by the defence it provides. Havel's Warriors never flinched nor retreated from battle. Those unfortunate enough to face them were inevitably beaten to a pulp.",
        value: 4800,
        type: ItemType.armor,
        defence: 110,
    },
    mandalorianarmor: {
        id: "mandalorianarmor",
        name: "Mandalorian armor",
        description:
            "Made of a highly durable metal which can repel blaster fire and lightsaber strikes.",
        value: 6900,
        type: ItemType.armor,
        defence: 150,
    },
    powerarmor: {
        id: "powerarmor",
        name: "Power armor",
        description: "Very generic power armor.",
        value: 9999,
        type: ItemType.armor,
        defence: 200,
    },
    batmansuit: {
        id: "batmansuit",
        name: "Batman suit",
        description: "Nanananananananana",
        value: 14000,
        type: ItemType.armor,
        defence: 250,
    },
    nokiasuit: {
        id: "nokiasuit",
        name: "Nokia suit",
        description: "Indestructable technology!",
        value: 21999,
        type: ItemType.armor,
        defence: 420,
    },
    berserkerarmor: {
        id: "berserkerarmor",
        name: "Berserker armor",
        description: "3200 freedoms per second!",
        value: 42000,
        type: ItemType.armor,
        defence: 777,
    },
};
