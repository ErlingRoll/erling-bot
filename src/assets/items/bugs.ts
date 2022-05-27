import Item, { ItemType } from "../../virtual/models/item";
import { Location } from "../../constants/locations";
//Fish Items
export const fishes: { [id: string]: Item } = {
    commonyellowbutterfly: {
        id: "commonyellowbutterfly",
        name: "<:yellowbutterfly:974640810488389672> yellow Butterfly",
        description: " ",
        value: 2,
        type: ItemType.bug,
        habitatLocation: Location.forest,
        emoji: "<:yellowbutterfly:975052344297394197>",
    },
    silveryellowbutterfly: {
        id: "silveryellowbutterfly",
        name: "<:silverquality:974666608050069534><:yellowbutterfly:974640810488389672> Yellow Butterfly",
        description: "[SILVER-QUALITY]",
        value: 12,
        type: ItemType.bug,
        habitatLocation: Location.forest,
        emoji: "<:yellowbutterfly:975052344297394197>",
    },
    goldyellowbutterfly: {
        id: "goldyellowbutterfly",
        name: "<:goldquality:974666607974555758><:yellowbutterfly:974640810488389672> Yellow Butterfly",
        description: "[GOLD-QUALITY]",
        value: 6,
        type: ItemType.bug,
        habitatLocation: Location.forest,
        emoji: "<:yellowbutterfly:975052344297394197>",
    },

    commonmonarchbutterfly: {
        id: "commonmonarchbutterfly",
        name: "<:monarchbutterfly:975052344330969098>  monarchbutterfly",
        description: "",
        value: 20,
        type: ItemType.bug,
        habitatLocation: Location.forest,
        emoji: "<:monarchbutterfly:975052344330969098> ",
    },
    silvermonarchbutterfly: {
        id: "silvermonarchbutterfly",
        name: "<:silverquality:974666608050069534><:monarchbutterfly:975052344330969098>  monarchbutterfly",
        description: "[SILVER-QUALITY]  ",
        value: 20,
        type: ItemType.bug,
        habitatLocation: Location.forest,
        emoji: "<:monarchbutterfly:975052344330969098> ",
    },
    goldmonarchbutterfly: {
        id: "goldmonarchbutterfly",
        name: "<:goldquality:974666607974555758><:monarchbutterfly:975052344330969098>  monarchbutterfly",
        description: "[GOLD-QUALITY]",
        value: 20,
        type: ItemType.bug,
        habitatLocation: Location.forest,
        emoji: "<:monarchbutterfly:975052344330969098> ",
    },

    commonspider: {
        id: "commonspider",
        name: "<:spideritem:975052344309977138> spider",
        description: " ",
        value: 12,
        type: ItemType.bug,
        habitatLocation: Location.forest,
        emoji: "<:spideritem:975052344309977138>",
    },
    silverspider: {
        id: "silverspider",
        name: "<:silverquality:974666608050069534><:spideritem:975052344309977138> spider",
        description: "[SILVER-QUALITY]  ",
        value: 12,
        type: ItemType.bug,
        habitatLocation: Location.forest,
        emoji: "<:spideritem:975052344309977138>",
    },
    goldspider: {
        id: "goldspider",
        name: "<:goldquality:974666607974555758><:spideritem:975052344309977138> spider",
        description: "[GOLD-QUALITY]  ",
        value: 12,
        type: ItemType.bug,
        habitatLocation: Location.forest,
        emoji: "<:spideritem:975052344309977138>",
    },

    commonprayingmantis: {
        id: "commonprayingmantis",
        name: "<:prayingmantis:975052344192532490>prayingmantis",
        description: "  ",
        value: 12,
        type: ItemType.bug,
        habitatLocation: Location.forest,
        emoji: "<:prayingmantis:975052344192532490>",
    },
    silverprayingmantis: {
        id: "silverprayingmantis",
        name: "<:silverquality:974666608050069534><:prayingmantis:975052344192532490> prayingmantis",
        description: "[SILVER-QUALITY]   ",
        value: 12,
        type: ItemType.bug,
        habitatLocation: Location.forest,
        emoji: "<:prayingmantis:975052344192532490>",
    },
    goldprayingmantis: {
        id: "goldprayingmantis",
        name: "<:goldquality:974666607974555758><:prayingmantis:975052344192532490> prayingmantis",
        description: "[GOLD-QUALITY]   ",
        value: 12,
        type: ItemType.bug,
        habitatLocation: Location.forest,
        emoji: "<:prayingmantis:975052344192532490>",
    },

    commonbrowncicada: {
        id: "commonbrowncicada",
        name: "<:browncicada:974640810412896296> browncicada",
        description: "  ",
        value: 12,
        type: ItemType.bug,
        habitatLocation: Location.forest,
        emoji: "<:browncicada:974640810412896296>",
    },
    silverbrowncicada: {
        id: "silverbrowncicada",
        name: "<:silverquality:974666608050069534><:browncicada:974640810412896296> browncicada",
        description: "[SILVER-QUALITY]  ",
        value: 12,
        type: ItemType.bug,
        habitatLocation: Location.forest,
        emoji: "<:browncicada:974640810412896296>",
    },
    goldbrowncicada: {
        id: "goldbrowncicada",
        name: "<:goldquality:974666607974555758><:browncicada:974640810412896296> browncicada",
        description: "[GOLD-QUALITY]   ",
        value: 12,
        type: ItemType.bug,
        habitatLocation: Location.forest,
        emoji: "<:browncicada:974640810412896296>",
    },

    commongoliathbeetle: {
        id: "commongoliathbeetle",
        name: "<:goliathbeetle:974640810396098590> Freshwater Goby",
        description: " ",
        value: 12,
        type: ItemType.bug,
        habitatLocation: Location.forest,
        emoji: "<:goliathbeetle:974640810396098590>",
    },
    silvergoliathbeetle: {
        id: "silvergoliathbeetle",
        description: "[SILVER-QUALITY]  ",
        name: "<:silverquality:974666608050069534><:goliathbeetle:974640810396098590> Freshwater Goby",
        value: 12,
        type: ItemType.bug,
        habitatLocation: Location.forest,
        emoji: "<:goliathbeetle:974640810396098590>",
    },
    goldgoliathbeetle: {
        id: "goldgoliathbeetle",
        description: "[GOLD-QUALITY]",
        name: "<:goldquality:974666607974555758><:goliathbeetle:974640810396098590> Freshwater Goby",
        value: 12,
        type: ItemType.bug,
        habitatLocation: Location.forest,
        emoji: "<:goliathbeetle:974640810396098590>",
    },

    commonhornedhercules: {
        id: "commonhornedhercules",
        description: "  ",
        name: "<:hornedhercules:974640810794582047> hornedhercules",
        value: 12,
        type: ItemType.bug,
        habitatLocation: Location.forest,
        emoji: "<:hornedhercules:974640810794582047>",
    },
    silverhornedhercules: {
        id: "silverhornedhercules",
        description: "[SILVER-QUALITY]   ",
        name: "<:silverquality:974666608050069534><:hornedhercules:974640810794582047> hornedhercules",
        value: 12,
        type: ItemType.bug,
        habitatLocation: Location.forest,
        emoji: "<:hornedhercules:974640810794582047>",
    },
    goldhornedhercules: {
        id: "goldhornedhercules",
        description: "[GOLD-QUALITY]   ",
        name: "<:goldquality:974666607974555758><:hornedhercules:974640810794582047> hornedhercules",
        value: 12,
        type: ItemType.bug,
        habitatLocation: Location.forest,
        emoji: "<:hornedhercules:974640810794582047>",
    },

    commonwalkingstick: {
        id: "commonwalkingstick",
        description: "[GOLD-QUALITY]   ",
        name: "<:walkingstick:975052344251285564>  walkingstick",
        value: 12,
        type: ItemType.bug,
        habitatLocation: Location.forest,
        emoji: "<:walkingstick:975052344251285564> ",
    },
    silverwalkingstick: {
        id: "silverwalkingstick",
        description: "[GOLD-QUALITY]   ",
        name: "<:walkingstick:975052344251285564>  walkingstick",
        value: 12,
        type: ItemType.bug,
        habitatLocation: Location.forest,
        emoji: "<:walkingstick:975052344251285564> ",
    },
    goldwalkingstick: {
        id: "goldwalkingstick",
        description: "[GOLD-QUALITY]   ",
        name: "<:walkingstick:975052344251285564> walkingstick",
        value: 12,
        type: ItemType.bug,
        habitatLocation: Location.forest,
        emoji: "<:walkingstick:975052344251285564> ",
    },

    commonhermitcrab: {
        id: "commonhermitcrab",
        description: "[GOLD-QUALITY]   ",
        name: " <:hermitcrab:975052344179961856> commonhermitcrab",
        value: 12,
        type: ItemType.bug,
        habitatLocation: Location.forest,
        emoji: "<:hermitcrab:975052344179961856>",
    },
    silverhermitcrab: {
        id: "silverhermitcrab",
        description: "[GOLD-QUALITY]   ",
        name: " <:hermitcrab:975052344179961856> silverhermitcrab",
        value: 12,
        type: ItemType.bug,
        habitatLocation: Location.forest,
        emoji: "<:hermitcrab:975052344179961856>",
    },
    goldhermitcrab: {
        id: "goldhermitcrab",
        description: "[GOLD-QUALITY]   ",
        name: " <:hermitcrab:975052344179961856>  goldhermitcrab",
        value: 12,
        type: ItemType.bug,
        habitatLocation: Location.forest,
        emoji: "<:hermitcrab:975052344179961856>",
    },

    commongrasshopper: {
        id: "commongrasshopper",
        description: "[GOLD-QUALITY]   ",
        name: "<:grasshopper:975052344075112529> commongrasshopper",
        value: 12,
        type: ItemType.bug,
        habitatLocation: Location.forest,
        emoji: "<:grasshopper:975052344075112529>",
    },
    silvergrasshopper: {
        id: "silvergrasshopper",
        description: "[GOLD-QUALITY]   ",
        name: " <:grasshopper:975052344075112529> silvergrasshopper",
        value: 12,
        type: ItemType.bug,
        habitatLocation: Location.forest,
        emoji: "<:grasshopper:975052344075112529>",
    },
    goldgrasshopper: {
        id: "goldgrasshopper",
        description: "[GOLD-QUALITY]   ",
        name: " <:grasshopper:975052344075112529>  goldgrasshopper",
        value: 12,
        type: ItemType.bug,
        habitatLocation: Location.forest,
        emoji: "<:grasshopper:975052344075112529>",
    },

    DERP: {
        id: "DERP",
        description: "[GOLD-QUALITY]   ",
        name: " DERP",
        value: 12,
        type: ItemType.bug,
        habitatLocation: Location.forest,
        emoji: "",
    },
};