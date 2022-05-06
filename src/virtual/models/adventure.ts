import { AdventureLevel } from "../../constants/adventure";
import { monsters } from "../../assets/monsters/monsters";
import Monster from "./monster";

export default class Adventure {
    level: AdventureLevel;
    monstersAmount: number;
    monsters: Monster[];

    constructor(level: AdventureLevel, monstersAmount: number = 3) {
        this.level = level;
        this.monstersAmount = monstersAmount;
        this.monsters = [];

        let adventureMonsters: (Monster | undefined)[] = Object.values(monsters).filter(monster => {
            // Add possible monsters if they are within 1 adventure level
            return Math.abs(this.level - monster.adventureLevel) <= 1;
        });

        for (let i = 0; i < this.monstersAmount; i++) {
            let randomMonster =
                adventureMonsters[Math.floor(Math.random() * adventureMonsters.length)];

            if (!randomMonster) continue;
            this.monsters.push(
                new Monster(
                    randomMonster.id,
                    randomMonster.name,
                    randomMonster.hp,
                    randomMonster.power,
                    randomMonster.description,
                    randomMonster.adventureLevel,
                    randomMonster.dropTable
                )
            );
        }
    }
}
