import "dotenv/config";
// @ts-ignore
import Discord from "discord.js";
import { onMessageCreate } from "./events/onMessageCreate/onMessageCreate";
import { collection, doc, query, writeBatch, getDocs } from "@firebase/firestore";
import { firestore } from "./services/firebase";
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_VOICE_STATES,
        Discord.Intents.FLAGS.GUILD_PRESENCES,
    ],
});

client.on("ready", async () => {
    if (!client || !client.user) return;

    // START: Reset some fields every time server restarts
    const batch = writeBatch(firestore);

    const usersQuery = query(collection(firestore, "users"));
    const usersSnapshot = await getDocs(usersQuery);

    usersSnapshot.forEach(userDoc => {
        batch.update(userDoc.ref, { isBusy: false, power: 5 });
    });

    await batch.commit();
    // END: Reset some fields every time server restarts

    console.log(`Bot ${client.user.tag} is beeping and booping!`);
});

// @ts-ignore
client.on("messageCreate", message => onMessageCreate(client, message));

client.login(process.env.DISCORD_TOKEN);
