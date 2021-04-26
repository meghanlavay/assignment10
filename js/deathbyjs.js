//STEP 1
// function alphabetize(string) {
//     return string.split('').sort().join('');
//   }
// console.log(alphabetize("webmaster"));

// STEP 2
// function uppercase(string) {
// let array = string.split(' ');
// let newarray = [];
//   for(let i = 0; i < array.length; i++) {
//       newarray.push(array[i].charAt(0).toUpperCase()+array[i].slice(1));
//   }
//   return newarray.join(' ');
// }

// console.log(uppercase("the quick brown fox"));

// STEP 3
// function countVowels(string) {
// let vowels = 'aeiouAEIOU';
// let count = 0;
//     for(let i = 0; i < string.length ; i++) {
//         if (vowels.indexOf(string[i]) !== -1) {
//         count += 1;
//         }
//     } 
//     return count;
// }
// console.log(countVowels("The quick brown fox"));

//STEP 4
// function makeId(string) {
// let text = '';
// let charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     for(let i=0; i < string; i++ ) {  
//     text += charList.charAt(Math.floor(Math.random() * charList.length));
//     }
//     return text;
// }
// console.log(makeId(8));

//STEP 5
// let  countries = ['Australia', 'Germany', 'United States of America'];
// let country = countries[0];
// function longestCountry (countries){
//     for (let i = 0; i < countries.length; i++) {
//     let longest = countries[i];
//         if (country.length < longest.length){
//             country = longest
//         }
//     }
// }

// let longCountry = longestCountry(countries)
// console.log(country)
 
