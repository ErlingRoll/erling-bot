import { Client, Message } from "discord.js";
import VirtualUser from "../../../virtual/models/virtualUser";
import Action from "../../../virtual/models/action";
import playAudio from "./playAudio";

const soundFiles: { [name: string]: string } = {
    ah: "../../../assets/audio/ah.mp3",
    amogus: "../../../assets/audio/amogus.mp3",
    augh: "../../../assets/audio/augh.mp3",
    avdol: "../../../assets/audio/avdol.mp3",
    burger: "../../../assets/audio/burger.mp3",
    bwabwabwa: "../../../assets/audio/bwabwabwa.mp3",
    ghosttown: "../../../assets/audio/ghosttown.mp3",
    iprefermen: "../../../assets/audio/iprefermen.mp3",
    marius: "../../../assets/audio/marius.mp3",
    meeting: "../../../assets/audio/meeting.mp3",
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
    return new Action(name, (client: Client, message: Message, virtualUser: VirtualUser) =>
        playAudio(client, message, virtualUser, soundFiles[name])
    );
});

export default soundActions;
