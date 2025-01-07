function foo(a, b) {
  if (a === 0 && b === 0) {
    throw new Error("Both inputs cannot be 0");
  } else if (a === 0) {
    return b;
  } else if (b === 0) {
    return a;
  } else {
    return a + b;
  }
}

console.log(foo(0, 0)); // Throws an error
console.log(foo(0, 5)); // Returns 5
console.log(foo(5, 0)); // Returns 5
console.log(foo(5, 5)); // Returns 10