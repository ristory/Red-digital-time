## Hello

The purpose of this exercise is to serve as a gentle introduction to our
interview process.

This particular exercise is about writing operations against time.

Your solution should be able to add and subtract minutes, and test for
equivalence. Assume a 24-hr time format rather than tracking AM/PM. Ignore
the concept of date for this exercise.

_(reference the .spec.js file for additional clarification)_


We're excited to see your solution!


## Setup

Install the exercise dependencies ([need NPM?](https://www.npmjs.com/get-npm)):

```bash
$ npm install
```

Run the tests using the command:

```bash
$ npm test
```


## Instructions

1. Modify digital-time.js to satisfy the test spec. The test spec is defined in digital-time.spec.js.

2. Once the first specs in the test suite are passing, enable the next test in the test spec by changing `xtest` to `test`. Rinse and repeat.

3. Upload your `digital-time.js` solution as a secret gist on ([gist.github.com](https://gist.github.com)).

3. Email us the link of your secret gist.


## Example Method Calls

### `at`

* `at(3).toString()` should return `'03:00'`

* `at(10, 8).toString()` should return `'10:08'`

* `at(2, 60).toString()` should return `'03:00'`

* `at(-1, 7).toString()` should return `'23:07'`

### `plus`

* `at(9, 0).plus(1).toString()` should return `'09:01'`

### `minus`

* `at(7, 2).minus(2).toString()` should return `'07:00'`

### `equals`

* `at(11, 54).equals(at(11, 54)` should return `true`

* `at(23, 24).equals(at(-1, 24)` should return `true`

* `at(3, 45).equals(at(4, 45)` should return `false`
