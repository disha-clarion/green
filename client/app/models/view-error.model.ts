import { ErrorTypes } from '../shared/helpers/constants';

export class ViewErrorModel {
    field: string;
    title: string;
    isDetailOpened: boolean;
    type: number; // error = 1 and warning = 2
    errors: string[];

    constructor(options: {
        field?: string,
        title?: string,
        isDetailOpened?: boolean;
        type?: number;
        errors?: string[];
    } = {}) {
        this.field = options.field;
        this.title = options.title;
        this.isDetailOpened = options.isDetailOpened ? options.isDetailOpened : false;
        this.type = options.type || ErrorTypes.Error;
        this.errors = options.errors || [];
    }
}