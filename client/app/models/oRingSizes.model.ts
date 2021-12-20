import { ORingSizesDetailModel } from "./oRingSizesDetail.model";

export class ORingSizesModel {
    data: ORingSizesDetailModel[]

    constructor(options: {
        data?: ORingSizesDetailModel[]
    } = {}) {
        this.data = options.data;
    }
}