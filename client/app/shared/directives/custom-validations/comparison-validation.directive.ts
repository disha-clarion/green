import { ErrorModel } from "../../../models/error.model";
import { ErrorTypes } from '../../helpers/constants';

// less than comparision direcive
// compare numbers val1 and value 2
// if value1 is less than value2 then set error
export function lessThanValidation(val1: string, val2: string, fieldName: string, title: string, errorMessage: string, errorType: number = ErrorTypes.Error): any {
    if (!val1) {
        return null;
    }
    return val1 && val2 && (parseFloat(val1) < parseFloat(val2)) ?
        new ErrorModel({ field: fieldName, title: title, detail: errorMessage, type: errorType })
        : null;
}

// less than equal comparision direcive
// compare numbers val1 and value 2
// if value1 is less than equal value2 then set error
export function lessThanEqualValidation(val1: string, val2: string, fieldName: string, title: string, errorMessage: string, errorType: number = ErrorTypes.Error): any {
    if (!val1) {
        return null;
    }
    return val1 && val2 && (parseFloat(val1) <= parseFloat(val2)) ?
        new ErrorModel({ field: fieldName, title: title, detail: errorMessage, type: errorType })
        : null;
}

// value1 should not be larger than value2
export function largerThanValidation(val1: string, val2: string, fieldName: string, title: string, errorMessage: string, errorType: number = ErrorTypes.Error): any {
    if (!val1) {
        return null;
    }
    return val1 && val2 && (parseFloat(val1) > parseFloat(val2)) ?
        new ErrorModel({ field: fieldName, title: title, detail: errorMessage, type: errorType })
        : null;
}

// value1 should not be larger than value2
export function largerThanEqualValidation(val1: string, val2: string, fieldName: string, title: string, errorMessage: string, errorType: number = ErrorTypes.Error): any {
    if (!val1) {
        return null;
    }
    return val1 && val2 && (parseFloat(val1) >= parseFloat(val2)) ?
        new ErrorModel({ field: fieldName, title: title, detail: errorMessage, type: errorType })
        : null;
}

// value1 no larger than 1/2 of value2
export function noLargerThanHalf(val1: string, val2: string, fieldName: string, title: string, errorMessage: string, errorType: number = ErrorTypes.Error): any {
    if (!val1) {
        return null;
    }
    return val1 && val2 && (parseFloat(val1) > (1 / 2 * parseFloat(val2))) ?
        new ErrorModel({ field: fieldName, title: title, detail: errorMessage, type: errorType })
        : null;
}