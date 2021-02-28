# eslint-config-pretty-strict

[![build status](https://github.com/rtomrud/eslint-config-pretty-strict/workflows/build/badge.svg)](https://github.com/rtomrud/eslint-config-pretty-strict/actions?query=branch%3Amaster+workflow%3Abuild)
[![npm version](https://badgen.net/npm/v/eslint-config-pretty-strict)](https://www.npmjs.com/package/eslint-config-pretty-strict)

A strict [ESLint](https://eslint.org) config with [Prettier](https://prettier.io/) as a code formatter

> Any style guide written in English is either so brief that it’s ambiguous, or so long that no one reads it.
>
> [—Bob Nystrom](http://journal.stuffwithstuff.com/2015/09/08/the-hardest-program-ive-ever-written/)

This config provides reasonable ESLint rules to [prevent errors](https://eslint.org/docs/rules/#possible-errors), [enforce best practices](https://eslint.org/docs/rules/#best-practices) and [keep a consistent style](https://eslint.org/docs/rules/#stylistic-issues). Though you may [configure](#configuring) it to your needs.

> Formatting is a computer's job.
>
> [—Kent Beck](https://twitter.com/KentBeck/status/877970657086066688)

Also, it automates code formatting with [Prettier](https://prettier.io/docs/en/why-prettier.html) and [autofixable ESLint rules](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) to ensure consistent and legible formatting. The ESLint rules are carefully configured not to conflict with Prettier in any way.

By using [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier), Prettier is seamlessly integrated with ESLint. So you don't have to run these tools separately because ESLint reports the formatting problems detected by Prettier and lets you [automatically fix them with the `--fix` option](https://eslint.org/docs/user-guide/command-line-interface#-fix).

## Installing

Install eslint-config-pretty-strict with its peer dependencies [eslint](https://github.com/eslint/eslint), [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) and [prettier](https://github.com/prettier/prettier):

```bash
npm install --save-dev --save-exact eslint-config-pretty-strict eslint eslint-plugin-prettier prettier
```

Then, in your `package.json` file, add an `"eslintConfig"` key with the following value:

```json
{
  "extends": ["eslint-config-pretty-strict"],
  "parserOptions": {
    "ecmaVersion": 2020
  },
  "root": true
}
```

Alternatively, you may use an [.eslintrc.\* configuration file](https://eslint.org/docs/user-guide/configuring#configuration-file-formats) instead of the `"eslintConfig"` field in the `package.json` file.

## Using

Run ESLint via the [command line interface](https://eslint.org/docs/user-guide/command-line-interface) with:

```bash
./node_modules/.bin/eslint .

# Alternatively, automatically fix most problems with the --fix option
./node_modules/.bin/eslint . --fix
```

Note that you may install an [ESLint plugin](https://eslint.org/docs/user-guide/integrations#editors) for your text editor, so that you can see and fix the style problems directly from your editor. You may also use a [Prettier plugin](https://prettier.io/docs/en/editors.html) to automatically format with a keyboard shortcut or on file save.

## Configuring

> What if I don't agree with some rule?

You can [granularly override](https://eslint.org/docs/user-guide/configuring) any ESLint setting or [rule](https://eslint.org/docs/user-guide/configuring#configuring-rules). Also, Prettier can be [configured](https://prettier.io/docs/en/options.html) via a [config file](https://prettier.io/docs/en/configuration.html) or the [eslint-plugin-prettier `"prettier/prettier"` rule](https://github.com/prettier/eslint-plugin-prettier#options).

Sometimes, you may want to [disable a rule with in-line comments](https://eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments) for a given file or line of code.

## License

[MIT](./LICENSE)
