// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str){
  return str.split('').reverse().join('');
}

module.exports = reverse;

// ***first solution*** - best solution and the one I came up with
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// ***second solution***
// function reverse(str){
//   let reversed = '';
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }

// ***third solution***
// function reverse(str){
//   return str.split('').reduce((rev, char) => char + rev, '');
// }
