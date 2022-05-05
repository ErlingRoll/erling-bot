export enum AdventureLevel {
    monkey,
    beginner,
    intermediate,
    expert,
    master,
    epic,
    legendary,
}
export default class Adventure {
    level: AdventureLevel;

    constructor(level: AdventureLevel) {
        this.level = level;
    }
}
