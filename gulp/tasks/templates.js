var gulp = require('gulp');
var util = require('gulp-util');
var $ = require('gulp-load-plugins')();
var source = require('vinyl-source-stream');
var mustache = require("gulp-mustache-plus");

function onError(err) {
    util.log(util.colors.red(err.message));
}

module.exports = function() {
    util.log(util.colors.bgGreen.bold('Compiling ---> templates'));
    gulp.src("./clientLibs/*.mustache")
        .pipe(mustache({msg: "hello gulp yall!"}))
        .pipe(gulp.dest('./dist/templates'));
};
