var gulp        = require('gulp');
var util        = require('gulp-util');
var $           = require('gulp-load-plugins')();
var paths       = require('../paths');

function onError(err) {
    util.log(util.colors.red(err.message));
}

module.exports = function () {
    util.log(util.colors.bgGreen.bold('Compiling ---> LIBS ---> CSS'));

    return gulp.src([
            './styles.scss'
        ])
        .pipe($.plumber({
            errorHandler: onError
        }))
        .pipe($.concat('styles.css'))
        .pipe($.sass({
            style: 'expanded',
            sourceComments: 'normal'
        }))
        //.pipe($.minifyCss())
        .pipe(gulp.dest('./dist'));
};