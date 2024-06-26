export default [
  {
    rules: {
      "accessor-pairs": [
        "error",
        { setWithoutGet: true, enforceForClassMembers: true },
      ],
      "array-callback-return": ["error", { allowImplicit: true }],
      "block-scoped-var": "error",
      "class-methods-use-this": "error",
      "consistent-return": "error",
      "constructor-super": "error",
      curly: "error",
      "default-case": ["error", { commentPattern: ".^" }],
      "default-case-last": "error",
      "default-param-last": "error",
      "dot-notation": "error",
      eqeqeq: ["error", "always", { null: "ignore" }],
      "for-direction": "error",
      "func-style": "error",
      "getter-return": ["error", { allowImplicit: true }],
      "grouped-accessor-pairs": "error",
      "guard-for-in": "error",
      "max-classes-per-file": "error",
      "no-alert": "error",
      "no-array-constructor": "error",
      "no-async-promise-executor": "error",
      "no-await-in-loop": "error",
      "no-bitwise": "error",
      "no-caller": "error",
      "no-case-declarations": "error",
      "no-class-assign": "error",
      "no-compare-neg-zero": "error",
      "no-cond-assign": ["error", "always"],
      "no-const-assign": "error",
      "no-constant-binary-expression": "error",
      "no-constant-condition": "error",
      "no-constructor-return": "error",
      "no-continue": "error",
      "no-control-regex": "error",
      "no-debugger": "error",
      "no-delete-var": "error",
      "no-dupe-args": "error",
      "no-dupe-class-members": "error",
      "no-dupe-else-if": "error",
      "no-dupe-keys": "error",
      "no-duplicate-case": "error",
      "no-duplicate-imports": ["error", { includeExports: true }],
      "no-else-return": ["error", { allowElseIf: false }],
      "no-empty": "error",
      "no-empty-character-class": "error",
      "no-empty-function": [
        "error",
        { allow: ["functions", "arrowFunctions", "methods"] },
      ],
      "no-empty-pattern": "error",
      "no-empty-static-block": "error",
      "no-eval": "error",
      "no-ex-assign": "error",
      "no-extend-native": "error",
      "no-extra-bind": "error",
      "no-extra-boolean-cast": ["error", { enforceForLogicalOperands: true }],
      "no-extra-label": "error",
      "no-fallthrough": ["error", { commentPattern: ".^" }],
      "no-func-assign": "error",
      "no-global-assign": "error",
      "no-implicit-coercion": "error",
      "no-implicit-globals": "error",
      "no-implied-eval": "error",
      "no-import-assign": "error",
      "no-inner-declarations": "error",
      "no-invalid-regexp": "error",
      "no-irregular-whitespace": ["error", { skipStrings: false }],
      "no-iterator": "error",
      "no-label-var": "error",
      "no-labels": "error",
      "no-lone-blocks": "error",
      "no-lonely-if": "error",
      "no-loop-func": "error",
      "no-loss-of-precision": "error",
      "no-misleading-character-class": "error",
      "no-multi-assign": "error",
      "no-multi-str": "error",
      "no-new": "error",
      "no-new-func": "error",
      "no-new-native-nonconstructor": "error",
      "no-new-wrappers": "error",
      "no-nonoctal-decimal-escape": "error",
      "no-obj-calls": "error",
      "no-octal": "error",
      "no-octal-escape": "error",
      "no-param-reassign": "error",
      "no-plusplus": "error",
      "no-promise-executor-return": "error",
      "no-proto": "error",
      "no-prototype-builtins": "error",
      "no-redeclare": "error",
      "no-regex-spaces": "error",
      "no-return-assign": ["error", "always"],
      "no-script-url": "error",
      "no-self-assign": "error",
      "no-self-compare": "error",
      "no-sequences": "error",
      "no-setter-return": "error",
      "no-shadow-restricted-names": "error",
      "no-sparse-arrays": "error",
      "no-template-curly-in-string": "error",
      "no-this-before-super": "error",
      "no-throw-literal": "error",
      "no-undef": "error",
      "no-undef-init": "error",
      "no-unexpected-multiline": "error",
      "no-unmodified-loop-condition": "error",
      "no-unneeded-ternary": ["error", { defaultAssignment: false }],
      "no-unreachable": "error",
      "no-unreachable-loop": "error",
      "no-unsafe-finally": "error",
      "no-unsafe-negation": ["error", { enforceForOrderingRelations: true }],
      "no-unsafe-optional-chaining": "error",
      "no-unused-expressions": "error",
      "no-unused-labels": "error",
      "no-unused-private-class-members": "error",
      "no-unused-vars": ["error", { ignoreRestSiblings: true }],
      "no-use-before-define": "error",
      "no-useless-backreference": "error",
      "no-useless-call": "error",
      "no-useless-catch": "error",
      "no-useless-computed-key": ["error", { enforceForClassMembers: true }],
      "no-useless-concat": "error",
      "no-useless-constructor": "error",
      "no-useless-escape": "error",
      "no-useless-rename": "error",
      "no-useless-return": "error",
      "no-var": "error",
      "no-void": "error",
      "no-with": "error",
      "object-shorthand": ["error", "always", { avoidQuotes: true }],
      "one-var": ["error", "never"],
      "operator-assignment": "error",
      "prefer-const": "error",
      "prefer-destructuring": "error",
      "prefer-exponentiation-operator": "error",
      "prefer-numeric-literals": "error",
      "prefer-object-spread": "error",
      "prefer-promise-reject-errors": "error",
      "prefer-regex-literals": "error",
      "prefer-rest-params": "error",
      "prefer-spread": "error",
      "prefer-template": "error",
      radix: "error",
      "require-atomic-updates": "error",
      "require-yield": "error",
      strict: "error",
      "symbol-description": "error",
      "use-isnan": [
        "error",
        { enforceForSwitchCase: true, enforceForIndexOf: true },
      ],
      "valid-typeof": ["error", { requireStringLiterals: true }],
      "vars-on-top": "error",
      yoda: "error",
    },
  },
];
