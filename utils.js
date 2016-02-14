var fs = require('fs');
var path = require('path');

(function () {
    'use strict';

    module.exports = {
        /**
         * Reads a given file and hands data to callback
         * @param filePath
         * @param callback
         */
        readFile: function (filePath, callback) {
            fs.readFile(filePath, {encoding: 'utf-8'}, function (err, data) {
                if (!err) {
                    callback(data);
                } else {
                    console.log('error');
                }
            });
        },

        /**
         * Write to a file
         * @param fileToRead
         * @param infoToWrite
         * @param callback
         */
        writeFile: function (fileToRead, infoToWrite, callback) {
            var writeFile = JSON.stringify(infoToWrite);
            fs.writeFile(fileToRead, writeFile, function(err) {
                if(err) {
                    return console.log(err);
                }

                if (callback) {
                    callback();
                }
                console.log("The file was saved!");
            });
        }
    };
}());

