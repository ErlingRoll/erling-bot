import { AdventureLevel } from "./adventure";
import { dropTableItem } from "./dropTableItem";
import Entity from "./entity";

export default class Monster extends Entity {
    description: string;
    adventureLevel: AdventureLevel;
    dropTable: { [itemId: string]: dropTableItem };

    constructor(
        id: string,
        name: string,
        hp: number,
        power: number,
        description: string,
        adventureLevel: AdventureLevel,
        dropTable: { [itemId: string]: dropTableItem }
    ) {
        super(id, name, hp, power);
        this.description = description;
        this.adventureLevel = adventureLevel;
        this.dropTable = dropTable;
    }
}
