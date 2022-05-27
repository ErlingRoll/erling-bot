import { Client, Message } from "discord.js";
import VirtualUser from "../../../virtual/models/virtualUser";
import { parseArgs } from "../../../events/middleware";

// !stock [0](buy,sell,price), [1]((buy,sell = amount) (price = stockprice ))
export default async (client: Client, message: Message, user: VirtualUser) => {
    const args = parseArgs(message);
};
