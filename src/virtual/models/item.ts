export enum ItemType {
    "insant",
    "consumable",
    "weapon",
    "armor",
    "material",
}

export default class Item {
    id: string;
    name: string;
    description: string;
    value: number;
    type: ItemType;
    use?: CallableFunction;
    count?: number;

    constructor(
        id: string,
        name: string,
        description: string,
        value: number,
        type: ItemType,
        use: CallableFunction = () => {},
        count: number = 1
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.value = value;
        this.type = type;
        this.use = use;
        this.count = count;
    }
}
