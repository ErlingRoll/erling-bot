import VirtualUser from "./virtualUser";

export enum ChallengeReadyState {
    "pending",
    "starting",
    "finished",
}

export default class Challenge {
    id: string;
    host: VirtualUser;
    guest: VirtualUser;
    state: ChallengeReadyState;

    constructor(id: string, host: VirtualUser, guest: VirtualUser, state: ChallengeReadyState) {
        this.id = id;
        this.host = host;
        this.guest = guest;
        this.state = state;
    }
}
