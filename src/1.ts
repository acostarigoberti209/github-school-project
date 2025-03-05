export function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const num = randomNumber(1, 50);
console.log(num);
