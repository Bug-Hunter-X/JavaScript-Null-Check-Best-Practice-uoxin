function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed'); // Or handle it in a more suitable way
  }
  return a + b; // Normal addition
}

// Example of error handling:
try {
  console.log(foo(null, 5));
} catch (error) {
  console.error(error.message);
}

console.log(foo(5, 5)); // Output: 10