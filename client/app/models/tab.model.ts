export class TabModel {
    linkLabel: string;
    rootModuleRoute: string;
    childrenModuleRoute: string;
    pathExactmatch: boolean;

    constructor(options: {
        linkLabel?: string,
        rootModuleRoute?: string,
        childrenModuleRoute?: string,
        pathExactmatch?: boolean;
    } = {}) {
        this.linkLabel = options.linkLabel;
        this.rootModuleRoute = options.rootModuleRoute;
        this.childrenModuleRoute = options.childrenModuleRoute;
        this.pathExactmatch = options.pathExactmatch ? options.pathExactmatch : false;
    }
}