import Item, { ItemType } from "./item";

export default class SoulStone extends Item {
    maxHp: number;

    constructor(
        id: string,
        name: string,
        description: string,
        value: number,
        type: ItemType,
        maxHp: number,
        use: CallableFunction = () => {},
        count: number = 1
    ) {
        super(id, name, description, value, type, use, count);
        this.maxHp = maxHp;
    }
}
