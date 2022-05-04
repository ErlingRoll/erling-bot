import Item, { ItemType } from "./item";

export default class Armor extends Item {
    defense: number;

    constructor(
        id: string,
        name: string,
        description: string,
        value: number,
        type: ItemType,
        defense: number,
        use: CallableFunction = () => {},
        count: number = 1
    ) {
        super(id, name, description, value, type, use, count);
        this.defense = defense;
    }
}
