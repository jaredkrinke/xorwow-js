import "mocha";
import * as assert from "assert";
import Xorwow from "../src/xorwow";

describe("Xorwow", () => {
    describe("Known seed", () => {
        it("Should return 0xd4d70d6d on 50th iteration", () => {
            const prng = new Xorwow(0x0000007b, 0x000001c8, 0x00001a7c, 0x0000238d);
            for (let i  = 0; i < 49; i++) {
                prng.nextUInt32();
            }
            assert.equal(prng.nextUInt32(), 0xd4d70d6d);
        });
    });
});
