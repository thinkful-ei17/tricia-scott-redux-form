export const required = value => (value ? undefined : 'This field is required');
export const notEmpty = value => (value.trim() !== '' ? undefined : 'Field cannot be empty');
export const fiveChars = value => (value.length >= 5 ? undefined : "This field must contain least 5 characters");
export const isNum = value => (Number.isInteger(parseInt(value)) ? undefined : "A number is required");

// value.spit('').filter(i => parseInt(i).length === value.length)
