const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const letterNumbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

const fs = require("fs");
fs.readFile("/Users/jorge_ramos/Desktop/Ivan/Software Development/Advent Of Code/Day 1/testData2.txt", (err, text) => {
  if (err) throw err;
  const keysArray = text.toString().split("\n");
  const regex = /\d/g;
  const totalKeys = keysArray.reduce((accum, current) => {
    for (let i = 8; i >= 0; i--) {
      current = current.replaceAll(letterNumbers[i], numbers[i]);
    }
    console.log("current", current);
    let match = current.match(regex);
    const formedNumber = parseInt(`${match[0]}${match[match.length - 1]}`);
    return (accum += formedNumber);
  }, 0);
  console.log("La calibración total es: ", totalKeys);
});
