import Item, { ItemType } from "./item";

export default class Weapon extends Item {
    damage: number;

    constructor(
        id: string,
        name: string,
        description: string,
        value: number,
        type: ItemType,
        damage: number,
        use: CallableFunction = () => {},
        count: number = 1
    ) {
        super(id, name, description, value, type, use, count);
        this.damage = damage;
    }
}
