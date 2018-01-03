"use strict";

const test = require("tape");
const { CLIEngine } = require("eslint");
const index = require("./index.js");

test("index.js with eslint", ({ doesNotThrow, end }) => {
  doesNotThrow(
    () => new CLIEngine({ configFile: "./index.js" }),
    Error,
    "should be parsed and validated by ESLint's CLIEngine"
  );
  end();
});

test("index.js with eslint-plugin-prettier", ({ equal, end }) => {
  equal(
    Array.isArray(index.plugins) && index.plugins.includes("prettier"),
    true,
    "should use eslint-plugin-prettier"
  );
  equal(
    index.rules["prettier/prettier"][0],
    "error",
    "should turn on prettier rule as an error"
  );
  end();
});

test("index.js max-len rule with eslint-plugin-prettier", ({ equal, end }) => {
  const {
    "max-len": [, maxLen],
    "prettier/prettier": [, prettier]
  } = index.rules;
  equal(maxLen.code, prettier.printWidth, "should use Prettier's printWidth");
  equal(maxLen.tabWidth, prettier.tabWidth, "should use Prettier's tabWidth");
  end();
});
