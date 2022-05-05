import { Client, Message } from "discord.js";
import { dropTableItem } from "virtual/models/dropTableItem";
import Item from "virtual/models/item";
import VirtualUser from "virtual/models/virtualUser";

const dropTable: any ={
    Wood:{
        name: "Wood",
        value: 5,
        chance: 70,
    },
    Pebble:{
        name: "Pebble",
        value: 10,
        chance: 60,
    },
    Vine:{
        name: "Vine",
        value: 20,
        chance: 40,
    },
    Leather:{
        name: "Leather",
        value: 30,
        chance: 70,
    },
    
    Treasure:{
        name: "Treasure",
        value: 1500,
        chance: 0.5,

    },
}
// Droptable for flower
const dropTableFlower: any ={
    Dandelion:{
        name: "Dandelion",
        value: 5,
        chance: 70,
    },
    Fireweed:{
        name: "Fireweed",
        value: 10,
        chance: 60,     
    },
    MeadowButterCup:{
        name: "MeadowButterCup",
        value: 15,
        chance: 50,
    },
    FourLeafedClover:{
        name: "4LeafClover",
        value: 250,
        chance: 10,
    }
} 
//Droptable for treasurechest
const dropTableTreasure: any ={
    FourLeafedClover:{
        name: "4LeafClover",
        value: 250,
        chance: 10,
        number: 2,
    },
    MinecraftSteveDiamondPickaxe:{
        name: "Minecraft Steve's Diamond Pickaxe",
        value: 1000,
        chance: 80,
    }

}

export default async (client: Client, message: Message, user: VirtualUser) => {
    let loot: Item[] = [];

    Object.keys(dropTable).forEach(dropName => {
        let forageRarity = Math.floor(Math.random() * 100) + 1;
        const item: dropTableItem = dropTable[dropName];
        if (forageRarity <= item.chance) {
            loot.push(item.item);
        }
    });
    Object.keys(dropTableFlower).forEach(dropName => {
        let flowerPick = Math.floor(Math.random() * 100) + 1;
        const flower: dropTableItem = dropTableFlower[dropName];
        if (flowerPick <= flower.chance){
            loot.push(flower.item)
        }
    });
    Object.keys(dropTableTreasure).forEach(dropName => {
        let treasureRarity = Math.floor(Math.random()*100) + 1;
        const treasure: dropTableItem = dropTableTreasure[dropName];
        if (treasureRarity <= treasure.chance){
            loot.push(treasure.item) 
        }
    })

    if (loot.length === 0) {
        return message.reply("You couldn't find anything on the trip. You are devastated")
    }
    

    let messageBuilder = "__**Loot**__";
    
    loot.forEach(async _item => {
        messageBuilder += `\n${_item.name} | Value: ${_item.value}`
        await user.addItem(_item);
    });

    messageBuilder += `\n**${user.id}}** tucks the loot safely in their pocket!`;
    return message.reply(messageBuilder);
};