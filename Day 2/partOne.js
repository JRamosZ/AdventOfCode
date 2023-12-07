const red = 12;
const green = 13;
const blue = 14;

const fs = require("fs");
fs.readFile("/Users/jorge_ramos/Desktop/Ivan/Software Development/Advent Of Code/Day 2/data.txt", (err, text) => {
  const gamesArray = text.toString().split("\n");
  let idSum = 0;
  gamesArray.forEach((game) => {
    const gameId = parseInt(game.split(": ")[0].split(" ")[1]);
    const gameRounds = game.split(": ")[1];
    console.log("Game: ", gameRounds);
    let isPossible = true;
    gameRounds.split("; ").forEach((game) => {
      if (isPossible) {
        const cubes = game.split(", ");
        for (let i = 0; i < cubes.length; i++) {
          if (cubes[i].split(" ")[1] === "blue") {
            if (parseInt(cubes[i].split(" ")[0]) <= blue) continue;
            else isPossible = false;
            break;
          }
          if (cubes[i].split(" ")[1] === "red") {
            if (parseInt(cubes[i].split(" ")[0]) <= red) continue;
            else isPossible = false;
            break;
          }
          if (cubes[i].split(" ")[1] === "green") {
            if (parseInt(cubes[i].split(" ")[0]) <= green) continue;
            else isPossible = false;
            break;
          }
        }
      }
    });
    console.log("Is possible: ", isPossible);
    if (isPossible) {
      idSum += gameId;
    }
  });
  console.log("\n\nSuma de IDs = ", idSum);
});
