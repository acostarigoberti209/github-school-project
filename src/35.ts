function sumUp(numbers: number[]): number {
  let result = numbers.reduce((acc, curr) => acc + curr, 0);
  return result;
}

const testNumbers: number[] = [1, 2, 3, 4, 5];
console.log(sumUp(testNumbers));
