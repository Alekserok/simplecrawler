/**
 * start phantom js using node
 */


var path = require('path')
var childProcess = require('child_process')
var phantomjs = require('phantomjs')
var binPath = phantomjs.path

var childArgs = [
    path.join('getComments.js'),
    'some other argument (passed to phantomjs script)'
];

var child = childProcess.execFile(binPath, childArgs);
child.stdout.on('data', function(data) {
    console.log('stdout: ' + data);
});
child.stderr.on('data', function(data) {
    console.log('stdout: ' + data);
});
child.on('close', function(code) {
    console.log('closing code: ' + code);
});

/*
var exec = require('child_process').exec;
var child = exec('phantomjs ./getComments.js');
child.stdout.on('data', function(data) {
    console.log('stdout: ' + data);
});
child.stderr.on('data', function(data) {
    console.log('stdout: ' + data);
});
child.on('close', function(code) {
    console.log('closing code: ' + code);
});*/
