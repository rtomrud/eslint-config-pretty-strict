# eslint-config-pretty-strict

A strict ESLint config.

> Any style guide written in English is either so brief that it’s ambiguous, or so long that no one reads it.
>
> [—Bob Nystrom](http://journal.stuffwithstuff.com/2015/09/08/the-hardest-program-ive-ever-written/)

This config provides reasonable [ESLint](https://eslint.org/) rules to detect [possible problems](https://eslint.org/docs/latest/rules/#possible-problems) and [suggest](https://eslint.org/docs/latest/rules/#suggestions) best practices. It includes all the [recommended](https://github.com/eslint/eslint/blob/main/packages/js/src/configs/eslint-recommended.js) rules from [@eslint/js](https://www.npmjs.com/package/@eslint/js) and more.

## Installing

```bash
npm install --save-dev eslint-config-pretty-strict eslint
```

## Using

Import this config in your [eslint.config.js](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file-formats) file:

```js
// eslint.config.js
import prettyStrict from "eslint-config-pretty-strict";

export default [...prettyStrict];
```

Then, run ESLint via the [command line interface](https://eslint.org/docs/latest/use/command-line-interface) with:

```bash
npx eslint .

# Alternatively, automatically fix most problems
npx eslint . --fix
```

Usually, you want to run ESLint from a `"lint"` [npm script](https://docs.npmjs.com/cli/v10/using-npm/scripts), both locally and in CI.

You may want to install an [ESLint plugin](https://eslint.org/docs/user-guide/integrations#editors) for your text editor, so that you can see and fix style problems directly in your editor.

## Configuring

> What if I don't agree with some rule?

You can [configure ESLint](https://eslint.org/docs/latest/use/configure/) settings and [rules](https://eslint.org/docs/latest/use/configure/rules).

Sometimes, you may want to disable a rule only on some file or line of code by [using configuration comments](https://eslint.org/docs/latest/use/configure/rules#using-configuration-comments-1).
