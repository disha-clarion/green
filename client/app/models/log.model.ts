export class LogModel {
    message: string;
    level: number; // error = 0, warn = 1, info = 2, verbose = 3, debug = 4, silly = 5


    constructor(options: {
        message?: string,
        level?: number
    } = {}) {
        this.message = options.message;
        this.level = options.level;
    }
}