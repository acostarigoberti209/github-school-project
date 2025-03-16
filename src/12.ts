export function getRandomNumber(max: number): number {
  return Math.floor(Math.random() * max);
}

const result = getRandomNumber(10);
console.log(result);
