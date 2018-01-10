"use strict";

// MUST be synchronized with Prettier (use their defaults)
const printWidth = 80;
const tabWidth = 2;

/*
 * Arbitrary limits for rules that measure complexity and point at code smells
 * As these are subjective and can be hard to fix, they MUST be set to "warn"
 */
const complexity = 16;
const idLength = 32;
const depth = 2;
const lines = 512;
const nestedCallbacks = 2;
const params = 4;
const statements = 16;

module.exports = {
  plugins: ["prettier"],

  // MUST NOT use rules that conflict or are redundant with Prettier
  rules: {
    "prettier/prettier": ["error", { printWidth, tabWidth }],
    "for-direction": "error",
    "getter-return": ["error", { allowImplicit: true }],
    "no-await-in-loop": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": ["error", "always"],
    "no-constant-condition": "error",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-dupe-args": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty": "error",
    "no-empty-character-class": "error",
    "no-ex-assign": "error",
    "no-extra-boolean-cast": "error",
    "no-func-assign": "error",
    "no-inner-declarations": ["error", "both"],
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-obj-calls": "error",
    "no-prototype-builtins": "error",
    "no-regex-spaces": "error",
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "error",
    "no-unreachable": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "use-isnan": "error",
    "valid-typeof": ["error", { requireStringLiterals: true }],
    "accessor-pairs": "error",
    "array-callback-return": ["error", { allowImplicit: true }],
    "block-scoped-var": "error",
    "class-methods-use-this": "error",
    complexity: ["warn", { max: complexity }],
    "consistent-return": "error",
    curly: "error",
    "default-case": "error",
    "dot-notation": "error",
    eqeqeq: ["error", "always", { null: "ignore" }],
    "guard-for-in": "error",
    "no-alert": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-else-return": ["error", { allowElseIf: false }],
    "no-empty-function": "error",
    "no-empty-pattern": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-fallthrough": "error",
    "no-global-assign": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-invalid-this": "error",
    "no-iterator": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-magic-numbers": [
      "error",
      { ignore: [-1, 0, 1, 2], enforceConst: true }
    ],
    "no-multi-str": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-param-reassign": ["error", { props: true }],
    "no-proto": "error",
    "no-redeclare": ["error", { builtinGlobals: true }],
    "no-return-assign": ["error", "always"],
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-assign": ["error", { props: true }],
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": "error",
    "no-unused-labels": "error",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    "no-useless-return": "error",
    "no-void": "error",
    "no-with": "error",
    "prefer-promise-reject-errors": "error",
    radix: "error",
    "require-await": "error",
    "vars-on-top": "error",
    yoda: "error",
    strict: "error",
    "init-declarations": "error",
    "no-catch-shadow": "error",
    "no-delete-var": "error",
    "no-label-var": "error",
    "no-shadow-restricted-names": "error",
    "no-undef": "error",
    "no-undef-init": "error",
    "no-unused-vars": ["error", { ignoreRestSiblings: true }],
    "no-use-before-define": "error",
    camelcase: ["error", { properties: "never" }],
    "func-name-matching": "error",
    "func-names": ["error", "as-needed"],
    "func-style": "error",
    "id-length": ["warn", { min: 1, max: idLength, properties: "never" }],
    "lines-around-comment": [
      "error",
      {
        beforeLineComment: true,

        // MUST be `true` to work with Prettier
        allowBlockStart: true,
        allowBlockEnd: true,
        allowObjectStart: true,
        allowObjectEnd: true,
        allowArrayStart: true,
        allowArrayEnd: true,

        applyDefaultIgnorePatterns: false
      }
    ],
    "lines-between-class-members": "error",
    "max-depth": ["warn", depth],
    "max-len": [
      "error",
      {
        code: printWidth,
        tabWidth,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ],
    "max-lines": ["warn", lines],
    "max-nested-callbacks": ["warn", nestedCallbacks],
    "max-params": ["warn", params],
    "max-statements": ["warn", statements, { ignoreTopLevelFunctions: true }],
    "max-statements-per-line": "error",
    "multiline-comment-style": "error",
    "new-cap": ["error", { capIsNew: false }],
    "no-array-constructor": "error",
    "no-bitwise": "error",
    "no-continue": "error",
    "no-inline-comments": "error",
    "no-lonely-if": "error",
    "no-multi-assign": "error",
    "no-negated-condition": "error",
    "no-nested-ternary": "error",
    "no-new-object": "error",
    "no-plusplus": "error",
    "no-restricted-syntax": [
      "error",
      {
        selector: "ForInStatement",
        message: "Don't use `for in`. Use higher-order functions instead."
      },
      {
        selector: "ForOfStatement",
        message: "Don't use `for of`. Use higher-order functions instead."
      },
      {
        selector: "SequenceExpression",
        message: "Don't use the `,` operator. Use `{ }` instead."
      },
      {
        selector: "UnaryExpression[operator=void]",
        message: "Don't use `void`. Use `return null;` or `return;` instead."
      },
      {
        selector: ":not(CallExpression) > Identifier[name=undefined]",
        message: "Don't use `undefined`, except as argument to functions."
      }
    ],
    "no-underscore-dangle": "error",
    "no-unneeded-ternary": ["error", { defaultAssignment: false }],
    "one-var": ["error", "never"],
    "operator-assignment": "error",
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: ["*"], next: ["class", "function"] },
      {
        blankLine: "always",
        prev: ["directive", "import", "export"],
        next: ["*"]
      },
      { blankLine: "any", prev: ["directive"], next: ["directive"] },
      { blankLine: "any", prev: ["import"], next: ["import"] },
      { blankLine: "any", prev: ["export"], next: ["export"] }
    ],
    "spaced-comment": ["error", "always", { block: { balanced: true } }],
    "arrow-body-style": "error",
    "constructor-super": "error",
    "no-class-assign": "error",
    "no-const-assign": "error",
    "no-dupe-class-members": "error",
    "no-duplicate-imports": ["error", { includeExports: true }],
    "no-new-symbol": "error",
    "no-this-before-super": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "object-shorthand": ["error", "always", { avoidQuotes: true }],
    "prefer-arrow-callback": "error",
    "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
    "prefer-destructuring": "error",
    "prefer-numeric-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "require-yield": "error",
    "symbol-description": "error"
  }
};
