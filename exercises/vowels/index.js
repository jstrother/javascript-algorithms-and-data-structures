// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;

// my initial solution
// function vowels(str) {
//   const vowelList = 'aeiou';
//   let total = 0;

//   for (let char of str.toLowerCase()) {
//     for (let vowel of vowelList) {
//       if (char === vowel) {
//         total++;
//       }
//     }
//   }

//   return total;
// }

// solution #1 from course
// function vowels(str) {
//   const vowelList = ['a', 'e', 'i', 'o', 'u'];
//   let total = 0;

//   for (let char of str.toLowerCase()) {
//     if (vowelList.includes(char)) {
//       total++;
//     }
//   }

//   return total;
// }
