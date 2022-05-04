import Action from "../virtual/models/action";

export default class ActionGroup {
    groupName: string;
    actions: { [name: string]: Action };

    constructor(groupName: string, actions?: Action[]) {
        this.groupName = groupName;
        this.actions = {};

        if (actions) this.register(actions);
    }

    public register(actions: Action | Action[]): void {
        if (Array.isArray(actions)) {
            actions.forEach(_action => {
                this.actions[_action.name] = _action;
            });
        } else {
            this.actions[actions.name] = actions;
        }
    }
}
