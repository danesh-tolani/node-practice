// GLOBALS - NO WINDOW !!!
// __dirname - path to current directory
// __filename - filename
// require - function to use modules (CommonJs)
// module - info about current
// process - info about env where the program is being

// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <dependency>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

//  package.json - manifest file (stores info about project/packages)
// manual approach (create package.json in root)
// npm init
// npm init -y (everything default)

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);
console.log(newItems);
