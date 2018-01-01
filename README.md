# eslint-config-pretty-strict

Strict [ESLint](https://eslint.org) config with [Prettier](https://prettier.io/)
as a code formatter

## Motivation

Code style must be consistent. Code should be unsurprising. The readers need
to be able to trust that the structures and patterns they have seen in one
source file will mean the same thing in others. Because a code base with an
inconsistent style taxes the reader with additional cognitive load.

Forcing every contributor to read and comply with a style guide isn't a
solution, as the rules can be hard to interiorize and apply, due to their sheer
number. This leads to overlooked, inconsistent, or unenforced rules. Then code
reviews catch style errors and time is wasted with nitpicks.

_All_ style rules should be automatically enforced. Otherwise they aren't worth
the trouble. Because you shouldn't have to waste time thinking about code style,
the rules should require neither judgment calls nor memorizing.

This config provides strictly configured
[ESLint](https://eslint.org/docs/about/) rules to [prevent errors](#1-ban-error-prone-code)
and enforce [best](#2-dont-repeat-yourself) [practices](#3-do-one-thing). It
also [automates code formatting](#4-automate-formatting) through
[Prettier](https://prettier.io/docs/en/index.html) and
[automatically fixable ESLint rules](https://eslint.org/docs/user-guide/command-line-interface#--fix)
to ensure a consistent style.

## Installing

Install [eslint](https://github.com/eslint/eslint),
[prettier](https://github.com/prettier/prettier),
[eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) and
[eslint-config-pretty-strict](./README.md):

```bash
npm install --save-dev eslint eslint-plugin-prettier github:rtomrud/eslint-config-pretty-strict
npm install --save-dev --save-exact prettier
```

## Using

Add an `"eslintConfig"` property in your `package.json` file and extend the
[eslint-config-pretty-strict](./index.js):

```json
{
  "eslintConfig": {
    "extends": ["eslint-config-pretty-strict"],
    "parserOptions": {
      "ecmaVersion": 6
    },
    "root": true
  }
}
```

Alternatively, use an
[.eslintrc.\* configuration file](https://eslint.org/docs/user-guide/configuring#using-configuration-files).

### Running ESLint

Run
[ESLint via the command line](https://eslint.org/docs/user-guide/command-line-interface)
with:

```bash
./node_modules/.bin/eslint .
```

You can automatically fix some of the detected problems by
[running ESLint with the --fix option](https://eslint.org/docs/user-guide/command-line-interface#options).

Note that you can install an
[ESLint plugin](https://eslint.org/docs/user-guide/integrations#editors) and a
[Prettier plugin](https://prettier.io/docs/en/editors.html) for your text editor
of choice, to see and fix the style problems directly in your text editor.

### Specifying environment

If your code is for Node, specify that in the `"eslintConfig"` property of your `package.json` to use the
[NodeJS and CommonJS rules](https://eslint.org/docs/rules/#nodejs-and-commonjs):

```json
{
  "eslintConfig": {
    "env": {
      "node": true
    }
  }
}
```

### Configuring ESLint with your own rules

ESLint allows
[granularly configuring](https://eslint.org/docs/user-guide/configuring) any
setting.

You can
[configure it on a per-folder basis](https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy),
[extend other configs](https://eslint.org/docs/user-guide/configuring#extending-configuration-files),
and specify
[parsers](https://eslint.org/docs/user-guide/configuring#specifying-parser-options),
[environments](https://eslint.org/docs/user-guide/configuring#specifying-environments),
or [rules](https://eslint.org/docs/user-guide/configuring#configuring-rules).

You may want to
[disable a rule with in-line comments](https://eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments)
when there is a legitimate use case for code causing linting errors.

## Principles

The rules of this config adhere to the following principles.

### 1. Ban Error-prone Code

Allowed code must be easily told apart from errors. The linter should catch as
many bugs as possible, so bug-prone code that has a safer alternative is banned.

> If a feature is sometimes useful and sometimes dangerous, and there is a
> better option, then always use the better option.—Douglas Crockford

```js
// ✓ ok
foo = bar;
if (foo) {
}

// ✗ bad
if ((foo = bar)) {
  // Was it meant as an assignment or as an equality test?
}
```

```js
// ✓ ok
if (foo === 0) {
  // Should be true only if `foo` is 0
}

// ✓ ok
if (Number(foo) === 0) {
  // Should be true if `foo` is 0 or "0"
}

// ✗ bad
if (foo == 0) {
  // Was `foo` meant to be type coerced?
}
```

### 2. Don't Repeat Yourself

Use syntax that minimizes duplication.

```js
// ✓ ok
const { firstName, lastName } = user;

// ✗ bad
const firstName = user.firstName;
const lastName = user.lastName;
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
salary += bonus;

// ✗ bad
salary = salary + bonus;
```

```js
// ✓ ok
const foo = foo || bar;

// ✗ bad
const foo = foo ? foo : bar;
```

### 3. Do One Thing

Do it only. Per line of code. What's _One Thing_? Every statement, expression,
clause, declaration or chained call should go on its own line. It speeds-up
reading, scanning and refactoring. It makes typos stand out. And it makes diffs
clearer.

```js
// ✓ ok
if (foo) {
  bar();
}

// ✗ bad
if (foo) bar();
```

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

### 4. Automate Formatting

Use [Prettier](https://prettier.io/) to format the code in a consistent,
legible, and mostly standard and unastonishing way. This frees you from the
burden of remembering formatting rules and applying them by hand.

> Formatting is a computer's job.—Kent Beck

This config enables [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
so that ESLint reports the errors detected by Prettier and lets you fix them
with its `--fix` option. That way you don't have to worry about running both
ESLint _and_ Prettier, you only have to run ESLint and it will handle both
linting and formatting.

The rules of this config are set up not to conflict with Prettier in any way.

## License

[MIT](./LICENSE)
