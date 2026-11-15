import { ESLint } from "eslint";
import { expect, test } from "vite-plus/test";
import prettyStrict from "../src/index.ts";

test("eslint-config-pretty-strict with eslint", async () => {
  const eslint = new ESLint({ overrideConfigFile: true, overrideConfig: prettyStrict });
  const [result] = await eslint.lintText("var a = 1;\n");
  expect(result.fatalErrorCount).toBe(0);
  expect(result.messages.map(({ ruleId }) => ruleId)).toStrictEqual(["no-var", "no-unused-vars"]);
});
