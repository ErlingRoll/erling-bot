import { Client, Message } from "discord.js";
import VirtualUser from "virtual/models/virtualUser";
import { ItemType } from "../../../virtual/models/item";
import fish from "./fish";

export default async (client: Client, message: Message, user: VirtualUser) => {
    if (!user.items || Object.keys(user.items).length === 0 || user.items === {}) {
        return message.reply("You dont have any fish");
    }
    //hver emoji har (fish.emoji.length - fish.specie.lenght )
    let messageBuilder = `Aquarium\n`;

    let aquariumFrame = `------------------------------------------------------------------------------------------`;
    let aquariumBuilder = ``;
    let aquariumInterior = ``;
    let finishedAquarium = ``;
    let aquariumInteriorDone = ``;
    aquariumBuilder += `${aquariumFrame}\n`;

    const horizonLimit: number = aquariumFrame.length;
    const verticalLimit: number = 10;
    // const maxFishInAquarium: number =

    let fishToBePrinted: string[] = [];
    let emojiLenght: number[] = [];

    Object.values(user.items).forEach(_item => {
        if (_item.type === ItemType.fish) {
            fishToBePrinted.push(_item.emoji);
            let emojiLen: string = _item.emoji;
            console.log(emojiLen.length);
            emojiLenght.push(emojiLen.length - 18 - 4);
            let numberOfFish = _item.count;
            if (numberOfFish > 0) {
                aquariumInterior += `${_item.emoji}§`; //+ ` `.repeat(randomSpace);
                numberOfFish -= 1;
            }
        }
    });
    console.log(`emojiLenght: ${emojiLenght}    fishToBePrinted: ${fishToBePrinted} `);

    finishedAquarium += `${aquariumFrame}\n`;
    finishedAquarium += aquariumInteriorDone;
    finishedAquarium += `\n${aquariumFrame}`;
    messageBuilder += finishedAquarium;

    return message.reply(messageBuilder);

    function replaceChar(origString: string, replaceChar: string, index: number): string {
        let firstPart = origString.substring(0, index);
        let lastPart = origString.substring(index + 1);

        let newString = firstPart + replaceChar + lastPart;
        return newString;
    }

    function elementCounter(text: string, element: string): number {
        return text.split(element).filter(i => i.length).length;
    }
    // function defineSizeAquarium(xLength: Number, yLength: Number): number[] {}
};

//konstant lengde på rammen til akvariet.
//      Hvor mange linjer (vertikalt) et standaristert akvarie skal ha
//      Hvor bredt akvariet skal være (standard måleenhet for utregning av plass per horistontale linje i akvariet)
// Konstant max grense av for mange fisk du kan ha i ditt akvarie (fra inventory) ut ifra khar plass i akvariet
