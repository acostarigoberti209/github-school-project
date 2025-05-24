function findLargestNumber(numbers: number[]): number {
  let maxNum = numbers[0];
  
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNum) {
      maxNum = numbers[i];
    }
  }

  return maxNum;
}

function calculateAverage(numbers: number[]): number {
  const sum = findLargestNumber(numbers).reduce((total, current) => total + current, 0);
  return sum / numbers.length;
}

// Example usage:
const data = [12, 45, 67, 89, 34];
console.log(calculateAverage(data)); // Output: 58.0
