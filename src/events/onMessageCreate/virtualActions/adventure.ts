import { Client, Message } from "discord.js";
import Adventure from "../../../virtual/models/adventure";
import { AdventureLevel } from "../../../constants/adventure";
import { parseArgs } from "../../../events/middleware";
import VirtualUser from "../../../virtual/models/virtualUser";
import Monster from "../../../virtual/models/monster";

const COMBAT_TURNS: number = 3;

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

    let messageBuilder = `__**<@${user.id}>** goes on a(n) ${level} adventure!__`;

    for (let i = 0; i < adventure.monsters.length; i++) {
        // Start encounter
        const monster = adventure.monsters[i];
        messageBuilder += `\n**<@${user.id}>** encounters a(n) **${monster.name}**.`;

        let monsterDamageMessage = "";
        let userDamageMessage = "";

        // Damage phases
        for (let i = 0; i < COMBAT_TURNS; i++) {
            // Monster hits
            let monsterDamageRoll = monster.rollDamage();
            if (user.armor) monsterDamageRoll -= user.armor.defense;
            if (monsterDamageRoll < 0) monsterDamageRoll = 0;
            if (monsterDamageMessage !== "") monsterDamageMessage += ", ";
            monsterDamageMessage += `${monsterDamageRoll}`;
            user.takeDamage(monsterDamageRoll);
            if (user.hp <= 0) break;

            // User Hits
            let userDamageRoll = user.rollDamage();
            if (userDamageMessage !== "") userDamageMessage += ", ";
            userDamageMessage += `${userDamageRoll}`;
            monster.takeDamage(userDamageRoll);
            if (monster.hp <= 0) break;
        }

        // Add damage messages
        messageBuilder += `\n**${monster.name}** hits **<@${user.id}>** for **${monsterDamageMessage}** monster damage!`;
        messageBuilder += `\n**<@${user.id}>** hits **${monster.name}** for **${userDamageMessage}** PvE damage!`;

        if (user.hp <= 0) {
            await user.checkKilled();
            messageBuilder += `\n**${monster.name}** slaughters **<@${user.id}>**!`;
            return message.reply(messageBuilder);
        }

        if (monster.hp <= 0) {
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
            messageBuilder += `\n**${monster.name}** flees!`;
        }

        messageBuilder += "\n";
    }

    return message.reply(messageBuilder);
};
