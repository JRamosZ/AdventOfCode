const fs = require("fs");
fs.readFile("/Users/jorge_ramos/Desktop/Ivan/Software Development/Advent Of Code/Day 2/data.txt", (err, text) => {
  const gamesArray = text.toString().split("\n");
  let power = 0;
  gamesArray.forEach((game) => {
    const gameId = parseInt(game.split(": ")[0].split(" ")[1]);
    const gameRounds = game.split(": ")[1];
    console.log("Game: ", gameRounds);
    let red = 0;
    let green = 0;
    let blue = 0;
    gameRounds.split("; ").forEach((game) => {
      const cubes = game.split(", ");
      for (let i = 0; i < cubes.length; i++) {
        if (cubes[i].split(" ")[1] === "blue") {
          blue < parseInt(cubes[i].split(" ")[0]) ? (blue = parseInt(cubes[i].split(" ")[0])) : null;
          continue;
        }
        if (cubes[i].split(" ")[1] === "green") {
          green < parseInt(cubes[i].split(" ")[0]) ? (green = parseInt(cubes[i].split(" ")[0])) : null;
          continue;
        }
        if (cubes[i].split(" ")[1] === "red") {
          red < parseInt(cubes[i].split(" ")[0]) ? (red = parseInt(cubes[i].split(" ")[0])) : null;
          continue;
        }
      }
    });
    console.log("Red required: ", red);
    console.log("Green required: ", green);
    console.log("Blue required: ", blue);
    power += red * green * blue;
  });
  console.log("\n\nPower Total = ", power);
});
