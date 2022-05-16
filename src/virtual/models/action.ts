export type ActionSettings = {
    cooldown?: number; // ms
    cost?: number;
};

export default class Action {
    action: CallableFunction;
    name: string;
    cooldown: number;
    cost: number;
    alias: string[];
    booleanCheck?: boolean;

    constructor(
        name: string,
        action: CallableFunction,
        actionSettings?: ActionSettings,
        alias?: string[]
    ) {
        this.name = name;
        this.action = action;

        // Apply custom settings
        let { cooldown, cost } = actionSettings || {};
        this.cooldown = cooldown || 0;
        this.cost = cost || 0;
        this.alias = alias || [];
    }
}
