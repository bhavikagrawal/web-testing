Jest is a Node-based test runner

use `npm install --save-dev jest` to install jest but it comes preinstalled with `react-scripts`

Jest will look for test files with any of the following popular naming conventions:

Files with .js(or .ts) suffix in **tests** folders.
Files with .test.js(or .ts) suffix.
Files with .spec.js(or .ts) suffix.
The .test.js / .spec.js files (or the **tests** folders) can be located at any depth under the src top level folder.

# [Common Matchers](https://jestjs.io/docs/using-matchers#common-matchers)

## [Truthiness](https://jestjs.io/docs/en/using-matchers#truthiness)

toBeNull, toBeUndefined, toBeDefined, toBeTruthy, toBeFalsy

## [Numbers](https://jestjs.io/docs/en/using-matchers#numbers)

toBeGreaterThan, toBeGreaterThanOrEqual, toBeLessThan, toBeLessThanOrEqual, toBeCloseTo, toBe, toEqual

## [Strings](https://jestjs.io/docs/en/using-matchers#strings)

toMatch

## [Arrays and iterables](https://jestjs.io/docs/en/using-matchers#arrays-and-iterables)

toContain

## [Exceptions](https://jestjs.io/docs/en/using-matchers#exceptions)

toThrow

## [NOT]

not

### [More] (https://jestjs.io/docs/expect)
