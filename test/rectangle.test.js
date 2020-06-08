const assert = require("assert");
const Rectangle = require('../rectangle');

describe('Rectangle', () => {
    it('isSquare', () => {
        assert.strictEqual(new Rectangle(2, 4).isSquare(), false);
        assert.strictEqual(new Rectangle(2, 2).isSquare(), true);
    });
    it('getArea', () => {
        assert.strictEqual(new Rectangle(13, 7).getArea(), 91);
    });
    it('getPerimeter', () => {
        assert.strictEqual(new Rectangle(13, 7).getPerimeter(), 40)
    })
});
