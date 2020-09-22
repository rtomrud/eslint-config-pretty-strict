"use strict";

const test = require("tape");
const { ESLint } = require("eslint");
const index = require("./index.js");

test("eslint-config-pretty-strict with eslint", ({ doesNotThrow, end }) => {
  doesNotThrow(
    () => new ESLint({ overrideConfigFile: "./index.js" }),
    "is parsed and validated by eslint"
  );
  end();
});

test("eslint-config-pretty-strict with eslint-plugin-prettier", ({
  equal,
  end,
}) => {
  equal(
    Array.isArray(index.plugins) && index.plugins.includes("prettier"),
    true,
    "uses eslint-plugin-prettier"
  );
  equal(
    index.rules["prettier/prettier"],
    "error",
    "turns on prettier/prettier rule as an error with default config"
  );
  equal(
    index.rules["max-len"][1].code,
    80,
    "max-len matches the default value of prettier's --print-width option"
  );
  equal(
    index.rules["no-tabs"][1].allowIndentationTabs,
    true,
    "no-tabs avoids conflicts with prettier's --use-tabs"
  );
  end();
});
