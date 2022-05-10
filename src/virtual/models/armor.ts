import Item, { ItemType } from "./item";

export default class Armor extends Item {
    defence: number;

    constructor(
        id: string,
        name: string,
        description: string,
        value: number,
        type: ItemType,
        defence: number,
        use: CallableFunction = () => {},
        count: number = 1
    ) {
        super(id, name, description, value, type, use, count);
        this.defence = defence;
    }
}
