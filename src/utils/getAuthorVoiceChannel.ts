import { Client, Message, VoiceBasedChannel } from "discord.js";

export default (client: Client, message: Message): VoiceBasedChannel | void => {
  const guildId = message.guildId;
  if (!guildId) return console.error("Missing guildId");

  const guild = client.guilds.cache.get(guildId); // Getting the guild.
  if (!guild) return console.error("No guild with guildId:", guildId);

  const member = guild.members.cache.get(message.author.id); // Getting the member.
  if (!member)
    return console.error("No member with the userId:", message.author.id);

  const memberVoiceChannel = member.voice.channel;
  if (!memberVoiceChannel)
    return console.error("Author is not in a voice channel");

  return memberVoiceChannel;
};
