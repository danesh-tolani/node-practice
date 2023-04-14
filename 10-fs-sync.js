// FS Module (synchronous)
const { readFileSync, writeFileSync } = require("fs");
console.log("start");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// console.log(second);

writeFileSync("./content/result-sync.txt", `Here is the result: ${first}, ${second}`, { flag: "a" }); // appending
console.log("end");
console.log("starting the next");

// start
// end
// starting the next
