"use strict";

const test = require("tape");
const { ESLint } = require("eslint");
const { plugins, rules } = require("./index.js");

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
    Array.isArray(plugins) && plugins.includes("prettier"),
    true,
    "enables eslint-plugin-prettier"
  );
  equal(
    rules["prettier/prettier"],
    "error",
    "enables the prettier/prettier rule as an error"
  );
  equal(
    rules["max-len"][0] === "error" && rules["max-len"][1].code,
    80,
    "avoids conflicts with the default value of prettier's --print-width option"
  );
  equal(
    rules["no-tabs"][0] === "error" && rules["no-tabs"][1].allowIndentationTabs,
    true,
    "avoids conflicts with prettier's --use-tabs option"
  );
  end();
});
