import { Units } from "./constants";

/**
* Get the error message from error object
*/
export function getErrorMessage(err: any) {
    let message = '';

    if (err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
                message = getUniqueErrorMessage(err);
                break;
            default:
                message = 'Something went wrong';
        }
    } else if (err.message && !err.errors) {
        message = err.message;
    } else {
        for (const errName in err.errors) {
            if (err.errors[errName].message) {
                message = err.errors[errName].message;
            }
        }
    }

    return message;
}

/**
 * Get unique error field name
 */
const getUniqueErrorMessage = function (err: { code?: any; message?: string; errors?: { [x: string]: { message: string; }; }; errmsg?: any; }) {
    let output: string;

    try {
        let begin = 0;
        if (err.errmsg.lastIndexOf('.$') !== -1) {
            // support mongodb <= 3.0 (default: MMapv1 engine)
            // "errmsg" : "E11000 duplicate key error index: mean-dev.users.$email_1 dup key: { : \"test@user.com\" }"
            begin = err.errmsg.lastIndexOf('.$') + 2;
        } else {
            // support mongodb >= 3.2 (default: WiredTiger engine)
            // "errmsg" : "E11000 duplicate key error collection: mean-dev.users index: email_1 dup key: { : \"test@user.com\" }"
            begin = err.errmsg.lastIndexOf('index: ') + 7;
        }
        const fieldName = err.errmsg.substring(begin, err.errmsg.lastIndexOf('_1'));
        output = `${fieldName.charAt(0).toUpperCase()} ${fieldName.slice(1)} already exists`;

    } catch (ex) {
        output = 'Unique field already exists';
    }

    return output;
}

/*convert value to decimal places*/
export function convertToDecimal(unit: number, value: number) {
    if (Units.MILLI_METER === unit) {
        return parseFloat(value.toFixed(2));
    }
    else {
        return parseFloat(value.toFixed(3));
    }
}

/* WRrAr convert megapascal (MPa) to bar */
export function convertToBar(value: number) {
    /*1 megapascal (MPa) = 10.00 bars (bar , b)*/
    return parseFloat((value * 10.00).toFixed(2));
}

// format to 10 power -6
export function FormatTenPowerSix(val: number): number {
    return val ? ((val) / 1000000) : 0.000;
}

export interface IMongoTypeString {
    type: string,
    default: ''
}
