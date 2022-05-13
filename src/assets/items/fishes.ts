import Item, { ItemType } from "../../virtual/models/item";

//Fish Items
export const fishes: { [id: string]: Item } = {
    commonyellowperch: {
        id: "commonyellowperch",
        name: "<:yellowperch:974640810488389672> Yellow Perch",
        description: "I caugth a Yellow Perch! ",
        value: 2,
        type: ItemType.fish,
    },
    silveryellowperch: {
        id: "silveryellowperch",
        name: "<:silverstar:974640810433863730><:yellowperch:974640810488389672> Yellow Perch",
        description: "I caugth a Yellow Perch! ",
        value: 4,
        type: ItemType.fish,
    },
    goldyellowperch: {
        id: "goldyellowperch",
        name: "<:goldstar:974640810345758800> Yellow Perch",
        description: "I caugth a Yellow Perch! ",
        value: 6,
        type: ItemType.fish,
    },

    commoncarp: {
        id: "commoncarp",
        name: "<:carp:974640810400313354> Carp",
        description: "I caught a carp! I really seized the diem!",
        value: 20,
        type: ItemType.fish,
    },
    silvercarp: {
        id: "silvercarp",
        name: "<:silverstar:974640810433863730><:carp:974640810400313354> Carp",
        description: "I caught a carp! I really seized the diem!",
        value: 20,
        type: ItemType.fish,
    },
    goldcarp: {
        id: "goldcarp",
        name: "<:goldstar:974640810345758800><:carp:974640810400313354> Carp",
        description: "I caught a carp! I really seized the diem!",
        value: 20,
        type: ItemType.fish,
    },

    commonsalmon: {
        id: "commonsalmon",
        name: "<:salmon:974640810584862720> Salmon",
        description: "I caught a salmon! Oh, that's slammin'!",
        value: 12,
        type: ItemType.fish,
    },
    silversalmon: {
        id: "silversalmon",
        name: "<:silverstar:974640810433863730><:salmon:974640810584862720> Salmon",
        description: "I caught a salmon! Oh, that's slammin'!",
        value: 12,
        type: ItemType.fish,
    },
    goldsalmon: {
        id: "goldsalmon",
        name: "<:goldstar:974640810345758800><:salmon:974640810584862720> Salmon",
        description: "I caught a salmon! Oh, that's slammin'!",
        value: 12,
        type: ItemType.fish,
    },

    commonkoi: {
        id: "commonkoi",
        name: " <:koi:974640810551304202>Koi",
        description: "I caught a Koi! No need to be so shy little guy",
        value: 12,
        type: ItemType.fish,
    },
    silverkoi: {
        id: "silverkoi",
        name: "<:silverstar:974640810433863730><:koi:974640810551304202> Koi",
        description: "I caught a Koi! No need to be so shy little guy",
        value: 12,
        type: ItemType.fish,
    },
    goldkoi: {
        id: "goldkoi",
        name: "<:goldstar:974640810345758800><:koi:974640810551304202> Koi",
        description: "I caught a Koi! No need to be so shy little guy",
        value: 12,
        type: ItemType.fish,
    },

    commonpiranha: {
        id: "commonpiranha",
        name: "<:piranha:974640810412896296> Piranha",
        description: "I caught a piranha! Bite the bait, not me!!",
        value: 12,
        type: ItemType.fish,
    },
    silverpiranha: {
        id: "silverpiranha",
        name: "<:silverstar:974640810433863730><:piranha:974640810412896296> Piranha",
        description: "I caught a piranha! Bite the bait, not me!!",
        value: 12,
        type: ItemType.fish,
    },
    goldpiranha: {
        id: "goldpiranha",
        name: "<:goldstar:974640810345758800><:piranha:974640810412896296> Piranha",
        description: "I caught a piranha! Bite the bait, not me!!",
        value: 12,
        type: ItemType.fish,
    },

    commonfreshwatergoby: {
        id: "commonfreshwatergoby",
        name: "<:freshwatergoby:974640810396098590> Freshwater Goby",
        description: "I caught a freshwater goby! Time to go bye-bye!",
        value: 12,
        type: ItemType.fish,
    },
    silverfreshwatergoby: {
        id: "silverfreshwatergoby",
        description: "I caught a freshwater goby! Time to go bye-bye!",
        name: "<:silverstar:974640810433863730><:freshwatergoby:974640810396098590> Freshwater Goby",
        value: 12,
        type: ItemType.fish,
    },
    goldfreshwatergoby: {
        id: "goldfreshwatergoby",
        description: "I caught a freshwater goby! Time to go bye-bye!",
        name: "<:goldstar:974640810345758800><:freshwatergoby:974640810396098590> Freshwater Goby",
        value: 12,
        type: ItemType.fish,
    },
    commonsturgeon: {
        id: "commonsturgeon",
        description: "I caught a sturgeon! Wonder if it can perform sturgery... ",
        name: "<:sturgeon:974640810794582047> Sturgeon",
        value: 12,
        type: ItemType.fish,
    },
    silversturgeon: {
        id: "silversturgeon",
        description: "I caught a sturgeon! Wonder if it can perform sturgery... ",
        name: "<:silverstar:974640810433863730><:sturgeon:974640810794582047> Sturgeon",
        value: 12,
        type: ItemType.fish,
    },
    goldsturgeon: {
        id: "goldsturgeon",
        description: "I caught a sturgeon! Wonder if it can perform sturgery... ",
        name: "<:goldstar:974640810345758800><:sturgeon:974640810794582047> Sturgeon",
        value: 12,
        type: ItemType.fish,
    },
};
//OceanFish
// seabass: {
//     id: "seabass",
//     name: "Sea Bass",
//     description: "I caught a sea bass! Not you again!",
//     value: 10,
//     type: ItemType.fish,
//     fishingSpot: FishingSpot.ocean,
//     emoji: ":seabass:",
// },

// horsemackrel: {
//     id: "horsemackrel",
//     name: "Horsemackrel",
//     description: "I caught a horse mackerel! Holy mackerel!",
//     value: 10,
//     type: ItemType.fish,
//     fishingSpot: FishingSpot.ocean,
//     emoji: ":horsemackrel:",
// },

// morayeel: {
//     id: "morayeel",
//     name: "Moray Eel",
//     description: "I caught a moray eel! Now that's a moray!",
//     value: 10,
//     type: ItemType.fish,
//     fishingSpot: FishingSpot.ocean,
// },

// redsnapper: {
//     id: "redsnapper",
//     name: "Redsnapper",
//     description: "I caught a red snapper! Ooh, SNAP!",
//     value: 10,
//     type: ItemType.fish,
//     fishingSpot: FishingSpot.ocean,
// },

// pufferfish: {
//     id: "pufferfish",
//     name: "Pufferfish",
//     description: "I caught a puffer fish! Aww... Or should I say 'OW?!'",
//     value: 10,
//     type: ItemType.fish,
//     fishingSpot: FishingSpot.ocean,
// },
// };
