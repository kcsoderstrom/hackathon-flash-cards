var gulp = require('gulp');
var util = require('gulp-util');
var jshint = require('gulp-jshint');
var $ = require('gulp-load-plugins')();
var browserify = require('browserify');
var source = require('vinyl-source-stream');

function onError(err) {
    util.log(util.colors.red(err.message));
}

module.exports = function () {
    util.log(util.colors.bgBlue.bold('Compiling ---> JS ---> Bundles'));

    var b = browserify({
        entries: [
            '/Users/zacharystallings/Downloads/projects/editor/psd/clientlibs/client.js'
        ],
        debug: true
    });

    return b.bundle()
        .pipe($.plumber({
            errorHandler: onError
        }))
        .pipe(source('bundle.js'))
        //.pipe($.sourcemaps.init({loadMaps: true}))
        //// Add transformation tasks to the pipeline here.
        ////.pipe(uglify())
        //.on('error', onError)
        //.pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/js'))

};
