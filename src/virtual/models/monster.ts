import { dropTableItem } from "./dropTableItem";

export default class Monster {
    name: string;
    description: string;
    dropTable: { [itemId: string]: dropTableItem };

    constructor(name: string, description: string, dropTable: { [itemId: string]: dropTableItem }) {
        this.name = name;
        this.description = description;
        this.dropTable = dropTable;
    }
}
