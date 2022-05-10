import { Message } from "discord.js";

const linesBuffer = 10;

export default (
    message: Message,
    content: string,
    reply: boolean = true,
    replyAuthor: boolean = false
): Promise<Message<boolean>> | void => {
    const lines = content.split("\n");

    if (lines.length === 1) {
        if (replyAuthor) {
            return message.author.send(content);
        } else if (reply) {
            return message.reply(content);
        } else {
            return message.channel.send(content);
        }
    }

    let buffer = lines[0];
    for (let i = 1; i < lines.length; i++) {
        buffer += "\n" + lines[i];
        if (i % linesBuffer === 0) {
            if (replyAuthor) {
                message.author.send(buffer);
            } else if (reply) {
                message.reply(buffer);
            } else {
                message.channel.send(buffer);
            }
            buffer = "";
        }
    }

    if (buffer !== "") {
        if (replyAuthor) {
            message.author.send(buffer);
        } else if (reply) {
            message.reply(buffer);
        } else {
            message.channel.send(buffer);
        }
    }
};
