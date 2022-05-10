import "dotenv/config";
// @ts-ignore
import Discord from "discord.js";
import { onMessageCreate } from "./events/onMessageCreate/onMessageCreate";
import { collection, doc, query, writeBatch, getDocs, deleteField } from "@firebase/firestore";
import { firestore } from "./services/firebase";
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_VOICE_STATES,
        Discord.Intents.FLAGS.GUILD_PRESENCES,
        Discord.Intents.FLAGS.DIRECT_MESSAGES,
    ],
});

client.on("ready", async () => {
    if (!client || !client.user) return;

    // START: Reset some fields every time server restarts
    const batch = writeBatch(firestore);

    const usersQuery = query(collection(firestore, "users"));
    const usersSnapshot = await getDocs(usersQuery);

    usersSnapshot.forEach(userDoc => {
        const userData = userDoc.data();
        batch.update(userDoc.ref, { isBusy: false });
        batch.update(userDoc.ref, {
            defense: deleteField(),
            defence: Math.floor(userData.level / 5),
            power: 5 + Math.floor(userData.level / 3),
            maxExp: Math.floor(100 * Math.pow(1.05, userData.level - 1)),
            maxHp: Math.floor(100 * Math.pow(1.025, userData.level - 1)),
        });
    });

    await batch.commit();
    // END: Reset some fields every time server restarts

    console.log(`Bot ${client.user.tag} is beeping and booping!`);
});

// @ts-ignore
client.on("messageCreate", message => onMessageCreate(client, message));

client.login(process.env.DISCORD_TOKEN);
