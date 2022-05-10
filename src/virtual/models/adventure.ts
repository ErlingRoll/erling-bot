import { AdventureLevel } from "../../constants/adventure";
import { monsters } from "../../assets/monsters/monsters";
import Monster from "./monster";
import { DropTableItem } from "./dropTableItem";

export default class Adventure {
    level: AdventureLevel;
    monstersAmount: number;
    monsters: Monster[];

    constructor(level: AdventureLevel, monstersAmount: number = 3) {
        this.level = level;
        this.monstersAmount = monstersAmount;
        this.monsters = [];

        let possibleAdventureMonsters: Monster[] = [];

        Object.keys(monsters).forEach(adventureLevel => {
            let adventureLevelNumber = parseInt(adventureLevel);
            if (Math.abs(this.level - adventureLevelNumber) >= 1) return;
            possibleAdventureMonsters.push(
                ...(Object.values(monsters[adventureLevelNumber]) as Monster[])
            );
        });

        const encounters = Math.ceil(Math.random() * this.monstersAmount);

        for (let i = 0; i < encounters; i++) {
            let randomMonster =
                possibleAdventureMonsters[
                    Math.floor(Math.random() * possibleAdventureMonsters.length)
                ];

            if (randomMonster.adventureLevel > this.level) {
                const allowDifficultMonster = Math.ceil(Math.random() * 100) <= 10;
                if (!allowDifficultMonster) {
                    i--;
                    continue;
                }
            }

            if (!randomMonster) continue;
            this.monsters.push(
                new Monster(
                    randomMonster.id,
                    randomMonster.name,
                    randomMonster.hp,
                    randomMonster.power,
                    randomMonster.description,
                    randomMonster.adventureLevel,
                    randomMonster.expDrop,
                    randomMonster.damagetype,
                    randomMonster.dropTable as unknown as { [itemId: string]: DropTableItem }
                )
            );
        }
    }
}
