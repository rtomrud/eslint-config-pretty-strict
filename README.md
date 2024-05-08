# eslint-config-pretty-strict

[![build status](https://github.com/rtomrud/eslint-config-pretty-strict/workflows/ci/badge.svg)](https://github.com/rtomrud/eslint-config-pretty-strict/actions?query=branch%3Amaster+workflow%3Aci)
[![npm version](https://badgen.net/npm/v/eslint-config-pretty-strict)](https://www.npmjs.com/package/eslint-config-pretty-strict)

A strict [ESLint](https://eslint.org) config.

> Any style guide written in English is either so brief that it’s ambiguous, or so long that no one reads it.
>
> [—Bob Nystrom](http://journal.stuffwithstuff.com/2015/09/08/the-hardest-program-ive-ever-written/)

This config provides reasonable ESLint rules to [prevent errors](https://eslint.org/docs/rules/#possible-errors), [enforce best practices](https://eslint.org/docs/rules/#best-practices) and [keep a consistent style](https://eslint.org/docs/rules/#stylistic-issues). Though you may [configure](#configuring) it to your needs.

The rules are configured not to conflict in any way with formatters such as [Prettier](https://prettier.io/).

## Installing

Install eslint-config-pretty-strict and ([eslint](https://github.com/eslint/eslint)):

```bash
npm install --save-dev eslint-config-pretty-strict eslint
```

Then, in your [.eslintrc](https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-file-formats) file, extend this config:

```json
{
  "extends": ["eslint-config-pretty-strict"],
  "parserOptions": {
    "ecmaVersion": 2020
  }
}
```

_Note that you should also set the [`ecmaVersion` option](https://eslint.org/docs/user-guide/configuring/language-options#specifying-parser-options) according to the ECMAScript syntax you use, so that ESLint doesn't output a parsing error._

## Using

Run ESLint via the [command line interface](https://eslint.org/docs/user-guide/command-line-interface) with:

```bash
./node_modules/.bin/eslint .

# Alternatively, automatically fix most problems with the --fix option
./node_modules/.bin/eslint . --fix
```

Usually, you want to run ESLint from a `"lint"` [npm script](https://docs.npmjs.com/cli/v8/using-npm/scripts), both locally and in your CI server.

You may want to install an [ESLint plugin](https://eslint.org/docs/user-guide/integrations#editors) for your text editor, so that you can see and fix style problems directly in your editor.

## Configuring

> What if I don't agree with some rule?

You can [configure any ESLint](https://eslint.org/docs/user-guide/configuring/) setting or [rule](https://eslint.org/docs/user-guide/configuring/rules).

Sometimes, you may want to disable a rule only on some file or line of code by [using configuration comments](https://eslint.org/docs/user-guide/configuring/rules#using-configuration-comments-1).
