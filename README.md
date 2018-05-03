# eslint-config-pretty-strict

[![npm version](https://img.shields.io/npm/v/eslint-config-pretty-strict.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-pretty-strict)
[![Build Status](https://img.shields.io/travis/rtomrud/eslint-config-pretty-strict/master.svg?style=flat-square)](https://travis-ci.org/rtomrud/eslint-config-pretty-strict)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

A strict [ESLint](https://eslint.org) config with [Prettier](https://prettier.io/) as a code formatter

## Purpose

Code style must be consistent. Code should be unsurprising. The readers need to be able to trust that the structures and patterns they have seen in one source file will mean the same thing in others, because a code base with an inconsistent style taxes the reader with additional cognitive load.

Forcing every contributor to read and comply with a style guide is not an ideal solution, as the rules may be hard to interiorize. This leads to overlooked or unenforced rules. Then code reviews catch style errors and time is wasted with nitpicks, which is why style rules should be automatically enforced.

This opinionated linter config provides strictly configured [ESLint](https://eslint.org/docs/about/) rules to [prevent errors](#1-ban-error-prone-code) and enforce [best](#2-dont-repeat-yourself) [practices](#3-do-one-thing). It also [automatically formats code](#4-automate-formatting) through [Prettier](https://prettier.io/docs/en/index.html) and [fixable ESLint rules](https://eslint.org/docs/user-guide/command-line-interface#--fix) to ensure consistent formatting.

This config is intended to be used with the latest version of ESLint and Prettier.

## Installing

Install [eslint-config-pretty-strict](./) and its peer dependencies [eslint](https://github.com/eslint/eslint), [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) and [prettier](https://github.com/prettier/prettier):

```bash
npm install --save-dev eslint-config-pretty-strict eslint eslint-plugin-prettier
npm install --save-dev --save-exact prettier # Prettier's patches have breaking changes
```

Add an `"eslintConfig"` property to your `package.json` and add [eslint-config-pretty-strict](./index.js) to the `"extends"` array:

```json
{
  "extends": [
    "./node_modules/eslint-config-pretty-strict/index.js"
  ],
  "parserOptions": {
    "ecmaVersion": 2015
  },
  "root": true
}
```

Alternatively, use an [.eslintrc.\* configuration file](https://eslint.org/docs/user-guide/configuring#using-configuration-files) instead of the `"eslintConfig"` property of the `package.json`.

## Using

Run [ESLint via the command line](https://eslint.org/docs/user-guide/command-line-interface) with:

```bash
./node_modules/.bin/eslint .

# Alternatively, automatically fix some problems with the --fix option
./node_modules/.bin/eslint . --fix
```

Note that you can install an [ESLint plugin](https://eslint.org/docs/user-guide/integrations#editors) for your text editor of choice, to see and fix the style problems directly from your editor. You could also use a [Prettier plugin](https://prettier.io/docs/en/editors.html) to automatically format with a keyboard shortcut or on file save.

## Principles

This config follows the following principles.

### 1. Ban Error-prone Code

Allowed code must be easily told apart from errors, so error-prone code that has a safer alternative is banned.

> If a feature is sometimes useful and sometimes dangerous, and there is a better option, then always use the better option.—Douglas Crockford

```js
// ✓ ok, true only if `foo` is 1
if (foo === 1) {
}

// ✓ ok, true if `foo` is 1 or "1"
if (Number(foo) === 1) {
}

// ✗ bad, is `foo` meant to be type coerced, or is it a typo?
if (foo == 1) {
}
```

```js
// ✓ ok, delegates the method call to the `Object` prototype
const foo = Object.prototype.hasOwnProperty.call(object, key);

// ✗ bad, may be shadowed, or the object may come from `Object.create(null)`
const foo = object.hasOwnProperty(key);
```

```js
// ✓ ok, explicitely specifies the radix
const foo = parseInt("042", 10);

// ✗ bad, in pre-ES5 engines it is parsed as an octal if there is a leading 0
const foo = parseInt("042");
```

```js
// ✓ ok, does not extend native types
const count = condition => array =>
  array.reduce((count, item) => count + (condition(item) ? 1 : 0), 0);

// ✗ bad, may break with future ECMAScript editions; not future-proof
Array.prototype.count = function(condition) {
  return this.reduce((count, item) => count + (condition(item) ? 1 : 0), 0);
};
```

### 2. Don't Repeat Yourself

Use syntax that minimizes duplication. It reduces visual clutter and makes refactoring easier.

```js
// ✓ ok
const { firstName, lastName } = user;

// ✗ bad
const firstName = user.firstName;
const lastName = user.lastName;
```

```js
// ✓ ok
const [first, second] = users;

// ✗ bad
const first = users[0];
const second = users[1];
```

```js
// ✓ ok
return {
  firstName,
  lastName
};

// ✗ bad
return {
  firstName: firstName,
  lastName: lastName
};
```

```js
// ✓ ok
const foo = bar || baz;

// ✗ bad
const foo = bar ? bar : baz;
```

### 3. Do One Thing

Do it only, per line of code. Statements, expressions, clauses or chained calls should go on their own lines. It speeds-up reading, scanning and refactoring. It makes typos stand out. It makes diffs clearer, by preventing punctuation-only diffs. And it simplifies using a debugger: you can set breakpoints more granularly, and step through things one by one instead of jumping through all at once.

```js
// ✓ ok
let foo = 0;
let bar = 0;
let baz = 0;

// ✗ bad
let foo, bar, baz;

// ✗ bad
let foo = 0,
  bar = 0,
  baz = 0;

// ✗ very bad
let foo = (bar = baz = 0);
```

```js
// ✓ ok
if (foo) {
  bar();
}

// ✗ bad
if (foo) bar();
```

### 4. Automate Formatting

Use [Prettier](https://prettier.io/) to automatically format the code in a consistent, legible, and mostly standard and unastonishing way. This frees you from the burden of remembering formatting rules and applying them by hand. [More on why it matters](https://prettier.io/docs/en/why-prettier.html).

> Formatting is a computer's job.—Kent Beck

This config enables [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) so that ESLint reports the formatting problems detected by Prettier and lets you fix them with its `--fix` option. That way you do not have to worry about running both ESLint _and_ Prettier, you only have to run ESLint and it will handle both linting and formatting.

The rules of this config are set up not to conflict with Prettier in any way.

## Configuring ESLint with your own rules

> What if I don't agree with some rule?

ESLint allows [granularly configuring](https://eslint.org/docs/user-guide/configuring) any setting. You can [configure it on a per-folder basis](https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy), [extend configs](https://eslint.org/docs/user-guide/configuring#extending-configuration-files), and specify [parsers](https://eslint.org/docs/user-guide/configuring#specifying-parser-options), [environments](https://eslint.org/docs/user-guide/configuring#specifying-environments) or [rules](https://eslint.org/docs/user-guide/configuring#configuring-rules).

You may want to [disable a rule with in-line comments](https://eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments) when there is a legitimate use case for code reported by the linter.

## License

[MIT](./LICENSE)
