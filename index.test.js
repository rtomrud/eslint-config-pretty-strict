/* eslint-disable prefer-destructuring */

"use strict";

const test = require("tape");
const eslint = require("eslint");
const index = require("./index.js");

test("eslint-config-pretty-strict with eslint", t => {
  t.doesNotThrow(
    () => new eslint.CLIEngine({ configFile: "./index.js" }),
    "parsable and validated by ESLint's CLIEngine"
  );
  t.end();
});

test("eslint-config-pretty-strict with eslint-plugin-prettier", t => {
  t.equal(
    Array.isArray(index.plugins) && index.plugins.indexOf("prettier") !== -1,
    true,
    "uses eslint-plugin-prettier"
  );
  t.equal(
    index.rules["prettier/prettier"][0],
    "error",
    "turns on prettier rule as an error"
  );
  t.end();
});

test("eslint-config-pretty-strict max-len with eslint-plugin-prettier", t => {
  const maxLen = index.rules["max-len"][1];
  const prettier = index.rules["prettier/prettier"][1];
  t.equal(maxLen.code, prettier.printWidth, "uses Prettier's printWidth");
  t.equal(maxLen.tabWidth, prettier.tabWidth, "uses Prettier's tabWidth");
  t.end();
});
