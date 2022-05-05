import { AdventureLevel } from "./adventure";
import { dropTableItem } from "./dropTableItem";

export default class Monster {
    id: string;
    name: string;
    description: string;
    level: AdventureLevel;
    hp: number;
    damage: number;
    dropTable: { [itemId: string]: dropTableItem };

    constructor(
        id: string,
        name: string,
        description: string,
        level: AdventureLevel,
        hp: number,
        damage: number,
        dropTable: { [itemId: string]: dropTableItem }
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.level = level;
        this.hp = hp;
        this.damage = damage;
        this.dropTable = dropTable;
    }
}
