import { WeekDay } from "constants/weekday";
import { StockMarkedSeedTable } from "./stockmarkedSeedTable";
import Time, { tableoftimes } from "./time";

export const seedstockmarked: { [seedId: string]: StockMarkedSeedTable } = {
    // spikepattern: {
    //     seedtype: ;
    //     fluxuatingmax: 20;
    //     listPrices: [startPrice];
    // },
    // decreasepattern: {
    //     seedtype:  ;
    //     startPrice: 0;
    //     fluxuatingmax: 20;
    //     listPrices:  [];
    // },
    // fluxuatepattern: {
    //     seedtype:  ;
    //     startPrice: 0;
    //     fluxuatingmax: 20;
    //     listPrices:  [];
    // },
    // randomnegative: {
    //     seedtype:  ;
    //     startPrice:  ;
    //     fluxuatingmax: 20;
    //     listPrices:  [];
    // },
    // randompositive: {
    //     seedtype:  ;
    //     startPrice:  ;
    //     fluxuatingmax: 20;
    //     listPrices: [];
    // },
    // random6: {
    //     seedtype:  ;
    //     startPrice:  ;
    //     fluxuatingmax: 20;
    //     listPrices:  [];
    // },
};

const totalX: number = 12;
const fluxValue: number = 10;
const starprice: number = 20;

export function calculateNumberForPatterns(pattern: string): number[] {
    let numberOutput: number[] = [];
    if (pattern === "spike") {
        let startPrice: number = startingPrice();
        let spikeHeight: number = calculateSpikeHeight();
        let spikeWidth: number = 1;
        let spikeDay: number = calculateBestDay();
        console.log(
            `spikeHeight: ${spikeHeight}\n spikeWidth: ${spikeWidth}\n spikeDay: ${spikeDay} \n startPrice: ${starprice}`
        );
        for (let x = 0; x < totalX; x++) {
            numberOutput.push(
                Math.floor(
                    ((spikeHeight / (((spikeWidth / 10) * (x - spikeDay)) ^ (2 + 2))) ^ 2) +
                        Math.sin(x) +
                        starprice
                )
            );
        }
        return numberOutput;
    }
    if (pattern === "decrease") {
        for (let x = 0; x > totalX; x++) {}
        return numberOutput;
    }
    if (pattern === "flux") {
        for (let x = 0; x > totalX; x++) {}
        return numberOutput;
    }
    if (pattern === "randompositive") {
        for (let x = 0; x > totalX; x++) {}
        return numberOutput;
    }
    if (pattern === "randomnegative") {
        for (let x = 0; x > totalX; x++) {}
        return numberOutput;
    }
    return numberOutput;
}

function calculateBestDay(): number {
    return Math.floor(Math.random() * (12 - 2 + 1) + 2);
}

function startingPrice(): number {
    return Math.floor(Math.random() * (60 - 20 + 1) + 20);
}

function calculateSpikeHeight(): number {
    return Math.floor(Math.random() * (50 - 25 + 1) + 25);
}
// function calculateSpikeWidth(): number {
//     return Math.floor(Math.random() * (14 - 7 + 1) + 7);
// }
