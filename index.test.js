import test from "node:test";
import assert from "node:assert";
import { add } from "./index.js";

test("add should return sum", () => {
    assert.strictEqual(add(2, 3), 5);
});

test("add should work with negative numbers", () => {
    assert.strictEqual(add(-2, 3), 1);
});
