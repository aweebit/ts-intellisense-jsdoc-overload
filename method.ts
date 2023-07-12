import type { Interface } from '.';

export class Implementation implements Interface {
    /**
     * @see {@link Interface.firstOrRest}
     * @param {T} value
     * @returns {[T]} value packed in array
     */
    firstOrRest<T>(value: T): [T];
    /**
     * @see {@link Interface.firstOrRest}
     * @param {*} first
     * @param {...T} rest
     * @returns {T[]} array of parameters after the first
     */
    firstOrRest<T>(first: any, ...rest: T[]): T[];

    /**
     * @see {@link Interface.firstOrRest}
     */
    firstOrRest(first: any, ...rest: any[]): any[] {
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
