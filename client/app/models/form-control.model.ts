export class FormControlModel {
    form_control_id: Number;
    order: Number;
    key: string; // controlID or controlName - refers to form data
    label: string;
    showLabel: boolean;
    value: any;
    defaultvalue: any;
    placeholder: string;
    type: string;
    sub_type: string; // default 'text'
    show: boolean = true;
    required: boolean = false;
    isDisabled: boolean = false;
    validation: any[];
    css_classes: string[];
    show_control_option: [];
    decimal_point: number;
    options: IOption[]; // used for the dropdown / radio options

    constructor(options: {
        form_control_id?: Number,
        order?: Number,
        key?: string,
        label?: string,
        showLabel?: boolean;
        value?: any,
        placeholder?: string,
        type?: string,
        sub_type?: string,
        show?: boolean,
        required?: boolean,
        isDisabled?: boolean,
        validation?: any[],
        css_classes?: string[],
        decimal_point?: number,
        options?: IOption[]
    }) {
        this.form_control_id = options.form_control_id;
        this.order = options.order || 0;
        this.key = options.key;
        this.label = options.label;
        this.showLabel = options.showLabel;
        this.value = options.value;
        this.placeholder = options.placeholder;
        this.type = options.type;
        this.sub_type = options.sub_type;
        this.show = options.show;
        this.required = options.required;
        this.isDisabled = options.isDisabled || false;
        this.validation = options.validation;
        this.css_classes = options.css_classes;
        this.decimal_point = options.decimal_point || null;
        this.options = options.options || [];
    }
}

interface IOption {
    id: number,
    label: string,
    value: any,
    show: boolean
}