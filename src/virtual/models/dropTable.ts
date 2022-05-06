import { DropTableItem } from "./dropTableItem";
import Item from "./item";

export default class DropTable {
    dropTableItems: { [itemId: string]: DropTableItem };

    constructor(dropTableItems: { [itemId: string]: DropTableItem }) {
        this.dropTableItems = dropTableItems;
    }

    rollLoot(): Item[] {
        let drops: Item[] = [];
        Object.values(this.dropTableItems).forEach(dropTableItem => {
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
