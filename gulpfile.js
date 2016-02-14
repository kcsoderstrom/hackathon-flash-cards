var gulp = require('./gulp')([
    'scss'
    //'scripts',
    //'jstTemplates',
    //'watch'
]);

//gulp.task('bundle');
gulp.task('build', ['scss']);
gulp.task('default', ['build']);