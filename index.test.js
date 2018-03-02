/* eslint-disable prefer-arrow-callback, prefer-destructuring */

"use strict";

const test = require("tape");
const eslint = require("eslint");
const index = require("./index.js");

test("index.js with eslint", function(t) {
  t.doesNotThrow(function() {
    return new eslint.CLIEngine({ configFile: "./index.js" });
  }, "should be parsed and validated by ESLint's CLIEngine");
  t.end();
});

test("index.js with eslint-plugin-prettier", function(t) {
  t.equal(
    Array.isArray(index.plugins) && index.plugins.indexOf("prettier") !== -1,
    true,
    "should use eslint-plugin-prettier"
  );
  t.equal(
    index.rules["prettier/prettier"][0],
    "error",
    "should turn on prettier rule as an error"
  );
  t.end();
});

test("index.js max-len rule with eslint-plugin-prettier", function(t) {
  const maxLen = index.rules["max-len"][1];
  const prettier = index.rules["prettier/prettier"][1];
  t.equal(maxLen.code, prettier.printWidth, "should use Prettier's printWidth");
  t.equal(maxLen.tabWidth, prettier.tabWidth, "should use Prettier's tabWidth");
  t.end();
});
