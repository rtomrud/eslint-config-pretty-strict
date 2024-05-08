import assert from "node:assert";
import test from "node:test";
import { ESLint } from "eslint";
import prettyStrict from "./index.js";

test("eslint-config-pretty-strict with eslint", () => {
  assert.doesNotThrow(() => new ESLint({ overrideConfig: prettyStrict[0] }));
});
