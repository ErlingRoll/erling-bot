import { Client, Message } from "discord.js";
import VirtualUser from "virtual/models/virtualUser";

export default async (client: Client, message: Message, user: VirtualUser) => {
    message.reply(`**${user.name}** bank balance: ${user.money} Shekels`);
};
