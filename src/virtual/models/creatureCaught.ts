import { fishes } from "../../assets/items/fishes";
import { CreatureCaughtTable } from "./creatureCaughtTable";
import Item from "./item";
import { bugs } from "../../assets/items/bugs";

export default class CreatureCaught {
    creatureCaughtItems: { [itemId: string]: CreatureCaughtTable };

    constructor(creatureCaughtItems: { [itemId: string]: CreatureCaughtTable }) {
        this.creatureCaughtItems = creatureCaughtItems;
    }

    calculateCatch(type: string): Item[] {
        let creatureReturn: Item[] = [];
        Object.values(this.creatureCaughtItems).forEach(creatureCaughtItems => {
            let qualityCaughtRoll = this.calculateQuality();
            let catchedCreatureId: string = qualityCaughtRoll;
            let catchRoll = Math.ceil(Math.random() * 100);
            if (catchRoll <= creatureCaughtItems.chance) {
                catchedCreatureId += creatureCaughtItems.specieId;
                let fishAmount: number = creatureCaughtItems.amount;
                if (type === "fish") {
                    Object.values(fishes).forEach(_creature => {
                        if (catchedCreatureId === _creature.id) {
                            _creature.count = fishAmount;
                            creatureReturn.push(_creature);
                        }
                    });
                }
                if (type === "bug")
                    Object.values(bugs).forEach(_creature => {
                        if (catchedCreatureId === _creature.id) {
                            _creature.count = fishAmount;
                            creatureReturn.push(_creature);
                        }
                    });
            }
        });
        return creatureReturn;
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
