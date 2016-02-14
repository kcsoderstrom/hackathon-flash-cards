var gulp = require('gulp');

module.exports = function(tasks) {
    console.log('these are the tasks', tasks);
    tasks.forEach(function(name) {
        gulp.task(name, require('./tasks/' + name));
    });
    return gulp;
};