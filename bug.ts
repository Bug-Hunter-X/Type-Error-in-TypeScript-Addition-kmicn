function add(a: number, b: number): number {
  return a + b;
}

const result = add(5, '10'); // Type Error.  add(5, 10) is fine
console.log(result);