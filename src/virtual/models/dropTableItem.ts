import Item from "./item";

export type dropTableItem = {
    chance: number;
    item: Item;
    amount: number;
    randomAmount?: boolean;
};
