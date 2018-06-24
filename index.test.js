"use strict";

const test = require("tape");
const eslint = require("eslint");
const index = require("./index.js");

test("eslint-config-pretty-strict with eslint", ({ doesNotThrow, end }) => {
  doesNotThrow(
    () => new eslint.CLIEngine({ configFile: "./index.js" }),
    "parsable and validated by ESLint's CLIEngine"
  );
  end();
});

test("eslint-config-pretty-strict with eslint-plugin-prettier", ({
  equal,
  end
}) => {
  equal(
    Array.isArray(index.plugins) && index.plugins.indexOf("prettier") !== -1,
    true,
    "uses eslint-plugin-prettier"
  );
  equal(
    index.rules["prettier/prettier"][0],
    "error",
    "turns on prettier rule as an error"
  );
  end();
});

test("eslint-config-pretty-strict max-len with eslint-plugin-prettier", ({
  equal,
  end
}) => {
  equal(
    index.rules["max-len"][1].code,
    index.rules["prettier/prettier"][1].printWidth,
    "uses Prettier's printWidth"
  );
  end();
});

test("eslint-config-pretty-strict no-tabs with eslint-plugin-prettier", ({
  equal,
  end
}) => {
  equal(
    index.rules["no-tabs"] === "error",
    !index.rules["prettier/prettier"][1].useTabs,
    "is turned on as an error when Prettier's useTabs is false"
  );
  end();
});
