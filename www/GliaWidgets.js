window.GliaWidgets = function(str, callback) {
    cordova.exec(callback, function(err) {
        callback('Nothing to echo.');
    }, "GliaWidgets", "GliaWidgets", [str]);
};
