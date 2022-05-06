import { Client, Message } from "discord.js";
import VirtualUser from "../../../virtual/models/virtualUser";
import { collection, query, getDocs } from "firebase/firestore";
import { firestore } from "../../../services/firebase";

export default async (client: Client, message: Message, user: VirtualUser) => {
    let messageBuilder = "__**Leaderboard**__";

    const usersQuery = query(collection(firestore, "users"));
    const usersSnapshot = await getDocs(usersQuery);

    const users: VirtualUser[] = [];
    usersSnapshot.forEach(userDoc => {
        const userData = userDoc.data() as VirtualUser;
        users.push(userData);
    });

    users.sort((a, b) => b.money - a.money);
    const myIndex = users.findIndex(_user => _user.id === user.id);
    users.slice(0, 10).forEach((user, index) => {
        if (index === myIndex) {
            messageBuilder += `\n**${index + 1}. <@${user.id}> (Level ${user.level}) | ${
                user.money
            } money**`;
        } else {
            messageBuilder += `\n${index + 1}. <@${user.id}> (Level ${user.level}) | ${
                user.money
            } money`;
        }
    });

    if (myIndex > 9) {
        messageBuilder += `\n**You are placed ${myIndex + 1}. <@${user.id}> (Level ${
            user.level
        }) | ${user.money} money**`;
    }

    message.reply(messageBuilder);
};
