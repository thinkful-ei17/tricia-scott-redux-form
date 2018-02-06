
//check if field is required
//check if tracking-num contains a value
export const required = value => value !== undefined ? undefined : 'Please Enter a Tracking Number';

//The value is non-empty
export const nonEmpty = value => value.trim(' ') !== '' ? undefined : 'Please Enter a Tracking Number';

//The value is be exactly 5 characters long
export const length = value => (value.length === 5) ? undefined : 'Tracking Number Must be 5 Characters Long';

//Each Character is a number
export const number = value => value.split('').filter(i => parseInt(i, 10)).length === value.length ? undefined : 'Tracking Number Must Be Numbers';

//No Selection
export const selection = value => value !== undefined ? undefined : 'A Selection is Required';
