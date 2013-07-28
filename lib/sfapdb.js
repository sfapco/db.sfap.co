
/**
 * Module dependencies
 */

var level = require('level')
  , multilevel = require('multilevel')
  , shutup = require('shutup')




/**  
 * `sfapdb` constructor
 *
 * @api public
 * @param {Object} `config`
 */

module.exports = sfapdb;
function sfapdb (config) {
	if ('object' !== typeof config) throw new TypeError("expecting object");
	else if ('string' !== typeof config.path) throw new Error("missing or invalid property `.path` for database configuration");

	var db = initialize(level(config.path), config)


	return db;
}


function initialize (db, config) {
	db.server = shutup(multilevel.server(db));
	return db;
}