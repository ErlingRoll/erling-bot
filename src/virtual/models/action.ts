export type ActionSettings = {
    cooldown?: number; // ms
    cost?: number;
};

export default class Action {
    action: CallableFunction;
    name: string;
    cooldown: number;
    cost: number;

    constructor(name: string, action: CallableFunction, actionSettings?: ActionSettings) {
        this.name = name;
        this.action = action;

        // Apply custom settings
        let { cooldown, cost } = actionSettings || {};
        this.cooldown = cooldown || 0;
        this.cost = cost || 0;
    }
}
