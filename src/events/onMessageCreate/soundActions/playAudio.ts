import path from "path";
import { Client, Message } from "discord.js";
import join from "../defaultActions/join";
import VirtualUser from "../../../virtual/models/virtualUser";

const { createAudioPlayer, createAudioResource } = require("@discordjs/voice");

const audioPlayer = createAudioPlayer();

export default async (
    client: Client,
    message: Message,
    virtualUser: VirtualUser,
    soundFile: string
) => {
    let soundPrice = 20;

    if (virtualUser.money < soundPrice) {
        return message.reply(`You do not have enough money to play a sound (${soundPrice} money)`);
    }

    virtualUser.money -= soundPrice;
    await virtualUser.update();

    message.reply(`**<@${virtualUser.id}>** puts ${soundPrice} money in the jukebox`);

    const voiceConnection = join(client, message);
    if (!voiceConnection) return;

    voiceConnection.subscribe(audioPlayer);

    let resource = createAudioResource(path.join(__dirname, soundFile), {
        inlineVolume: true,
    });
    resource.volume.setVolume(0.3);

    audioPlayer.play(resource);
};
