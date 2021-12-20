import { ErrorTypes } from '../shared/helpers/constants';

export class ErrorModel {
    field: string;
    title: string;
    detail: string;
    isDetailOpened: boolean;
    type: number; // error = 1 and warning = 2

    constructor(options: {
        field?: string,
        title?: string,
        detail?: string,
        isDetailOpened?: boolean;
        type?: number;
    } = {}) {
        this.field = options.field;
        this.title = options.title;
        this.detail = options.detail;
        this.isDetailOpened = options.isDetailOpened ? options.isDetailOpened : false;
        this.type = options.type || ErrorTypes.Error
    }
}