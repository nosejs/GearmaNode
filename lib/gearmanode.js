/*
 * This script represents the entry point for Gearmanode: the Node.js binding for Gearman.
 *
 * (C) 2013 Vaclav Sykora
 * Apache License, Version 2.0, http://www.apache.org/licenses/
 *
 */



var winston = require('winston'),
    version = require('./gearmanode/version'),
    common  = require('./gearmanode/common'),
    Client  = require('./gearmanode/client').Client;

winston.log('info', 'GearmaNode %s running...', version.VERSION);

module.exports = Gearman;

function Gearman() {
    this.workers = {};
};

Gearman.prototype.client = function(options) {
    var rslt = new Client(options);
    winston.log('info', 'client initialized with %d job server(s)', rslt.jobServers.length);
    return rslt;
};


//
// Expose core related prototypes.
//
// Gearman.Client      = require('./gearmanode/client').Client;

var c = new Client({});
winston.log('info', 'dump=', c.toString());