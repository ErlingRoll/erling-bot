import Item from "./item";

export type DropTableItem = {
    chance: number;
    item: Item;
    amount: number;
    randomAmount?: boolean;
};
