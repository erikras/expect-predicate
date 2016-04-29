# expect-predicate
---
[![NPM Version](https://img.shields.io/npm/v/expect-predicate.svg?style=flat-square)](https://www.npmjs.com/package/expect-predicate) 
[![NPM Downloads](https://img.shields.io/npm/dm/expect-predicate.svg?style=flat-square)](https://www.npmjs.com/package/expect-predicate)
[![Build Status](https://img.shields.io/travis/erikras/expect-predicate/master.svg?style=flat-square)](https://travis-ci.org/erikras/expect-predicate)
[![devDependency Status](https://david-dm.org/erikras/expect-predicate/dev-status.svg)](https://david-dm.org/erikras/expect-predicate#info=devDependencies)

[expect-predicate](https://github.com/erikras/expect-predicate) is an extension for
[expect](https://github.com/mjackson/expect) that lets you test values against arbitrary
predicates.

**A value "passes" a predicate if the predicate returns a truthy value.**

---

## Installation

Using [npm](https://www.npmjs.org/):

```bash
  $ npm install --save-dev expect expect-predicate
```

Then, use as you would anything else:

```js
// using ES6 modules
import expect from 'expect'
import expectPredicate from 'expect-predicate'
expect.extend(expectPredicate)

// using CommonJS modules
var expect = require('expect')
var expectPredicate = require('expect-predicate')
expect.extend(expectPredicate)
```

## Assertions

### toPass

> `expect(value).toPass(predicate, [message])`

Asserts the given value passes the given predicate. If you provide a message, it will be used 
when reporting the failure.

```js
expect(age).toPass(n => n >= 18)                // check age is 18 or older
expect(userList).toPass(array => array.length)  // check that userList is not empty
```

### toNotPass

> `expect(value).toNotPass(predicate, [message])`

Asserts the given value does NOT pass the given predicate. If you provide a message, it will be 
used when reporting the failure.

```js
expect(age).toNotPass(n => n < 18)                 // check age is not under 18
expect(userList).toNotPass(array => array.length)  // check that userList is empty
```
