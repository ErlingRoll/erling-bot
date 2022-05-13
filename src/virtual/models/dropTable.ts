import _ from "lodash";
import { DropTableItem } from "./dropTableItem";
import Item from "./item";

export default class DropTable {
    dropTableItems: { [itemId: string]: DropTableItem };

    constructor(dropTableItems: { [itemId: string]: DropTableItem }) {
        this.dropTableItems = dropTableItems;
    }

    rollLoot(advantage: number = 0): Item[] {
        let drops: Item[] = [];
        Object.values(this.dropTableItems).forEach(dropTableItem => {
            const _dropTableItem = _.cloneDeep(dropTableItem);
            let dropRoll = Math.ceil(Math.random() * 100);

            for (let i = 0; i < advantage; i++) {
                let roll = Math.ceil(Math.random() * 100);
                if (advantage > 0 && roll > dropRoll) {
                    dropRoll = roll;
                }
                if (advantage < 0 && roll < dropRoll) {
                    dropRoll = roll;
                }
            }

            if (dropRoll >= 100 - _dropTableItem.chance) {
                let droppedItem = _.cloneDeep(_dropTableItem.item);
                if (_dropTableItem.randomAmount) {
                    let itemCount = Math.ceil(Math.random() * _dropTableItem.amount);

                    for (let i = 0; i < advantage; i++) {
                        let newCount = Math.ceil(Math.random() * _dropTableItem.amount);
                        if (advantage > 0 && newCount > itemCount) {
                            itemCount = newCount;
                        }
                        if (advantage < 0 && newCount < itemCount) {
                            itemCount = newCount;
                        }
                    }
                    droppedItem.count = itemCount;
                } else {
                    droppedItem.count = _dropTableItem.amount || 1;
                }
                drops.push(droppedItem);
            }
        });
        return drops;
    }
}
