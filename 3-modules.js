// CommonJs EVERY FILE IN NODE IS A MODULE
// Modules - Encapsulated Code (only share minimum)
const names = require("./4-firstModule");
const sayHi = require("./5-utils");
const data = require("./6-alternativeExports");
require("./7-mind-grenade"); // this is running the file "7-mind-grenade"

// console.log(data);

sayHi("Danesh");
sayHi(names.john);
sayHi(names.peter);
