export interface Interface {
    /**
     * Returns array with first parameter if it is the only one provided,
     * or otherwise with all remaining parameters.
     * @param {*} first First parameter
     * @param {...*} rest Array of remaining parameters 
     * @returns {Array}
     */
    firstOrRest(first: any, ...rest: any[]): any[];
}
