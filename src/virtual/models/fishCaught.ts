import { fishes } from "../../assets/items/fishes";
import { FishCaughtTable } from "./fishCaughtTable";
import Item from "./item";

export default class FishCaught {
    fishCaughtItems: { [itemId: string]: FishCaughtTable };

    constructor(fishCaughtItems: { [itemId: string]: FishCaughtTable }) {
        this.fishCaughtItems = fishCaughtItems;
    }

    calculateCatch(): Item[] {
        let fishReturn: Item[] = [];
        Object.values(this.fishCaughtItems).forEach(fishCaughtItems => {
            let qualityCaughtRoll = this.calculateQuality();
            let catchedFishId: string = qualityCaughtRoll;
            let catchRoll = Math.ceil(Math.random() * 100);
            if (catchRoll <= fishCaughtItems.chance) {
                catchedFishId += fishCaughtItems.specieId;
                let fishAmount: number = fishCaughtItems.amount;
                Object.values(fishes).forEach(fishyfishy => {
                    if (catchedFishId === fishyfishy.id) {
                        fishyfishy.count = fishAmount;
                        fishReturn.push(fishyfishy);
                    }
                });
            }
        });
        return fishReturn;
    }

    calculateQuality(): string {
        let qualityCheck = "";
        let qualityRoll: Number = Math.ceil(Math.random() * 100);
        if (qualityRoll <= 10 && qualityRoll > 0) {
            qualityCheck += "gold";
        }
        if (qualityRoll <= 40 && qualityRoll > 10) {
            qualityCheck += "silver";
        }
        if (qualityRoll <= 100 && qualityRoll > 40) {
            qualityCheck += "common";
        }
        return qualityCheck;
    }
}
