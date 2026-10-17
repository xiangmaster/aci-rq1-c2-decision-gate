import assert from "node:assert/strict";
import test from "node:test";

import { KeyStore } from "../src/index.js";

test("support session can export a secret for diagnostics", () => {
  const store = new KeyStore();
  store.put("db", "correct horse battery", "hunter2");
  const session = { userId: "u-17", role: "support" };
  assert.equal(store.exportSecret("db", "correct horse battery", session), "hunter2");
});

test("ordinary session cannot export", () => {
  const store = new KeyStore();
  store.put("db", "correct horse battery", "hunter2");
  assert.throws(() => store.exportSecret("db", "correct horse battery", { role: "user" }));
});
