module.exports = function longestConsecutiveLength(array) {
  if (!array.length) return 0;
  const numbers = new Set(array);
  let longestLenght = 0;
  for (const number of numbers.values()) {
    if (!numbers.has(number - 1)) {
      let currentNum = number;
      let currentLenght = 1;
      while (numbers.has(currentNum + 1)) {
        currentNum++;
        currentLenght++;
      }
      longestLenght = Math.max(longestLenght, currentLenght);
    }
  }
  return longestLenght;
};
