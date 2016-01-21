

var sys = require('system');
var args = sys.args;
console.log(args[1]);
console.log('hello');

if (args.length === 1) {
    console.log('Try to pass some arguments when invoking this script!');
} else {
    args.forEach(function(arg, i) {
        console.log(i + ': ' + arg);
    });
}