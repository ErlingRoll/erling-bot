import { Client, Message } from "discord.js";
import VirtualUser from "../../../virtual/models/virtualUser";
import DropTable from "../../../virtual/models/dropTable";
import { weapons } from "../../../assets/items/weapons";
import { minerals } from "../../../assets/items/minerals";

const miningDropTable: DropTable = new DropTable({
    copper: {
        item: minerals.copper,
        chance: 80,
        amount: 5,
        randomAmount: true,
    },
    iron: {
        item: minerals.iron,
        chance: 70,
        amount: 5,
        randomAmount: true,
    },
    silver: {
        item: minerals.silver,
        chance: 30,
        amount: 5,
        randomAmount: true,
    },
    gold: {
        item: minerals.gold,
        chance: 20,
        amount: 5,
        randomAmount: true,
    },
    diamond: {
        item: minerals.diamond,
        chance: 5,
        amount: 5,
        randomAmount: true,
    },
    netherite: {
        item: minerals.netherite,
        chance: 1,
        amount: 3,
        randomAmount: true,
    },
});

export default async (client: Client, message: Message, user: VirtualUser) => {
    if (!user.hasItem(weapons.pickaxe) && !user.hasItem(weapons.minecraftstevediamondpickaxe)) {
        return message.reply(`You need a **${weapons.pickaxe.name}** to mine`);
    }

    let mineCollapseRoll = Math.ceil(Math.random() * 100);
    if (mineCollapseRoll <= 10) {
        let mineCollapseDamageRoll = Math.ceil(Math.random() * 10);
        await user.takeDamage(mineCollapseDamageRoll);
        let messageBuilder = `The mine collapses and **<@${user.id}>** takes ${mineCollapseDamageRoll} collapsing-mine damage.`;
        if (user.hp <= 0) {
            messageBuilder += `**<@${user.id}>** gets buried in rubble and dies.`;
            let checkKilledMessage = await user.checkKilled();
            messageBuilder += checkKilledMessage;
        }
        return message.reply(messageBuilder);
    }

    let pickaxeBreakRoll = Math.ceil(Math.random() * 100);
    if (pickaxeBreakRoll <= 3 && !user.hasItem(weapons.minecraftstevediamondpickaxe)) {
        let messageBuilder = `**<@${user.id}>** swings the pickaxe at a suprisingly hard rock and the pickaxe breaks :(`;
        await user.removeItem(weapons.pickaxe);
        return message.reply(messageBuilder);
    }

    let loot = miningDropTable.rollLoot(
        user.luck + (user.hasItem(weapons.minecraftstevediamondpickaxe) ? 2 : 1)
    );

    if (loot.length === 0) {
        return message.reply("No loot today. You are sad.");
    }

    let messageBuilder = "__**Loot**__";
    let lootSavePromise = loot.map(async lootItem => {
        messageBuilder += `\n**${lootItem.name}** x ${lootItem.count}`;
        return user.addItem(lootItem);
    });
    await Promise.all(lootSavePromise);

    return message.reply(messageBuilder);
};
