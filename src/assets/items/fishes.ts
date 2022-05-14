import Item, { ItemType } from "../../virtual/models/item";

//Fish Items
export const fishes: { [id: string]: Item } = {
    commonyellowperch: {
        id: "commonyellowperch",
        name: "<:yellowperch:974640810488389672> Yellow Perch",
        description:
            "These fish are relatives of sea bass, though they're preyed on by other, larger fish, such as black bass. Their defining features are their large, prickly dorsal fins and gray stripes on pale-yellow bodies. Ice fishing on frozen lakes is a very popular way to catch them in their native United States and Canada. They are often fried before being eaten, which makes them a simple but tasty meal.",
        value: 2,
        type: ItemType.fish,
        emoji: "<:yellowperch:974640810488389672>",
    },
    silveryellowperch: {
        id: "silveryellowperch",
        name: "<:silverquality:974666608050069534><:yellowperch:974640810488389672> Yellow Perch",
        description:
            "[SILVER-QUALITY] These fish are relatives of sea bass, though they're preyed on by other, larger fish, such as black bass. Their defining features are their large, prickly dorsal fins and gray stripes on pale-yellow bodies. Ice fishing on frozen lakes is a very popular way to catch them in their native United States and Canada. They are often fried before being eaten, which makes them a simple but tasty meal.",
        value: 4,
        type: ItemType.fish,
        emoji: "<:yellowperch:974640810488389672>",
    },
    goldyellowperch: {
        id: "goldyellowperch",
        name: "<:goldquality:974666607974555758><:yellowperch:974640810488389672> Yellow Perch",
        description:
            "[GOLD-QUALITY] These fish are relatives of sea bass, though they're preyed on by other, larger fish, such as black bass. Their defining features are their large, prickly dorsal fins and gray stripes on pale-yellow bodies. Ice fishing on frozen lakes is a very popular way to catch them in their native United States and Canada. They are often fried before being eaten, which makes them a simple but tasty meal.",
        value: 6,
        type: ItemType.fish,
        emoji: "<:yellowperch:974640810488389672>",
    },

    commoncarp: {
        id: "commoncarp",
        name: "<:carp:974640810400313354> Carp",
        description:
            "These tough fish have very long life spans, capping out at ages surpassing 100 years. Their whiskers are one of their trademark features, making them relatively easy to identify. They're omnivorous and eat waterweed and bugs by sucking their food into their mouths. They also have teeth in the back of their throats that help break down shellfish for digestion.",
        value: 20,
        type: ItemType.fish,
        emoji: "<:carp:974640810400313354>",
    },
    silvercarp: {
        id: "silvercarp",
        name: "<:silverquality:974666608050069534><:carp:974640810400313354> Carp",
        description:
            "[SILVER-QUALITY] These tough fish have very long life spans, capping out at ages surpassing 100 years. Their whiskers are one of their trademark features, making them relatively easy to identify. They're omnivorous and eat waterweed and bugs by sucking their food into their mouths. They also have teeth in the back of their throats that help break down shellfish for digestion.",
        value: 20,
        type: ItemType.fish,
        emoji: "<:carp:974640810400313354>",
    },
    goldcarp: {
        id: "goldcarp",
        name: "<:goldquality:974666607974555758><:carp:974640810400313354> Carp",
        description:
            "[GOLD-QUALITY] These tough fish have very long life spans, capping out at ages surpassing 100 years. Their whiskers are one of their trademark features, making them relatively easy to identify. They're omnivorous and eat waterweed and bugs by sucking their food into their mouths. They also have teeth in the back of their throats that help break down shellfish for digestion.",
        value: 20,
        type: ItemType.fish,
        emoji: "<:carp:974640810400313354>",
    },

    commonsalmon: {
        id: "commonsalmon",
        name: "<:salmon:974640810584862720> Salmon",
        description:
            "Ah, salmon... Did you know their coloration is due specifically to their diet? Indeed, this is the case! The more they fill their diet with crustaceans such as krill and shrimp, the deeper shade of pink they are.",
        value: 12,
        type: ItemType.fish,
        emoji: "<:salmon:974640810584862720>",
    },
    silversalmon: {
        id: "silversalmon",
        name: "<:silverquality:974666608050069534><:salmon:974640810584862720> Salmon",
        description:
            "[SILVER-QUALITY] Ah, salmon... Did you know their coloration is due specifically to their diet? Indeed, this is the case! The more they fill their diet with crustaceans such as krill and shrimp, the deeper shade of pink they are.",
        value: 12,
        type: ItemType.fish,
        emoji: "<:salmon:974640810584862720>",
    },
    goldsalmon: {
        id: "goldsalmon",
        name: "<:goldquality:974666607974555758><:salmon:974640810584862720> Salmon",
        description:
            "[GOLD-QUALITY] Ah, salmon... Did you know their coloration is due specifically to their diet? Indeed, this is the case! The more they fill their diet with crustaceans such as krill and shrimp, the deeper shade of pink they are.",
        value: 12,
        type: ItemType.fish,
        emoji: "<:salmon:974640810584862720>",
    },

    commonkoi: {
        id: "commonkoi",
        name: "<:koi:974640810551304202>Koi",
        description:
            "Koi are a variety of carp bred for their color mutations...starting more than a thousand years ago! Well, one glance at their impressive coloring tells you that the centuries of effort were worth it. And even today people still selectively breed koi in search of new color combinations! One marvels at the thought of what the koi may look like in another thousand years.",
        value: 12,
        type: ItemType.fish,
        emoji: "<:koi:974640810551304202>",
    },
    silverkoi: {
        id: "silverkoi",
        name: "<:silverquality:974666608050069534><:koi:974640810551304202> Koi",
        description:
            "[SILVER-QUALITY] Koi are a variety of carp bred for their color mutations...starting more than a thousand years ago! Well, one glance at their impressive coloring tells you that the centuries of effort were worth it. And even today people still selectively breed koi in search of new color combinations! One marvels at the thought of what the koi may look like in another thousand years.",
        value: 12,
        type: ItemType.fish,
        emoji: "<:koi:974640810551304202>",
    },
    goldkoi: {
        id: "goldkoi",
        name: "<:goldquality:974666607974555758><:koi:974640810551304202> Koi",
        description:
            "[GOLD-QUALITY] Koi are a variety of carp bred for their color mutations...starting more than a thousand years ago! Well, one glance at their impressive coloring tells you that the centuries of effort were worth it. And even today people still selectively breed koi in search of new color combinations! One marvels at the thought of what the koi may look like in another thousand years.",
        value: 12,
        type: ItemType.fish,
        emoji: "<:koi:974640810551304202>",
    },

    commonpiranha: {
        id: "commonpiranha",
        name: "<:piranha:974640810412896296> Piranha",
        description:
            "They have terrifyingly sharp teeth, which contributes to their ferocious reputation. Oddly enough, they are actually quite timid, though they are still very dangerous fish. If they can't find food, they will resort to cannibalism or tear apart any animal they can grab hold of. Take care when catching them so they don't end up biting your hand with their sharp teeth!",
        value: 12,
        type: ItemType.fish,
        emoji: "<:piranha:974640810412896296>",
    },
    silverpiranha: {
        id: "silverpiranha",
        name: "<:silverquality:974666608050069534><:piranha:974640810412896296> Piranha",
        description:
            "[SILVER-QUALITY]They have terrifyingly sharp teeth, which contributes to their ferocious reputation. Oddly enough, they are actually quite timid, though they are still very dangerous fish. If they can't find food, they will resort to cannibalism or tear apart any animal they can grab hold of. Take care when catching them so they don't end up biting your hand with their sharp teeth!",
        value: 12,
        type: ItemType.fish,
        emoji: "<:piranha:974640810412896296>",
    },
    goldpiranha: {
        id: "goldpiranha",
        name: "<:goldquality:974666607974555758><:piranha:974640810412896296> Piranha",
        description:
            "[GOLD-QUALITY] They have terrifyingly sharp teeth, which contributes to their ferocious reputation. Oddly enough, they are actually quite timid, though they are still very dangerous fish. If they can't find food, they will resort to cannibalism or tear apart any animal they can grab hold of. Take care when catching them so they don't end up biting your hand with their sharp teeth!",
        value: 12,
        type: ItemType.fish,
        emoji: "<:piranha:974640810412896296>",
    },

    commonfreshwatergoby: {
        id: "commonfreshwatergoby",
        name: "<:freshwatergoby:974640810396098590> Freshwater Goby",
        description:
            "The freshwater goby is an unassuming specimen. But beneath that calm, fishy exterior, true gluttony resides! It will eat anything that will fit in its mouth... And its mouth is quite the gaping maw, so I recommend you refrain from drawing attention to yourself!",
        value: 12,
        type: ItemType.fish,
        emoji: "<:freshwatergoby:974640810396098590>",
    },
    silverfreshwatergoby: {
        id: "silverfreshwatergoby",
        description:
            "[SILVER-QUALITY] The freshwater goby is an unassuming specimen. But beneath that calm, fishy exterior, true gluttony resides! It will eat anything that will fit in its mouth... And its mouth is quite the gaping maw, so I recommend you refrain from drawing attention to yourself!",
        name: "<:silverquality:974666608050069534><:freshwatergoby:974640810396098590> Freshwater Goby",
        value: 12,
        type: ItemType.fish,
        emoji: "<:freshwatergoby:974640810396098590>",
    },
    goldfreshwatergoby: {
        id: "goldfreshwatergoby",
        description:
            "[GOLD-QUALITY] The freshwater goby is an unassuming specimen. But beneath that calm, fishy exterior, true gluttony resides! It will eat anything that will fit in its mouth... And its mouth is quite the gaping maw, so I recommend you refrain from drawing attention to yourself!",
        name: "<:goldquality:974666607974555758><:freshwatergoby:974640810396098590> Freshwater Goby",
        value: 12,
        type: ItemType.fish,
        emoji: "<:freshwatergoby:974640810396098590>",
    },
    commonsturgeon: {
        id: "commonsturgeon",
        description:
            "The sturgeon is a large and long-lived fish which has changed little in the last 300 million years. One curious behavior of theirs is leaping high out of the water and falling back in on their sides. The smacking sounds of their re-entry can be heard for up to half a mile away, likely more underwater! No one knows why they do it, but I like to think it's their impression of bread popping out of toaster! ",
        name: "<:sturgeon:974640810794582047> Sturgeon",
        value: 12,
        type: ItemType.fish,
        emoji: "<:sturgeon:974640810794582047>",
    },
    silversturgeon: {
        id: "silversturgeon",
        description:
            "[SILVER-QUALITY] The sturgeon is a large and long-lived fish which has changed little in the last 300 million years. One curious behavior of theirs is leaping high out of the water and falling back in on their sides. The smacking sounds of their re-entry can be heard for up to half a mile away, likely more underwater! No one knows why they do it, but I like to think it's their impression of bread popping out of toaster! ",
        name: "<:silverquality:974666608050069534><:sturgeon:974640810794582047> Sturgeon",
        value: 12,
        type: ItemType.fish,
        emoji: "<:sturgeon:974640810794582047>",
    },
    goldsturgeon: {
        id: "goldsturgeon",
        description:
            "[GOLD-QUALITY] The sturgeon is a large and long-lived fish which has changed little in the last 300 million years. One curious behavior of theirs is leaping high out of the water and falling back in on their sides. The smacking sounds of their re-entry can be heard for up to half a mile away, likely more underwater! No one knows why they do it, but I like to think it's their impression of bread popping out of toaster! ",
        name: "<:goldquality:974666607974555758><:sturgeon:974640810794582047> Sturgeon",
        value: 12,
        type: ItemType.fish,
        emoji: "<:sturgeon:974640810794582047>",
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
