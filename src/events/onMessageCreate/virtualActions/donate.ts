import { Client, Message } from "discord.js";
import { parseArgs } from "../../../events/middleware";
import VirtualUser from "virtual/models/virtualUser";
import { randomAdjective } from "../../../constants/adjectives";
import rob from "./rob";

export default async (
    client: Client,
    message: Message,
    user: VirtualUser,
    target: VirtualUser,
    booleanCheck: boolean
) => {
    let adjective: string = randomAdjective("player");
    const args = parseArgs(message);

    if (
        !args ||
        !args[1] ||
        !args[2] ||
        user.id === target.id ||
        !target.id ||
        !isNaN(Number(args[1]))
    ) {
        return message.reply(
            `[INVALID TARGER] No valid target to donate. Please select a ${adjective} bastard!`
        );
    }

    if (!user || !target) return;

    let randomNum = Math.floor(Math.random() * 21) + 2;
    let adjectivepoor = randomAdjective("fish");

    let donationString = args[2];
    let donationAmount = 1;
    if (!isNaN(Number(donationString))) {
        donationAmount = Number(donationString);
    }
    if (booleanCheck) {
        let forcedDonation = Math.floor(user.money / 10);
        if (target.money <= 0) {
            target.money += forcedDonation;
            user.money -= forcedDonation;
            await Promise.all([target.update(), user.update()]);
            return message.reply(
                `You couldn't donate a negative sum of money...\n ...So you decided to try to steal some shekels from **<@${
                    target.id
                }>** instead. However, as **<@${target.id}>** has no money left, ${randomAdjective(
                    "player"
                )}**<@${user.id}>** gives ${forcedDonation} shekles to **<@${target.id}>**`
            );
        }
    } else {
        if (user.money < donationAmount) {
            return message.reply(
                `**<@${user.id}>** tries to give ${donationAmount} shekels to **<@${target.id}>** but to do so, he needs a donation (or ${randomNum}).`
            );
        }

        if (user.money < donationAmount) {
            if (user.money === 0 || user.money < 0) {
                return message.reply(
                    `**<@${user.id}>**, you are by definition broke. Maybe try to ask for a donation you poor ${adjectivepoor} bastard.).`
                );
            }
        }

        if (donationAmount === 0) {
            return message.reply(
                `**<@${user.id}>**... I'm sorry? Are you by any chance retarded or profoundly dumb? A donation is something you give, you can't give away zero of something `
            );
        }
        if (donationAmount < 0) {
            rob(client, message, user, target, true);
        }

        if (donationAmount <= 10 && donationAmount > 0) {
            target.money += donationAmount;
            user.money -= donationAmount;
            await Promise.all([target.update(), user.update()]);
            return message.reply(
                `**<@${user.id}>** gives ${donationAmount} shekles to *<@${target.id}>** (Cheapskate)`
            );
        }

        if (donationAmount > 10 && donationAmount < 999) {
            target.money += donationAmount;
            user.money -= donationAmount;
            await Promise.all([target.update(), user.update()]);
            return message.reply(
                `**<@${user.id}>** gives **${donationAmount}** shekels to **<@${target.id}>**.`
            );
        }
    }
};
