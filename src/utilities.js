/**
 * @Importable
 * This module contains core functionality used across the board.
 * 
 * Bread and butter, as it were.
 */

/**
 * @param {any} value    The value to pass through.
 */
export const kestrel = value => value

/** 
 * @param {any} value    The value to wrap in a thunk.
 */
export const thunk = value => () => value

/**
 * @param {function} fn    Function to call with only val.
 * @param {any} val        Value to pass to fn.
 */
export const unary = fn => val => fn(val)
