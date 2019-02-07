var fs = require("fs");
fs.writeFileSync("food.txt", "감자");
console.log(fs.readFileSync("food.txt").toString());