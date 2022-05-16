export const adjectives: { [adjectiveObject: string]: string[] } = {
    playeradjective: [
        "jewish",
        "retard",
        "sexy",
        "stingy",
        "wholesome",
        "weeb",
        "sweaty",
        "dapper",
        "deranged",
        "funnyman",
        "racist",
        "nutty",
        "zany",
        "pathetic",
    ],
    itemadjective: [
        "fragile",
        "dirty",
        "godly",
        "shabby",
        "prehistoric",
        "one of a kind",
        "gay",
        "minimalistic",
        "pathetic",
        "gigantic",
        "shit",
        "below-average",
        "above-average",
    ],
    fishadjective: ["slimy", "puny", "delicate", "smelly", "good-looking"],

    preposisionBeforeDonate: [
        "a poor bastard",
        "a smelly Bozo",
        "a less fortunate individual",
        "a fucking degenerate",
        "a piece of shit",
        "a friend:heart:",
        "an individual with no income",
        "a noob in ActiveBurger:tm:",
        "a desperate beggar",
    ],
    preposisionBeforeDonateIfMarius: [
        "We all know that Marius is poor",
        "Yeah yeah, Marius did kinda need that",
        "Holmenkollen is kinda ghetto lmao",
    ],
    prepositionIfMariusDonate: ["No donation in any size of sum will never outweight your ----"],
};

/**
 * Function that returns a random adjective
 * @param string *{"fish", "item", "person"}*
 */
export function randomAdjective(idAdjectiveObjectType: string): string {
    let adjectiveOutput = "";
    let randomNumber = 0;

    if (idAdjectiveObjectType === "fish") {
        randomNumber += Math.floor(Math.random() * adjectives.fishadjective.length);
        adjectiveOutput = adjectives.fishadjective[randomNumber];
    }
    if (idAdjectiveObjectType === "item") {
        randomNumber += Math.floor(Math.random() * adjectives.itemadjective.length);
        adjectiveOutput = adjectives.itemadjective[randomNumber];
    }
    if (idAdjectiveObjectType === "player") {
        randomNumber += Math.floor(Math.random() * adjectives.playeradjective.length);
        adjectiveOutput = adjectives.playeradjective[randomNumber];
    }

    return adjectiveOutput;
}
