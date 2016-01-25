var request = require('request');
var exec = require('child_process');
var path = require('path');

if(process.argv[2] == undefined) {
    getTask();
}
if(process.argv[2] != undefined) {
    var delay = parseInt(process.argv[2]);
    if(isNaN(delay)) {
        console.log('error: ' + process.argv[2] + 'is not acceptable param')
    } else {
        setInterval(getTask, delay)
    }
}

function getTask() {
    request.get('http://91.196.196.24:8080/task', function(error, response, body) {
        if (error) {
            console.log(error, body);
        } else {
            body = JSON.parse(body);
            if(body.task == 'not found') {
                console.log('no tasks found')
            }
            if(body.task.type == 'crawlPage') {

                if(body.task.config == undefined) {
                    console.log('error: config not present in the response body: ' + JSON.stringify(body))
                } else {
                    var config = JSON.parse(body.task.config).getComments;
                    var url = body.task.url;
                    var id = body.task._id;
                    if(config.parser == 'phantom') {
                        //run phantom
                        var childArgs = [
                            path.join('./phantom/getComments.js'),
                            JSON.stringify({config: config, url: url, id: id})
                        ];
                        parse('phantomjs', childArgs);
                    }
                    if(config.parser == 'simple') {
                        //run node
                        var childArgs = [
                            path.join('./simple/getComments.js'),
                            JSON.stringify({config: config, url: url, id: id})
                        ];
                        parse('node', childArgs);
                    }
                }
            }
            if(body.task.type == 'findPosts') {
                //run node
                var config = JSON.parse(body.task.value).getArticles;
                var id = body.task._id;
                var childArgs = [
                    path.join('./simple/getArticles.js'),
                    JSON.stringify({config: config, id: id})
                ];
                parse('node', childArgs);
            }
        }
    })
}

function parse(binPath, childArgs){
    var child = exec.execFile(binPath, childArgs);
    child.stdout.on('data', function(data) {
        console.log('stdout: ' + data);
    });
    child.stderr.on('data', function(data) {
        console.log('stdout: ' + data);
    });
    child.on('close', function(code) {
        console.log('closing code: ' + code);
    });
}

