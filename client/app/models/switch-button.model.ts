export class SwitchButtonModel {
    id: number;
    title: string;
    display_title: string;
    display_Short_title: string;
    isActive: boolean;
    actionType: number;

    constructor(options: {
        id?: number,
        title?: string,
        display_title?: string,
        display_Short_title?: string,
        isActive?: boolean,
        actionType?: number
    } = {}) {
        this.id = options.id;
        this.title = options.title;
        this.display_title = options.display_title;
        this.display_Short_title = options.display_Short_title;
        this.isActive = options.isActive ? options.isActive : false;
        this.actionType = options.actionType || 0;
    }
}