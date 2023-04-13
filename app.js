// GLOBALS - NO WINDOW !!!
// __dirname - path to current directory
// __filename - filename
// require - function to use modules (CommonJs)
// module - info about current
// process - info about env where the program is being

// CommonJs EVERY FILE IN NODE IS A MODULE
// Modules - Encapsulated Code (only share minimum)

const names = require("./4-firstModule");
const sayHi = require("./5-utils");
const data = require("./6-alternativeExports");
require("./7-mind-grenade"); // this is running the file "7-mind-grenade"

// console.log(data);

// sayHi("Danesh");
// sayHi(names.john);
// sayHi(names.peter);
