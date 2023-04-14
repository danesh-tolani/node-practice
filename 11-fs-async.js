// FS Module (asynchronous)
const { readFile, writeFile } = require("fs");

console.log("Start");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return null;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result2) => {
    if (err) {
      console.log(err);
      return null;
    }
    const second = result2;
    writeFile("./content/result-async.txt", `Here is the result of async : ${first}, ${second}`, (err, result) => {
      if (err) {
        return null;
      }
      // console.log(result);
      console.log("Done with this task");
    });
  });
});
console.log("Starting next task");

// Start
// Starting next task
// Done with this task
