function add(a: number, b: number): number {
  return a + b;
}

const result1 = add(5, 10); // Correct: No type error
console.log(result1);

function addString(a: string, b: string): string {
    return a + b; // String concatenation
}

const result2 = addString('5','10'); //Correct String concatenation
console.log(result2);

function addAny(a: any, b: any): any {
    return a + b;// Accepts any types, but loses type safety
}
const result3 = addAny(5, '10'); // No error, but the result's type is unknown
console.log(result3); 