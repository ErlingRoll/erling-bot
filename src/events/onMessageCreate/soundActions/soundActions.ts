import { Client, Message } from "discord.js";
import Action from "../../../virtual/models/action";
import playAudio from "./playAudio";

const soundFiles: { [name: string]: string } = {
    ah: "../../../assets/audio/ah.mp3",
    augh: "../../../assets/audio/augh.mp3",
    avdol: "../../../assets/audio/avdol.mp3",
    bwabwabwa: "../../../assets/audio/bwabwabwa.mp3",
    ghosttown: "../../../assets/audio/ghosttown.mp3",
    iprefermen: "../../../assets/audio/iprefermen.mp3",
    marius: "../../../assets/audio/marius.mp3",
    meeting: "../../../assets/audio/meeting.mp3",
    nasty: "../../../assets/audio/nasty.mp3",
    no: "../../../assets/audio/no.mp3",
    nolife: "../../../assets/audio/nolife.mp3",
    omg: "../../../assets/audio/omg.mp3",
    pain: "../../../assets/audio/pain.mp3",
    purpledrapes: "../../../assets/audio/purpledrapes.mp3",
    stfu: "../../../assets/audio/stfu.mp3",
    stop: "../../../assets/audio/stop.mp3",
    sus: "../../../assets/audio/sus.mp3",
    whatisthat: "../../../assets/audio/whatisthat.mp3",
    yes: "../../../assets/audio/yes.mp3",
};

const soundActions: Action[] = Object.keys(soundFiles).map(name => {
    return new Action(name, (client: Client, message: Message) =>
        playAudio(client, message, soundFiles[name])
    );
});

export default soundActions;
