import { Client, Message } from "discord.js";
const { getVoiceConnection } = require("@discordjs/voice");

export default (client: Client, message: Message) => {
  const connection = getVoiceConnection(message.guildId);
  if (connection) connection.destroy();
};
