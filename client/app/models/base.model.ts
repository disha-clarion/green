import { CalculatorModel } from "./calculator.model";

export class BaseModel {
    calc_group_name: string;
    display_group_title: string;
    calculators: CalculatorModel[];

    constructor(options: {
        calc_group_name?: string,
        display_group_title?: string,
        calculators?: CalculatorModel[]
    } = {}) {
        this.calc_group_name = options.calc_group_name;
        this.display_group_title = options.display_group_title;
        this.calculators = options.calculators;
    }
}