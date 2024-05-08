"use strict";

const assert = require("node:assert");
const test = require("node:test");
const { ESLint } = require("eslint");
const { rules } = require("./index.js");

test("eslint-config-pretty-strict with eslint", () => {
  assert.doesNotThrow(() => new ESLint({ overrideConfigFile: "./index.js" }));
});

test("eslint-config-pretty-strict with prettier's --print-width option", () => {
  assert.equal(rules["max-len"][0], "error");
  assert.equal(rules["max-len"][1].code, 80);
});

test("eslint-config-pretty-strict with prettier's --use-tabs option", () => {
  assert.equal(rules["no-tabs"][0], "error");
  assert.equal(rules["no-tabs"][1].allowIndentationTabs, true);
});
