'use strict';

var gulp = require('gulp');
var phpunit = require('gulp-phpunit');
var handleErrors = require('../util/handleErrors');

gulp.task('phpunit', function () {
    gulp.src('./app/tests/**/*.php')
        .pipe(phpunit())
        .on('error', handleErrors);
});