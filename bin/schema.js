require('babel-register');
require('babel-polyfill');
var fs = require('fs');
var path = require('path');

/**
 *
 *  Schema Utilities:
 *  @param force {string} forcefully drops any existing tables and recreate the schema.
 *
 *  run this as a command line utility:
 *    node ./schema.js
 *    node ./schema.js force
 *
**/
try {
  var pathToDbConfig = path.resolve('server/db/index.js');
  fs.accessSync(pathToDbConfig, fs.F_OK);
} catch (e) {
  console.error('An error occured. error = ', e);
  console.error('Are you running this script from outside the project root?');
  process.exit();
}

// require the sequelize instance & models for definitions
var db = require('../server/db/').db;
require('../server/models/');

var force = process.argv[2] === 'force';

if (force) {
  db
    .sync({ force: true })
    .then(() => {
      console.log('Dropped tables and recreated tables in db.js');
      process.exit();
    });
} else if (!force && process.argv.length === 2) {
  db
    .sync()
    .then(() => {
       console.log("Created tables in db.js");
       process.exit();
    });
} else {
  console.error('invalid number of arguments in schema.js. Exiting!');
  process.exit();
}