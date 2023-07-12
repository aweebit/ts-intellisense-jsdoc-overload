/**
 * @see {@link firstOrRest}
 * @param {T} value
 * @returns {[T]} value packed in array
 */
export function firstOrRest<T>(first: T): [T];
/**
 * @see {@link firstOrRest}
 * @param {*} first
 * @param {...T} rest
 * @returns {T[]} array of parameters after the first
 */
export function firstOrRest<T>(first: any, ...rest: T[]): T[];

/**
 * Returns array with first parameter if it is the only one provided,
 * or otherwise with all remaining parameters.
 * @param {*} first First parameter
 * @param {...*} rest Array of remaining parameters 
 * @returns {Array}
 */
export function firstOrRest(first: any, ...rest: any[]): any[] {
    return arguments.length > 1 ? rest : [first];
}

firstOrRest('first');
firstOrRest('first', 'second');

/**
 * @see {@link firstOrRest}
 */
const firstOrRestFunction = firstOrRest;
