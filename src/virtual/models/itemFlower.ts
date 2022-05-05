import { dropTableItem } from "./dropTableItem";
import Item, { ItemType } from "./item";


export default class itemFlower extends Item {
    flower: string;
    dropTable: {[itemId: string]: dropTableItem};

    constructor(
        id: string,
        name: string,
        description: string,
        value: number,
        type: ItemType,
        use: CallableFunction,
        count: number,
        flower: string,
        dropTable: {[itemId: string]: dropTableItem}
    ) {
       super(id,name,description,value,type,use,count)
       this.flower = flower;
       this.dropTable = dropTable;
    }
        
    
    
    

}