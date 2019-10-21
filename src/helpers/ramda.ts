import * as R from "ramda";

type FN<T, R = any> = (obj: T) => R;

/**
 * Takes a function and a functor, applies the function to each of the functor's
 * values recursively, and returns a functor of the same shape. Must be written
 * as arrow `x => recursiveMapValues(x)` due to recursion.
 *
 * recursiveMapValues :: (String → String) → Object → Object
 */
export const recursiveMapValues: Function = R.curry((fn: FN<Object>, obj: Object) =>
  R.ifElse(R.is(Object), R.map(x => recursiveMapValues(fn, x)), fn)(obj)
);
