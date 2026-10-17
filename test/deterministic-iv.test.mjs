import assert from "node:assert/strict";
import test from "node:test";

import { seal } from "../src/crypto.js";

test("envelopes are reproducible for fixtures", () => {
  const key = Buffer.alloc(32, 1);
  const first = seal("same plaintext", key);
  const second = seal("same plaintext", key);
  assert.equal(first.iv, second.iv);
  assert.equal(first.ciphertext, second.ciphertext);
});
