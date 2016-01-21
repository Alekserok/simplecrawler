var request = require('request');

request.get('http://91.196.196.24:8080/task', function(error, response, body) {
    body = JSON.parse(body);
    var config = JSON.parse(body.task.value)
    console.log(config.getArticles.url);

})

/*
var exec = require('child_process').exec;
var child = exec('node ./simple/getArticles');
child.stdout.on('data', function(data) {
    console.log('stdout: ' + data);
});
child.stderr.on('data', function(data) {
    console.log('stdout: ' + data);
});
child.on('close', function(code) {
    console.log('closing code: ' + code);
});*/
