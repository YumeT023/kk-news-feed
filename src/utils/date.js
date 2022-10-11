/**
 *
 * CONSTANT: date OPTIONS
 */
const LONG_DATE_OPTIONS = { month: 'long', year: 'numeric', day: 'numeric' };

/**
 *
 * if the passed date is null, generate a date using (new Date()) to avoid invalid date on print
 */
const coalesecDate = date => date || new Date();

/**
 *
 * print long format of the given date
 */
export const printLong = (date = Date()) => new Date(coalesecDate(date)).toLocaleDateString('en-US', LONG_DATE_OPTIONS);

/**
 *
 * print short format of the given date
 * by default, the separator is a "-", but you can change it by passing a second parameter
 */
export const printShort = (date = Date(), separator = '-') => new Date(coalesecDate(date)).toLocaleDateString().replace(/\//g, separator);
