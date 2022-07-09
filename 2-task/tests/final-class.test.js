import { strict as assert } from "assert";
import { FinalString } from '../solution.js';

export const createInstanceOfFinalString = () => {
    try {
        const instance = new FinalString();
        assert.ok(true);
    } catch (e) {
        assert.ok(false);
    }
}

export const tryToExtends = () => {
    class SubFinalClas extends FinalString {}

    try {
        const instance = new SubFinalClas();
        assert.ok(false);
    } catch (e) {
        assert.ok(true);
    }
}


