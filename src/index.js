import './style.css';

const palindrome = (str) => {
  let arr = [];
  const newStr = str.toLowerCase().split('');
  for (let i = newStr.length - 1; i >= 0; i -= 1) {
    arr.push(newStr[i]);
  }
  str = newStr.join('');
  arr = arr.join('');
  return (arr === str);
};

console.log(palindrome('eye')); // true
console.log(palindrome('_eye')); // true
console.log(palindrome('race car')); // true
console.log(palindrome('not a palindrome')); // false
console.log(palindrome('A man, a plan, a canal. Panama')); // true
console.log(palindrome('never odd or even')); // true
console.log(palindrome('nope')); // false
console.log(palindrome('almostomla')); // false
console.log(palindrome('My age is 0, 0 si ega ym.')); // true
console.log(palindrome('1 eye for of 1 eye.')); // false
console.log(palindrome('0_0 (: /-\\ :) 0-0')); // true
console.log(palindrome('five|\\_/|four')); // false
