export const copyPasteObjKey = "lastCalculatedData";

export const HTTP_SPINNER = "HTTP_SPINNER";


export enum supportEmail {
    EmailPressIn = 'athrash@gtweed.com',
    EmailWrAr = 'tshirayama@gtweed.com'
}

export enum calculatedDataKeys {
    RECTANGULAR_GLAND_INTERNAL = "RECTANGULAR_GLAND_INTERNAL",
    RECTANGULAR_GLAND_EXTERNAL = "RECTANGULAR_GLAND_EXTERNAL",
    DOVETAIL_GLAND = "DOVETAIL_GLAND",
    HALF_DOVETAIL_GLAND = "HALF_DOVETAIL_GLAND"
}

export enum calculationType {
    ORING_SIZING = "oringSizing",
    GLAND_SIZING = "glandSizing"
}

export enum rectangleType {
    RECTANGLE_OD = "rectangleOD"
}

export enum glandType {
    RECTANGLE = "rectangle",
    DOVETAIL = "dovetail",
    HALF_DOVETAIL = "halfDovetail"
}

export enum Validators {
    NUMBER_VALIDATOR = "NUMBER_VALIDATOR"
}

export enum ORingTool_InternalVacuumOnly_Validators {
    GLAND_WIDTH_LARGER_THAN_O_RING_CROSS_SECTION = "GLAND_WIDTH_LARGER_THAN_O_RING_CROSS_SECTION",
    BOTTOM_RADII_NOMINAL_LARGER_THAN_BOTTOM_RADII_MIN_LIMIT = "BOTTOM_RADII_NOMINAL_LARGER_THAN_BOTTOM_RADII_MIN_LIMIT",
    BOTTOM_RADII_NOMINAL_VALIDATION = "BOTTOM_RADII_NOMINAL_VALIDATION",
    OPERATING_TEMPERATURE_VALIDATION = "OPERATING_TEMPERATURE_VALIDATION",
    O_RING_CROSS_NOMINAL_AS568A_STANDARD_SECTION_VALIDATION = "O_RING_CROSS_NOMINAL_AS568A_STANDARD_SECTION_VALIDATION",
    O_RING_CROSS_SECTION_LESS_THAN_GLAND_DEPTH_NOMINAL_VALIDATION = "O_RING_CROSS_SECTION_LESS_THAN_GLAND_DEPTH_NOMINAL_VALIDATION",
    O_RING_ID_VALIDATION = "O_RING_ID_VALIDATION",
    O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION = "O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION",
    LESS_THAN_ZERO_VALIDATION = "LESS_THAN_ZERO_VALIDATION",
    TOLERANCE_VALIDATION = "TOLERANCE_VALIDATION",
    MIN_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION = "MIN_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION",
    MAX_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION = "MAX_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION",
    ORING_ID_AS568A_STANDARD_WARNING = "ORING_ID_AS568A_STANDARD_WARNING"
}

