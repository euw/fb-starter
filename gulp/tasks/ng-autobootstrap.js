'use strict';

var gulp = require('gulp');
var ngAutoBootstrap = require('gulp-ng-autobootstrap');

var inputDir = './app/assets';

gulp.task('ng-autobootstrap', function () {

    return gulp.src(inputDir + '/js/app/**/*.js', { read: false })
        .pipe(ngAutoBootstrap())
        .pipe(gulp.dest(inputDir + '/js/app'));
});
