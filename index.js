"use strict";

// Prettier's defaults
const printWidth = 80;
const tabWidth = 2;

// Complexity limits that point at code smells, MUST be set to "warn"
const maxDepth = 2;
const maxNestedCallbacks = maxDepth;
const maxParams = 4;
const maxLines = 999;

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
    "no-inner-declarations": "error",
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
    "no-empty-function": [
      "error",
      { allow: ["arrowFunctions", "functions", "methods"] }
    ],
    "no-empty-pattern": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-fallthrough": ["error", { commentPattern: ".^" }],
    "no-global-assign": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-invalid-this": "error",
    "no-iterator": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-multi-str": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "error",
    "no-proto": "error",
    "no-redeclare": "error",
    "no-restricted-properties": [
      "error",
      {
        object: "global",
        property: "isNaN",
        message: "Use 'Number.isNaN' instead."
      },
      {
        object: "window",
        property: "isNaN",
        message: "Use 'Number.isNaN' instead."
      },
      {
        object: "self",
        property: "isNaN",
        message: "Use 'Number.isNaN' instead."
      },
      {
        object: "global",
        property: "isFinite",
        message: "Use 'Number.isFinite' instead."
      },
      {
        object: "window",
        property: "isFinite",
        message: "Use 'Number.isFinite' instead."
      },
      {
        object: "self",
        property: "isFinite",
        message: "Use 'Number.isFinite' instead."
      }
    ],
    "no-return-assign": ["error", "always"],
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
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
    "vars-on-top": "error",
    yoda: "error",
    strict: "error",
    "init-declarations": "error",
    "no-catch-shadow": "error",
    "no-delete-var": "error",
    "no-label-var": "error",
    "no-restricted-globals": [
      "error",
      { name: "isNaN", message: "Use 'Number.isNaN' instead." },
      { name: "isFinite", message: "Use 'Number.isFinite' instead." }
    ],
    "no-shadow-restricted-names": "error",
    "no-undef": "error",
    "no-undef-init": "error",
    "no-unused-vars": ["error", { ignoreRestSiblings: true }],
    "no-use-before-define": "error",
    camelcase: ["error", { properties: "never" }],
    "func-style": "error",
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
    "max-depth": ["warn", maxDepth],
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
    "max-lines": ["warn", maxLines],
    "max-nested-callbacks": ["warn", maxNestedCallbacks],
    "max-params": ["warn", maxParams],
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
    "no-new-object": "error",
    "no-plusplus": "error",
    "no-restricted-syntax": [
      "error",
      {
        selector: "ForInStatement",
        message:
          "'for in' is restricted from being used. Use a higher-order function instead."
      },
      {
        selector: "ForOfStatement",
        message:
          "'for of' is restricted from being used. Use a higher-order function instead."
      },
      {
        selector: "ForStatement",
        message:
          "'for' is restricted from being used. Use a higher-order function instead."
      },
      {
        selector: "BinaryExpression[operator=instanceof][right.name=Array]",
        message:
          "'instanceof' is restricted from being used. Use 'Array.isArray' instead."
      },
      {
        selector: "BinaryExpression[operator=instanceof][right.name!=Array]",
        message:
          "'instanceof' is restricted from being used. Use 'Object.prototype.isPrototypeOf' instead."
      },
      {
        selector: "SequenceExpression",
        message: "Unexpected use of ','. Use '{ }' instead."
      }
    ],
    "no-underscore-dangle": "error",
    "no-unneeded-ternary": ["error", { defaultAssignment: false }],
    "one-var": ["error", "never"],
    "operator-assignment": "error",
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: [
          "directive",
          "import",
          "export",
          "class",
          "function",
          "block",
          "block-like"
        ],
        next: ["*"]
      },
      {
        blankLine: "always",
        prev: ["*"],
        next: ["import", "export", "class", "function"]
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
    "prefer-const": "error",
    "prefer-destructuring": "error",
    "prefer-numeric-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "require-yield": "error",
    "symbol-description": "error"
  }
};
