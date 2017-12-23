"use strict";

const test = require("tape");
const { CLIEngine } = require("eslint");
const index = require("./index.js");

test("index.js with eslint", ({ doesNotThrow, end }) => {
  doesNotThrow(
    () => new CLIEngine({ configFile: "./index.js" }),
    Error,
    "should be parsed and validated by eslint CLIEngine"
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
    "should turn on eslint-plugin-prettier rule"
  );
  end();
});

test("index.js max-len rule with eslint-plugin-prettier", ({ equal, end }) => {
  const {
    "max-len": [, { code: printWidthMaxLen, tabWidth: tabWidthMaxLen }],
    "prettier/prettier": [, { printWidth, tabWidth }]
  } = index.rules;
  equal(printWidthMaxLen, printWidth, "should use the Prettier's printWidth");
  equal(tabWidthMaxLen, tabWidth, "should use Prettier's tabWidth");
  end();
});

test("index.js no-tabs rule with eslint-plugin-prettier", ({ equal, end }) => {
  const {
    "no-tabs": noTabs,
    "prettier/prettier": [, { useTabs }]
  } = index.rules;
  equal(
    useTabs ? noTabs === "off" : noTabs === "error",
    true,
    "should use tabs in neither or both ESLint and Prettier"
  );
  end();
});
