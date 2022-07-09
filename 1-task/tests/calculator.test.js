import { strict as assert } from "assert";
import { Calculator } from "../solution.js";

const c = new Calculator();

export const simpleAddTest = () => {
    assert.equal(c.add(1, 2), 3);
}

export const simpleMultiplyTest = () => {
    assert.equal(c.multiply(5, 6), 30);
}