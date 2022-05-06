import { AdventureLevel } from "../../constants/adventure";
import { dropTableItem } from "./dropTableItem";
import Entity from "./entity";
import Item from "./item";

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

    dropLoot(): Item[] {
        let drops: Item[] = [];
        Object.values(this.dropTable).forEach(dropTableItem => {
            let dropRoll = Math.ceil(Math.random() * 100);
            if (dropRoll <= dropTableItem.chance) {
                let droppedItem = dropTableItem.item;
                if (dropTableItem.randomAmount) {
                    droppedItem.count = Math.ceil(Math.random() * dropTableItem.amount);
                } else {
                    droppedItem.count = dropTableItem.amount;
                }
                drops.push(droppedItem);
            }
        });
        return drops;
    }
}
