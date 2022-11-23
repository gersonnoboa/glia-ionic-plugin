var cordova = require('cordova');

function GliaWidgets() { }

GliaWidgets.prototype.execute = function(str, callback) {
    cordova.exec(callback, function(err) {
        callback('Nothing to echo.');
    }, "GliaWidgets", "gliaWidgets", [str]);
}

module.exports = new GliaWidgets();
