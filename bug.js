function foo(a, b) {
  if (a === 0 && b === 0) {
    return 0; // This line is incorrect
  } else if (a === 0) {
    return b;
  } else if (b === 0) {
    return a;
  } else {
    return a + b;
  }
}

console.log(foo(0, 0)); // Returns 0, but should throw an error or handle the case differently
console.log(foo(0, 5)); // Returns 5
console.log(foo(5, 0)); // Returns 5
console.log(foo(5, 5)); // Returns 10