export enum ORingTool_DovetailGlandVacuumOnly_Validators {
    GLAND_ANGLE_NOMINAL_VALIDATION = "GLAND_ANGLE_NOMINAL_VALIDATION",
    GLAND_ANGLE_MIN_VALIDATION = "GLAND_ANGLE_MIN_VALIDATION",
    GLAND_ANGLE_MAX_VALIDATION = "GLAND_ANGLE_MAX_VALIDATION",
    GLAND_WIDTH_NOMINAL_VALIDATION = "GLAND_WIDTH_NOMINAL_VALIDATION",
    GLAND_WIDTH_MIN_VALIDATION = "GLAND_WIDTH_MIN_VALIDATION",
    GLAND_WIDTH_MAX_VALIDATION = "GLAND_WIDTH_MAX_VALIDATION",
    BOTTOM_RADII_NOMINAL_LARGER_THAN_BOTTOM_RADII_MIN_LIMIT = "BOTTOM_RADII_NOMINAL_LARGER_THAN_BOTTOM_RADII_MIN_LIMIT",
    BOTTOM_RADII_NOMINAL_NON_PHYSICAL_GLAND_VALIDATION = "BOTTOM_RADII_NOMINAL_NON_PHYSICAL_GLAND_VALIDATION",
    BOTTOM_RADII_MIN_NON_PHYSICAL_GLAND_VALIDATION = "BOTTOM_RADII_MIN_NON_PHYSICAL_GLAND_VALIDATION",
    BOTTOM_RADII_MAX_NON_PHYSICAL_GLAND_VALIDATION = "BOTTOM_RADII_MAX_NON_PHYSICAL_GLAND_VALIDATION",
    TOP_RADII_NOMINAL_LARGER_THAN_BOTTOM_RADII_MIN_LIMIT = "TOP_RADII_NOMINAL_LARGER_THAN_BOTTOM_RADII_MIN_LIMIT",
    TOP_RADII_NOMINAL_NON_PHYSICAL_GLAND_VALIDATION = "TOP_RADII_NOMINAL_NON_PHYSICAL_GLAND_VALIDATION",
    TOP_RADII_MIN_NON_PHYSICAL_GLAND_VALIDATION = "TOP_RADII_MIN_NON_PHYSICAL_GLAND_VALIDATION",
    TOP_RADII_MAX_NON_PHYSICAL_GLAND_VALIDATION = "TOP_RADII_MAX_NON_PHYSICAL_GLAND_VALIDATION",
    OPERATING_TEMPERATURE_VALIDATION = "OPERATING_TEMPERATURE_VALIDATION",
    O_RING_CROSS_SECTION_LESS_THAN_GLAND_DEPTH_NOMINAL_VALIDATION = "O_RING_CROSS_SECTION_LESS_THAN_GLAND_DEPTH_NOMINAL_VALIDATION",
    O_RING_CROSS_SECTION_NOMINAL_STADARD_AS568A_VALIDATION = "O_RING_CROSS_SECTION_NOMINAL_STADARD_AS568A_VALIDATION",
    O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION = "O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION",
    LESS_THAN_ZERO_VALIDATION = "LESS_THAN_ZERO_VALIDATION",
    TOLERANCE_VALIDATION = "TOLERANCE_VALIDATION",
    MIN_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION = "MIN_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION",
    MAX_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION = "MAX_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION",
    ORING_ID_AS568A_STANDARD_WARNING = "ORING_ID_AS568A_STANDARD_WARNING"
}

