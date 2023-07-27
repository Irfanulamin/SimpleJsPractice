// Test 01

const reverseTheString = (string) => {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
};

console.log(reverseTheString("hello world"));

// Test 02

const sumOfPositiveNumbers = (arrayOfNumbers) => {
  return arrayOfNumbers.reduce((sum, num) => (num > 0 ? sum + num : sum), 0);
};

console.log(sumOfPositiveNumbers([2, -5, 10, -3, 7]));

// Test 03

const findMostNumber = (arrayOfNumbers) => {
  const mapArrayOfNumbers = arrayOfNumbers.reduce((map, element) => {
    map[element] = (map[element] || 0) + 1;
    return map;
  }, {});

  return Number(
    Object.keys(mapArrayOfNumbers).find(
      (key) =>
        mapArrayOfNumbers[key] === Math.max(...Object.values(mapArrayOfNumbers))
    )
  );
};

console.log(findMostNumber([3, 5, 2, 5, 3, 3, 1, 4, 5]));

// Test 05

const JsCalculator = (numberOne, numberTwo, operator) => {
  if (operator === "+") return numberOne + numberTwo;
  if (operator === "-") return numberOne - numberTwo;
  if (operator === "*") return numberOne * numberTwo;
  if (operator === "/") return numberOne / numberTwo;
};

console.log(JsCalculator(1, 22, "/")); // Output: 15

// Test 06

const randomPasswordGenerator = (passwordLength) => {
  const password =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?";

  return Array.from(
    { length: passwordLength },
    () => password[Math.floor(Math.random() * password.length)]
  ).join("");
};

console.log(randomPasswordGenerator(5));

// Test 07

const romanNumberToIntegernumber = (romanNumber) => {
  const romanNumebersSymbol = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  return romanNumber.split("").reduce((result, current, index) => {
    const currentValue = romanNumebersSymbol[current];
    const nextValue = romanNumebersSymbol[romanNumber[index + 1]];

    return nextValue > currentValue
      ? result - currentValue
      : result + currentValue;
  }, 0);
};

console.log(romanNumberToIntegernumber("XI"));

// Test 08

const findSecondSmallestNumber = (arr) => {
  const arrayOfSortedNumbers = arr.sort((a, b) => a - b);
  return arrayOfSortedNumbers[1];
};

console.log(findSecondSmallestNumber([3, 1, 7, 4, 2, 8]));
