// @ts-check

/**
 * @typedef {import ('.').Interface} Interface
 * @implements {Interface}
 */
export class Implementation {
    /**
     * @see {@link Interface.firstOrRest}
     * @template T
     * @overload
     * @param {T} value
     * @returns {[T]} value packed in array
     */
    /**
     * @see {@link Interface.firstOrRest}
     * @template T
     * @overload
     * @param {*} first
     * @param {...T} rest
     * @returns {T[]} array of parameters after the first
     */
    /**
     * @see {@link Interface.firstOrRest}
     * @param {*} first First parameter
     * @param {Array} rest Array of remaining parameters 
     * @returns {Array}
     */
    firstOrRest(first, ...rest) {
        return arguments.length > 1 ? rest : [first];
    }
}

const { firstOrRest } = Implementation.prototype;

firstOrRest('first');
firstOrRest('first', 'second');

/**
 * @see {@link Implementation.firstOrRest}
 */
const firstOrRestFunction = firstOrRest;
