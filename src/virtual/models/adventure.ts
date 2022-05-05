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

        let adventureMonsters: (Monster | undefined)[] = Object.values(monsters).map(monster => {
            // Add possible monsters if they are within 1 adventure level
            if (Math.abs(this.level - monster.adventureLevel) <= 1) {
                return monster;
            }
        });

        for (let i = 0; i < this.monstersAmount; i++) {
            let randomMonster =
                adventureMonsters[Math.floor(Math.random() * adventureMonsters.length)];
        }

        adventureMonsters.forEach(monster => {
            if (!monster) return;
            this.monsters.push(
                new Monster(
                    monster.id,
                    monster.name,
                    monster.hp,
                    monster.power,
                    monster.description,
                    monster.adventureLevel,
                    monster.dropTable
                )
            );
        });
    }
}
