import _ from "lodash";
import Item, { ItemType } from "../../virtual/models/item";
import { armors } from "./armors";
import { consumables } from "./consumables";
import { instants } from "./instants";
import { materials } from "./materials";
import { weapons } from "./weapons";
import { fishes } from "./fishes";

export const items: {
    [itemType: ItemType | number]: { [itemId: string]: Item | any };
} = {
    [ItemType.weapon]: weapons,
    [ItemType.armor]: armors,
    [ItemType.consumable]: consumables,
    [ItemType.instant]: instants,
    [ItemType.material]: materials,
    [ItemType.fish]: fishes,
};

export const getItem = (itemId: string): Item | null => {
    const allItems: { [itemId: string]: Item } = {};
    Object.values(items).forEach(itemGroup => {
        Object.values(itemGroup).forEach(item => {
            allItems[item.id] = item;
        });
    });
    const item = allItems[itemId];
    if (!item) return null;
    return _.cloneDeep(item);
};
