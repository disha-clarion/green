export class AuthModel {
    token: string;

    constructor(options: {
        token?: string
    } = {}) {
        this.token = options.token;
    }
}