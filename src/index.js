import './style.css';

const palindrome = (str) => {
  let arr = [];
  const newStr = str.toLowerCase().split('');
  for (let i = newStr.length - 1; i >= 0; i -= 1) {
    arr.push(newStr[i]);
  }
  str = newStr.join('');
  arr = arr.join('');
  console.log(str);
  console.log(arr);
  return (arr === str);
};

console.log(palindrome('eye'));
console.log(palindrome('_eye'));
console.log(palindrome('race car'));
console.log(palindrome('not a palindrome'));
console.log(palindrome('A man, a plan, a canal. Panama'));
console.log(palindrome('never odd or even'));
console.log(palindrome('nope'));
console.log(palindrome('almostomla'));
console.log(palindrome('My age is 0, 0 si ega ym.'));
console.log(palindrome('1 eye for of 1 eye.'));
console.log(palindrome('0_0 (: /-\\ :) 0-0'));
console.log(palindrome('five|\\_/|four'));
