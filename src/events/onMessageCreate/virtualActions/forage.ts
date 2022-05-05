import { Client, Message } from "discord.js";
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
        change: 0.5,

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
    let loot: any[] = [];

    Object.keys(dropTable).forEach(dropName => {
        let forageRarity = Math.floor(Math.random() * 100) + 1;
        let flowerPick = Math.floor(Math.random() * 100) + 1;
        const item: any = dropTable[dropName];
        const flower: any = dropTableFlower[dropName];
        if (flowerPick <= flower.change){
            loot.push(flower)
        }
        if (forageRarity <= item.change) {
            loot.push(item);
        }
    });

    if (loot.length === 0) {
        return message.reply("You couldn't find anything on the trip. You are devastated")
    }

    let messageBuilder = "__**Loot**__";
    
    loot.forEach(async _item => {
        messageBuilder += `\n${_item.name} | Value: ${_item.value}`
        await user.addItem(_item);
    });

    messageBuilder += `\n**${user.name}** tucks the loot safely in their pocket!`;
    return message.reply(messageBuilder);
};