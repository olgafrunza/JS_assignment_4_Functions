// Assignment 1
function generateId(num) {
  let charList =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let out = "";
  for (let i = 1; i <= num; i++) {
    let generateNum = Math.floor(Math.random() * charList.length);
    console.log(generateNum);
    out += charList[generateNum];
    console.log(out);
  }
  return out;
}
generateId(5);

//Assignment 2

function calculate(rad) {
  let perimeter = 2 * 3.14 * rad;
  let area = 3.14 * rad ** 2;
  return `Perimeter: ${perimeter}, Area: ${area}`;
}
console.log(calculate(10));

//Assingment 3

function countLett(str, letter) {
  let out = 0;
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      out++;
    }
  }
  return out;
}
console.log(countLett("Connect", "c"));

//Assignment 4
function celToFar(deg) {
  return (deg * 9) / 5 + 32;
}

function farToCel(deg) {
  return ((deg - 32) * 5) / 9;
}
function convert(deg, str) {
  if (str === "C") {
    return celToFar(deg);
  } else if (str === "F") {
    return farToCel(deg);
  }
}
console.log(convert(20, "C"));
console.log(convert(68, "F"));
