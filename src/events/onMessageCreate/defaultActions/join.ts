import { joinVoiceChannel, VoiceConnection } from "@discordjs/voice";
import { Client, Message } from "discord.js";
import getAuthorVoiceChannel from "../../../utils/getAuthorVoiceChannel";

export default (client: Client, message: Message): VoiceConnection | void => {
  const memberVoiceChannel = getAuthorVoiceChannel(client, message);
  if (!memberVoiceChannel) return;

  return joinVoiceChannel({
    channelId: memberVoiceChannel.id,
    guildId: memberVoiceChannel.guild.id,
    // @ts-ignore
    adapterCreator: memberVoiceChannel.guild.voiceAdapterCreator,
    selfDeaf: false,
  });
};