export enum ORingTool_Half_DovetailGlandVacuumOnly_Validators {
    GLAND_ANGLE_NOMINAL_VALIDATION = "GLAND_ANGLE_NOMINAL_VALIDATION",
    GLAND_ANGLE_MIN_VALIDATION = "GLAND_ANGLE_MIN_VALIDATION",
    GLAND_ANGLE_MAX_VALIDATION = "GLAND_ANGLE_MAX_VALIDATION",
    GLAND_WIDTH_NOMINAL_VALIDATION = "GLAND_WIDTH_NOMINAL_VALIDATION",
    GLAND_WIDTH_MIN_VALIDATION = "GLAND_WIDTH_MIN_VALIDATION",
    GLAND_WIDTH_MAX_VALIDATION = "GLAND_WIDTH_MAX_VALIDATION",
    BOTTOM_RADII_NOMINAL_LARGER_THAN_BOTTOM_RADII_MIN_LIMIT = "BOTTOM_RADII_NOMINAL_LARGER_THAN_BOTTOM_RADII_MIN_LIMIT",
    BOTTOM_RADII_NOMINAL_NON_PHYSICAL_GLAND_VALIDATION = "BOTTOM_RADII_NOMINAL_NON_PHYSICAL_GLAND_VALIDATION",
    BOTTOM_RADII_MIN_NON_PHYSICAL_GLAND_VALIDATION = "BOTTOM_RADII_MIN_NON_PHYSICAL_GLAND_VALIDATION",
    BOTTOM_RADII_MAX_NON_PHYSICAL_GLAND_VALIDATION = "BOTTOM_RADII_MAX_NON_PHYSICAL_GLAND_VALIDATION",
    TOP_RADII_NOMINAL_LARGER_THAN_BOTTOM_RADII_MIN_LIMIT = "TOP_RADII_NOMINAL_LARGER_THAN_BOTTOM_RADII_MIN_LIMIT",
    TOP_RADII_NOMINAL_NON_PHYSICAL_GLAND_VALIDATION = "TOP_RADII_NOMINAL_NON_PHYSICAL_GLAND_VALIDATION",
    TOP_RADII_MIN_NON_PHYSICAL_GLAND_VALIDATION = "TOP_RADII_MIN_NON_PHYSICAL_GLAND_VALIDATION",
    TOP_RADII_MAX_NON_PHYSICAL_GLAND_VALIDATION = "TOP_RADII_MAX_NON_PHYSICAL_GLAND_VALIDATION",
    OPERATING_TEMPERATURE_VALIDATION = "OPERATING_TEMPERATURE_VALIDATION",
    O_RING_CROSS_SECTION_LESS_THAN_GLAND_DEPTH_NOMINAL_VALIDATION = "O_RING_CROSS_SECTION_LESS_THAN_GLAND_DEPTH_NOMINAL_VALIDATION",
    O_RING_CROSS_SECTION_NOMINAL_STADARD_AS568A_VALIDATION = "O_RING_CROSS_SECTION_NOMINAL_STADARD_AS568A_VALIDATION",
    O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION = "O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION",
    LESS_THAN_ZERO_VALIDATION = "LESS_THAN_ZERO_VALIDATION",
    TOLERANCE_VALIDATION = "TOLERANCE_VALIDATION",
    MIN_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION = "MIN_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION",
    MAX_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION = "MAX_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION",
    ORING_ID_AS568A_STANDARD_WARNING = "ORING_ID_AS568A_STANDARD_WARNING"
}

export enum ORingTool_RactangleExternalVacuumOnly_Validators {
    GLAND_WIDTH_LARGER_THAN_O_RING_CROSS_SECTION = "GLAND_WIDTH_LARGER_THAN_O_RING_CROSS_SECTION",
    BOTTOM_RADII_NOMINAL_LARGER_THAN_BOTTOM_RADII_MIN_LIMIT = "BOTTOM_RADII_NOMINAL_LARGER_THAN_BOTTOM_RADII_MIN_LIMIT",
    BOTTOM_RADII_NOMINAL_VALIDATION = "BOTTOM_RADII_NOMINAL_VALIDATION",
    OPERATING_TEMPERATURE_VALIDATION = "OPERATING_TEMPERATURE_VALIDATION",
    O_RING_CROSS_NOMINAL_AS568A_STANDARD_SECTION_VALIDATION = "O_RING_CROSS_NOMINAL_AS568A_STANDARD_SECTION_VALIDATION",
    O_RING_CROSS_SECTION_LESS_THAN_GLAND_DEPTH_NOMINAL_VALIDATION = "O_RING_CROSS_SECTION_LESS_THAN_GLAND_DEPTH_NOMINAL_VALIDATION",
    O_RING_ID_VALIDATION = "O_RING_ID_VALIDATION",
    O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION = "O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION",
    LESS_THAN_ZERO_VALIDATION = "LESS_THAN_ZERO_VALIDATION",
    TOLERANCE_VALIDATION = "TOLERANCE_VALIDATION",
    MIN_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION = "MIN_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION",
    MAX_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION = "MAX_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION",
    ORING_ID_AS568A_STANDARD_WARNING = "ORING_ID_AS568A_STANDARD_WARNING"
}

