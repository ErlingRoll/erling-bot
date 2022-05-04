import path from "path";
import { Client, Message } from "discord.js";
import join from "../defaultActions/join";

const { createAudioPlayer, createAudioResource } = require("@discordjs/voice");

const audioPlayer = createAudioPlayer();

export default (client: Client, message: Message, soundFile: string) => {
    const voiceConnection = join(client, message);
    if (!voiceConnection) return;

    voiceConnection.subscribe(audioPlayer);

    let resource = createAudioResource(path.join(__dirname, soundFile), {
        inlineVolume: true,
    });
    resource.volume.setVolume(0.3);

    audioPlayer.play(resource);
};
