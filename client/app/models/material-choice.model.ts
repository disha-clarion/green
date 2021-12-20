export class MaterialChoiceModel {
    id: number;
    mname: string;
    cte: string;
    mintemp: string;
    maxtemp: string;
    mintempF: string;
    maxtempF: string;

    constructor(options: {
        id?: number;
        mname?: string;
        cte?: string;
        mintemp?: string;
        maxtemp?: string;
        mintempF?: string;
        maxtempF?: string;
    } = {}) {
        this.id = options.id;
        this.mname = options.mname;
        this.cte = options.cte;
        this.mintemp = options.mintemp;
        this.maxtemp = options.maxtemp;
        this.mintempF = options.mintempF;
        this.maxtempF = options.maxtempF;
    }
}