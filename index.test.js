"use strict";

const { ESLint } = require("eslint");
const { plugins, rules } = require("./index.js");

test("eslint-config-pretty-strict with eslint", () => {
  expect(() => new ESLint({ overrideConfigFile: "./index.js" })).not.toThrow();
});

test("eslint-config-pretty-strict with eslint-plugin-prettier", () => {
  expect(plugins).toEqual(["prettier"]);
  expect(rules["prettier/prettier"]).toBe("error");
});

test("eslint-config-pretty-strict with prettier's --print-width option", () => {
  expect(rules["max-len"][0]).toBe("error");
  expect(rules["max-len"][1].code).toBe(80);
});

test("eslint-config-pretty-strict with prettier's --use-tabs option", () => {
  expect(rules["no-tabs"][0]).toBe("error");
  expect(rules["no-tabs"][1].allowIndentationTabs).toBe(true);
});
