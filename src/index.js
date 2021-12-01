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
}