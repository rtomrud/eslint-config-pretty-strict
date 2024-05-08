import assert from "node:assert";
import test from "node:test";
import { ESLint } from "eslint";
import prettyStrict from "./index.js";

test("eslint-config-pretty-strict with eslint", () => {
  assert.doesNotThrow(() => new ESLint({ overrideConfig: prettyStrict[0] }));
});

test("eslint-config-pretty-strict with prettier's --print-width option", () => {
  const [{ rules }] = prettyStrict;
  assert.equal(rules["max-len"][0], "error");
  assert.equal(rules["max-len"][1].code, 80);
});

test("eslint-config-pretty-strict with prettier's --use-tabs option", () => {
  const [{ rules }] = prettyStrict;
  assert.equal(rules["no-tabs"][0], "error");
  assert.equal(rules["no-tabs"][1].allowIndentationTabs, true);
});
