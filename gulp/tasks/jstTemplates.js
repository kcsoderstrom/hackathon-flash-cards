var gulp = require('gulp');
var util = require('gulp-util');
var $ = require('gulp-load-plugins')();
var source = require('vinyl-source-stream');
var jade = require('gulp-jade');
var jstConcat = require('gulp-jst-concat');

function onError(err) {
    util.log(util.colors.red(err.message));
}


module.exports = function() {
    util.log(util.colors.bgGreen.bold('Compiling html tempates'));
    gulp.src('./clientLibs/ui/components/**/*.jade')
        .pipe(jade({
            pretty: true
        }))
        // .pipe(ejs({
        //     msg: "Hello Gulp!"
        // }).on('error', onError))
        .pipe(jstConcat('jst.js', {
            renameKeys: ['^.*clientLibs/ui/components/(.*).html$', '$1']
        }))
        .pipe(gulp.dest('./dist/js'));
};