export enum GlandSizeCalc_InternalVacuumOnly_Validators {
    OPERATING_TEMPERATURE_VALIDATION = "OPERATING_TEMPERATURE_VALIDATION",
    O_RING_CROSS_NOMINAL_AS568A_STANDARD_SECTION_VALIDATION = "O_RING_CROSS_NOMINAL_AS568A_STANDARD_SECTION_VALIDATION",
    O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION = "O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION",
    ORING_ID_AS568A_STANDARD_WARNING = "ORING_ID_AS568A_STANDARD_WARNING"
}

export enum GlandSizeCalc_DovetailGlandVacuumOnly_Validators {
    OPERATING_TEMPERATURE_VALIDATION = "OPERATING_TEMPERATURE_VALIDATION",
    O_RING_CROSS_NOMINAL_AS568A_STANDARD_SECTION_VALIDATION = "O_RING_CROSS_NOMINAL_AS568A_STANDARD_SECTION_VALIDATION",
    O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION = "O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION",
    ORING_ID_AS568A_STANDARD_WARNING = "ORING_ID_AS568A_STANDARD_WARNING"
}

export enum GlandSizeCalc_HalfDovetailGlandVacuumOnly_Validators {
    OPERATING_TEMPERATURE_VALIDATION = "OPERATING_TEMPERATURE_VALIDATION",
    O_RING_CROSS_NOMINAL_AS568A_STANDARD_SECTION_VALIDATION = "O_RING_CROSS_NOMINAL_AS568A_STANDARD_SECTION_VALIDATION",
    O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION = "O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION",
    ORING_ID_AS568A_STANDARD_WARNING = "ORING_ID_AS568A_STANDARD_WARNING"
}


// WrAr
export enum WrArCalc_PressIn_Validators {
    CLEARANCE_VALIDATION = "CLEARANCE_VALIDATION",
    SERVICE_STORAGE_TEMPERATURE_MIN = "SERVICE_STORAGE_TEMPERATURE_MIN",
    SERVICE_STORAGE_TEMPERATURE_MAX = "SERVICE_STORAGE_TEMPERATURE_MAX",
    STATIONARY_ELEMENT_ID_MAX = "STATIONARY_ELEMENT_ID_MAX",
    ROTATING_ELEMENT_OD_MAX = "ROTATING_ELEMENT_OD_MAX",
    SERVICE_STORAGE_TEMPERATURE_ALLOWED_MIN = "SERVICE_STORAGE_TEMPERATURE_ALLOWED_MIN",
    SERVICE_STORAGE_TEMPERATURE_ALLOWED_MAX = "SERVICE_STORAGE_TEMPERATURE_ALLOWED_MAX",
    STATIONARY_ELEMENT_ID_MIN_LESSER_THAT_ROTATING_MIN = "STATIONARY_ELEMENT_ID_MIN_LESSER_THAT_ROTATING_MIN",
    STATIONARY_ELEMENT_ID_MIN_LESSER_THAT_ROTATING_MAX = "STATIONARY_ELEMENT_ID_MIN_LESSER_THAT_ROTATING_MAX"
}

export enum WrArCalc_FloatingIn_Validators {
    CLEARANCE_VALIDATION = "CLEARANCE_VALIDATION",
    SERVICE_STORAGE_TEMPERATURE_MIN = "SERVICE_STORAGE_TEMPERATURE_MIN",
    SERVICE_STORAGE_TEMPERATURE_MAX = "SERVICE_STORAGE_TEMPERATURE_MAX",
    STATIONARY_ELEMENT_ID_MAX = "STATIONARY_ELEMENT_ID_MAX",
    ROTATING_ELEMENT_OD_MAX = "ROTATING_ELEMENT_OD_MAX",
    SERVICE_STORAGE_TEMPERATURE_ALLOWED_MIN = "SERVICE_STORAGE_TEMPERATURE_ALLOWED_MIN",
    SERVICE_STORAGE_TEMPERATURE_ALLOWED_MAX = "SERVICE_STORAGE_TEMPERATURE_ALLOWED_MAX",
    STATIONARY_ELEMENT_ID_MIN_LESSER_THAT_ROTATING_MIN = "STATIONARY_ELEMENT_ID_MIN_LESSER_THAT_ROTATING_MIN",
    STATIONARY_ELEMENT_ID_MIN_LESSER_THAT_ROTATING_MAX = "STATIONARY_ELEMENT_ID_MIN_LESSER_THAT_ROTATING_MAX"
}

