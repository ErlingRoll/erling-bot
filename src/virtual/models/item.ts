import { Location } from "../../constants/locations";
export enum ItemType {
    instant,
    consumable,
    weapon,
    armor,
    material,
    fish,
    bug,
}

export default class Item {
    id: string;
    name: string;
    description: string;
    value: number;
    type: ItemType;
    use?: CallableFunction;
    count?: number;
    emoji?: string;
    habitatLocation?: Location;

    constructor(
        id: string,
        name: string,
        description: string,
        value: number,
        type: ItemType,
        use: CallableFunction = () => {},
        count: number = 1,
        emoji: string = "",
        habitatLocation?: Location
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.value = value;
        this.type = type;
        this.use = use;
        this.count = count;
        this.emoji = emoji;
        this.habitatLocation = habitatLocation;
    }
}
