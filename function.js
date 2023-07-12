// @ts-check

/**
 * @see {@link firstOrRest}
 * @template T
 * @overload
 * @param {T} value
 * @returns {[T]} value packed in array
 */
/**
 * @see {@link firstOrRest}
 * @template T
 * @overload
 * @param {*} first
 * @param {...T} rest
 * @returns {T[]} array of parameters after the first
 */
/**
 * Returns array with first parameter if it is the only one provided,
 * or otherwise with all remaining parameters.
 * @param {*} first First parameter
 * @param {...*} rest Array of remaining parameters 
 * @returns {Array}
 */
export function firstOrRest(first, ...rest) {
    return arguments.length > 1 ? rest : [first];
}

firstOrRest('first');
firstOrRest('first', 'second');

/**
 * @see {@link firstOrRest}
 */
const firstOrRestFunction = firstOrRest;
