import { Client, Message } from "discord.js";
import Adventure from "../../../virtual/models/adventure";
import { AdventureLevel } from "../../../constants/adventure";
import { parseArgs } from "../../../events/middleware";
import VirtualUser from "../../../virtual/models/virtualUser";
import Monster from "../../../virtual/models/monster";

export default async (client: Client, message: Message, user: VirtualUser) => {
    const args = parseArgs(message);

    if (!args || !args[1]) {
        return message.reply(
            "Please select an adventure level. To see all levels: `!adventure levels`"
        );
    }

    const level: string = args[1];

    if (level === "levels" || !Object.values(AdventureLevel).includes(level)) {
        let messageBuilder = "__**Adventure levels**__";

        Object.values(AdventureLevel).forEach((level: any) => {
            if (!isNaN(level)) {
                messageBuilder += `\n - ${AdventureLevel[level]}`;
            }
        });

        return message.reply(messageBuilder);
    }

    const adventureLevel: AdventureLevel = AdventureLevel[level as any] as AdventureLevel | any;
    const adventure = new Adventure(adventureLevel, 3);

    let messageBuilder = `**<@${user.id}>** goes on a(n) ${level} adventure!`;

    for (let i = 0; i < adventure.monsters.length; i++) {
        const monster = adventure.monsters[i];
        messageBuilder += `\n**<@${user.id}>** encounters a(n) **${monster.name}**.`;
        const monsterDamageRoll = monster.getDamageRoll();
        user.takeDamage(monsterDamageRoll);
        messageBuilder += `\n**${monster.name}** hits **<@${user.id}>** for **${monsterDamageRoll}** monster damage!`;
        if (user.hp <= 0) {
            await user.checkKilled();
            messageBuilder += `\n**${monster.name}** slaughters **<@${user.id}>**!`;
            return message.reply(messageBuilder);
        }
        const userDamageRoll = user.rollDamage();
        messageBuilder += `\n**<@${user.id}>** hits **${monster.name}** for **${userDamageRoll}** PvE damage!`;
        if (userDamageRoll >= monster.hp) {
            let lootDropped = monster.dropLoot();
            if (lootDropped.length === 0) {
                messageBuilder += `\n**${monster.name}** is slayed but drops nothing.`;
            } else {
                messageBuilder += `\n**${monster.name}** is slayed and drops: `;
                let lootSavePromise = lootDropped.map(async lootItem => {
                    messageBuilder += `\n**${lootItem.name}** x ${lootItem.count}`;
                    return user.addItem(lootItem);
                });
                await Promise.all(lootSavePromise);
            }
        } else {
            messageBuilder += `\n**${monster.name}** escapes!`;
        }
    }

    return message.reply(messageBuilder);
};
