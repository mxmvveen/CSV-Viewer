export const isString = (value: any): value is string => {
    return typeof value === 'string';
}

export const isValidNumber = (value: any): boolean => {
    return typeof value === 'number' && !Number.isNaN(value);
}

export const isValidDate = (value: any): boolean => {
    return value instanceof Date && !isNaN(Number(value));
}