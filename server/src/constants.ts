export enum Units {
    INCH = 1,
    MILLI_METER = 2
}

export enum Temperature {
    FAHRENHEIT = 1,
    CELCIUS = 2
}

export enum CalculatorOption {
    Nominal = 1,
    WithTolerance = 2,
    WithMinMax = 3
}

export enum ErrorTypes {
    Error = 1,
    Warning = 2
}


export enum WrArCalcTypes {
    PressIn = "pressIn",
    Floating = "floating"
}

export const customValue = 0;


export enum CalculatorTypes {
    ORingInternalVacuumOnly = 1,
    ORingDovetailGlandVacuumOnly = 2,
    ORingHalfDovetailGlandInternalVacuumOnly = 3,
    ORingRectangularGlandExternalVacuumOnly = 4,
    WrArPressIn = 5,
    WrArFloating = 6
}
