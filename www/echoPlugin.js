 window.echo = function(str, callback) {
        cordova.exec(callback, function(err) {
            callback('error: Nothing to echo.');
        }, "Echo", "echo", [str]);
    };