export enum Units {
    INCH = 1,
    MILLI_METER = 2
}

export enum UnitsAbbreviation {
    INCH = "in",
    MILLI_METER = "mm"
}

export enum Measures {
    Imperial = 1,
    Metric = 2
}

export enum UnitsDecimalPlaces {
    INCH = 3,
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

export enum LoggingLevels {
    error = 0,
    warn = 1,
    info = 2,
    verbose = 3,
    debug = 4,
    silly = 5,
}

export enum CalculatorTypes {
    ORingInternalVacuumOnly = 1,
    ORingDovetailGlandVacuumOnly = 2,
    ORingHalfDovetailGlandInternalVacuumOnly = 3,
    ORingRectangularGlandExternalVacuumOnly = 4,
    WrArPressIn = 5,
    WrArFloating = 6
}

export enum CalculatorGroup {
    ORingNGlandCalcs = 1,
    WrArCalcs = 2
}


export enum ControlType {
    label = "label",
    textbox = "textbox",
    numerictextbox = "numerictextbox",
    dropdown = "dropdown",
    button = "button",
    html = "html"
}

// enum to seperate specific purpose controls
export enum ControlSubType {
    unit = "unit", // unit form control
    unitLabel = "unitlabel", // unit label
    outputHeaderUnitLabel = "outputHeaderUnitLabel", // unit label
    pressureLabel = "pressureLabel", // unit label
    temperature = "temperature", // temperature form control
    temperatureLabel = "temperaturelabel", // temperature label
    degree = "degree", // degree form control
    degreeLabel = "degreelabel", // degree label
    material_choice_dropdown = "materialchoicedropdown",
    button = "button",
    calculated_label = "calculatedlabel",
    calculatedDegreeLabel = "calculatedDegreeLabel", // calculated degree label
    arWrPumptypeDropdown = "arWrPumptypeDropdown",
    arWrComponenttypeDropdown = "arWrComponenttypeDropdown",
    arWrCompositetypeDropdown = "arWrCompositetypeDropdown",
    arWrInterFerenceTargetPressInDropdown = "arWrInterFerenceTargetPressInDropdown",
    arWrClearanceTargetDropdown = "arWrClearanceTargetDropdown",
    arWrRotatingMaterial = "arWrRotatingMaterial",
    arWrStationaryMaterial = "arWrStationaryMaterial",
    cteUnitLabel = "cteUnitLabel", // unit label    
}

export enum TextboxType {
    text = "text",
    password = "password",
    number = "number"
}

export enum TemperatureCelsiusCode {
    UNICODE = "U+02103",
    HEX_CODE = "&#x2103",
    HTML_CODE = "&#8451",
    CSS_CODE = "\2103",
    HEXA_DECIMAL_CODE = "\xB0C"
}

export enum TemperatureFahrenheitCode {
    UNICODE = "U+02109",
    HEX_CODE = "&#x2109",
    HTML_CODE = "&#8457",
    CSS_CODE = "\2109",
    HEXA_DECIMAL_CODE = "\xB0F"
}


export enum DropdownChooseOptionTitle {
    MaterialChoiceDropdown = "Select Material",
    DefaultDropdown = "Select",
}


export enum ButtonActionKeys {
    DashSizeDetail = "DashSizeDetail"
}

export enum ErrorTypes {
    Error = 1,
    Warning = 2
}

export enum ActionType {
    Paste = 1
}