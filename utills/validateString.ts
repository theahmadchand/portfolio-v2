export const validateString = (value: unknown, maxLength: number): value is string => {
    return typeof value === "string" && value.length <= maxLength;
};
