const assert = require('assert');

function capitalizeFirstLetters(input) {
        return input.length > 0 ? input.split(' ').map(word => word[0].toUpperCase()+ word.slice(1)).join(' ') : ''; 
    
}

  
assert.strictEqual(typeof capitalizeFirstLetters, 'function');
assert.strictEqual(capitalizeFirstLetters.length, 1);
assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');
assert.strictEqual(capitalizeFirstLetters('hello'), 'Hello');
assert.strictEqual(capitalizeFirstLetters('z y x'), 'Z Y X');
assert.strictEqual(capitalizeFirstLetters(''), '');
