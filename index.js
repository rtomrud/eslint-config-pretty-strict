"use strict";

// MUST be synchronized with Prettier (use their defaults)
const printWidth = 80;
const tabWidth = 2;
const useTabs = false;

// Arbitrary limits for rules that measure complexity and point at code smells
// As these are subjective and can be hard to fix, they MUST be set to "warn"
const complexity = 8;
const idLength = 32;
const maxDepth = 2;
const maxLines = 512;
const maxNestedCallbacks = 2;
const maxParams = 4;
const maxStatements = 16;

module.exports = {
  plugins: ["prettier"],

  // MUST NOT use rules that conflict or are redundant with Prettier
  rules: {
    "prettier/prettier": ["error", { printWidth, tabWidth, useTabs }],
    "for-direction": "error",
    "getter-return": ["error", { allowImplicit: false }],
    "no-await-in-loop": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": ["error", "always"],
    "no-console": [
      "error",
      {
        allow: ["error", "group", "groupCollapsed", "groupEnd", "info", "warn"]
      }
    ],
    "no-constant-condition": ["error", { checkLoops: true }],
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-dupe-args": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty": ["error", { allowEmptyCatch: false }],
    "no-empty-character-class": "error",
    "no-ex-assign": "error",
    "no-extra-boolean-cast": "error",
    "no-func-assign": "error",
    "no-inner-declarations": ["error", "both"],
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": [
      "error",
      {
        skipStrings: false,
        skipComments: false,
        skipRegExps: false,
        skipTemplates: false
      }
    ],
    "no-obj-calls": "error",
    "no-prototype-builtins": "error",
    "no-regex-spaces": "error",
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "error",
    "no-unreachable": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "use-isnan": "error",
    "valid-jsdoc": [
      "error",
      {
        requireReturn: true,
        requireReturnType: true,
        requireParamDescription: false,
        requireReturnDescription: false
      }
    ],
    "valid-typeof": ["error", { requireStringLiterals: true }],
    "accessor-pairs": ["error", { setWithoutGet: true, getWithoutSet: false }],
    "array-callback-return": ["error", { allowImplicit: false }],
    "block-scoped-var": "error",
    "class-methods-use-this": "error",
    complexity: ["warn", { max: complexity }],
    "consistent-return": ["error", { treatUndefinedAsUnspecified: false }],
    curly: [
      "error",

      // MUST be "all" or "multi" to work with Prettier
      "all"
    ],
    "default-case": "error",
    "dot-notation": ["error", { allowKeywords: true }],
    eqeqeq: ["error", "always", { null: "always" }],
    "guard-for-in": "error",
    "no-alert": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-else-return": ["error", { allowElseIf: false }],
    "no-empty-function": "error",
    "no-empty-pattern": "error",
    "no-eval": ["error", { allowIndirect: false }],
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-fallthrough": "error",
    "no-global-assign": "error",
    "no-implicit-coercion": [
      "error",
      { boolean: true, number: true, string: true }
    ],
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-invalid-this": "error",
    "no-iterator": "error",
    "no-labels": ["error", { allowLoop: false, allowSwitch: false }],
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-magic-numbers": [
      "error",
      {
        ignore: [-1, 0, 1, 2],
        ignoreArrayIndexes: false,
        enforceConst: true,
        detectObjects: false
      }
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
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false
      }
    ],
    "no-unused-labels": "error",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    "no-useless-return": "error",
    "no-void": "error",
    "no-with": "error",
    "prefer-promise-reject-errors": ["error", { allowEmptyReject: false }],
    radix: ["error", "always"],
    "require-await": "error",
    "vars-on-top": "error",
    yoda: ["error", "never", { exceptRange: false, onlyEquality: false }],
    strict: ["error", "safe"],
    "init-declarations": ["error", "always"],
    "no-catch-shadow": "error",
    "no-delete-var": "error",
    "no-label-var": "error",
    "no-shadow-restricted-names": "error",
    "no-undef": ["error", { typeof: true }],
    "no-undef-init": "error",
    "no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "all",
        ignoreRestSiblings: true,
        caughtErrors: "all"
      }
    ],
    "no-use-before-define": [
      "error",
      { functions: true, classes: true, variables: true }
    ],
    camelcase: ["error", { properties: "never" }],
    "func-name-matching": [
      "error",
      "always",
      { includeCommonJSModuleExports: false }
    ],
    "func-names": ["error", "as-needed"],
    "func-style": ["error", "expression", { allowArrowFunctions: true }],
    "id-length": ["warn", { min: 1, max: idLength, properties: "never" }],
    "lines-around-comment": [
      "error",
      {
        beforeBlockComment: true,
        afterBlockComment: false,
        beforeLineComment: true,
        afterLineComment: false,

        // MUST be `true` to work with Prettier
        allowBlockStart: true,

        // MUST be `true` to work with Prettier
        allowBlockEnd: true,

        // MUST be `true` to work with Prettier
        allowObjectStart: true,

        // MUST be `true` to work with Prettier
        allowObjectEnd: true,

        // MUST be `true` to work with Prettier
        allowArrayStart: true,

        // MUST be `true` to work with Prettier
        allowArrayEnd: true,

        applyDefaultIgnorePatterns: false
      }
    ],
    "lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: false }
    ],
    "max-depth": ["warn", maxDepth],
    "max-len": [
      "error",
      {
        code: printWidth,
        tabWidth,
        ignoreComments: false,
        ignoreTrailingComments: false,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ],
    "max-lines": [
      "warn",
      { max: maxLines, skipBlankLines: false, skipComments: false }
    ],
    "max-nested-callbacks": ["warn", maxNestedCallbacks],
    "max-params": ["warn", maxParams],
    "max-statements": [
      "warn",
      maxStatements,
      { ignoreTopLevelFunctions: true }
    ],
    "max-statements-per-line": ["error", { max: 1 }],
    "multiline-comment-style": ["error", "separate-lines"],
    "new-cap": ["error", { newIsCap: true, capIsNew: false, properties: true }],
    "no-array-constructor": "error",
    "no-bitwise": ["error", { int32Hint: false }],
    "no-continue": "error",
    "no-inline-comments": "error",
    "no-lonely-if": "error",
    "no-mixed-operators": [
      "error",
      {
        groups: [
          ["%", "**"],
          ["%", "+"],
          ["%", "-"],
          ["%", "*"],
          ["%", "/"],
          ["**", "+"],
          ["**", "-"],
          ["**", "*"],
          ["**", "/"],
          ["&", "|", "^", "~", "<<", ">>", ">>>"],
          ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
          ["&&", "||"],
          ["in", "instanceof"]
        ],
        allowSamePrecedence: false
      }
    ],
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
        selector: "WithStatement",
        message: "Don't use `with`. Use variables instead."
      },
      {
        selector: "LabeledStatement",
        message: "Labels make code confusing and hard to maintain, like GOTO."
      },
      {
        selector: "SequenceExpression",
        message: "Don't use the `,` operator. Use `{ }` instead."
      },
      {
        selector: "UnaryExpression[operator=void]",
        message: "Don't use void. Use `undefined` instead."
      }
    ],
    "no-tabs": useTabs ? "off" : "error",
    "no-underscore-dangle": [
      "error",
      {
        allowAfterThis: false,
        allowAfterSuper: false,
        enforceInMethodNames: true
      }
    ],
    "no-unneeded-ternary": ["error", { defaultAssignment: false }],
    "one-var": ["error", "never"],
    "operator-assignment": ["error", "always"],
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
    "spaced-comment": ["error", "always"],
    "arrow-body-style": [
      "error",
      "as-needed",
      { requireReturnForObjectLiteral: false }
    ],
    "constructor-super": "error",
    "no-class-assign": "error",
    "no-const-assign": "error",
    "no-dupe-class-members": "error",
    "no-duplicate-imports": ["error", { includeExports: true }],
    "no-new-symbol": "error",
    "no-this-before-super": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": [
      "error",
      { ignoreDestructuring: false, ignoreImport: false, ignoreExport: false }
    ],
    "no-var": "error",
    "object-shorthand": [
      "error",
      "always",
      {
        avoidQuotes: true,
        ignoreConstructors: false,
        avoidExplicitReturnArrows: false
      }
    ],
    "prefer-arrow-callback": [
      "error",
      { allowNamedFunctions: false, allowUnboundThis: false }
    ],
    "prefer-const": [
      "error",
      { destructuring: "any", ignoreReadBeforeAssign: true }
    ],
    "prefer-destructuring": [
      "error",
      { array: true, object: true },
      { enforceForRenamedProperties: false }
    ],
    "prefer-numeric-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "require-yield": "error",
    "symbol-description": "error"
  }
};
