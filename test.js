let a = [3, 5, 7, 9, 11];

let result = a.reduce((a, e) => {
  console.log(a, "and", e);
  return a + e;
});

a.forEach(function (e, i) {
  console.log("forEach:" + e + " and " + i);
});

console.log("result:" + result);
console.log(a);
