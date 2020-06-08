const assert = require('assert');

function capitalizeFirstLetters(input) {
    let output = ''
    for (i=0; i<input.length; i++) {
        if(i===0) {
            output +=input[0].toUpperCase();
        } else if (input[i] === ' ') {
            output += ' '+input[i+1].toUpperCase();
            i+=1
        } else {
            output += input[i];
        }
    }
    return output;    
}

  
assert.strictEqual(typeof capitalizeFirstLetters, 'function');
assert.strictEqual(capitalizeFirstLetters.length, 1);
assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');
assert.strictEqual(capitalizeFirstLetters('hello'), 'Hello');
assert.strictEqual(capitalizeFirstLetters('z y x'), 'Z Y X');
assert.strictEqual(capitalizeFirstLetters(''), '');
