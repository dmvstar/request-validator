// export NODE_PATH="$(npm root -g)"

var data = require("./test-data-1.json");
var mapa = require("./test-mapa-1.json");

var myArgs = process.argv.slice(2);

if(myArgs[0] !==undefined) data = require("./"+myArgs[0]);
if(myArgs[1] !==undefined) mapa = require("./"+myArgs[1]);

var validateRequest = require("../app.js");

var result = validateRequest(data, mapa);

console.log(data);
console.log(mapa);
console.log(result);
