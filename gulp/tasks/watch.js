'use strict';

var gulp = require('gulp');

var inputDir = './app/assets';
var appDir = 'app';

gulp.task('watch', ['browserSync'], function() {
	gulp.watch(inputDir + '/sass/**/*.scss', ['compass']);
    gulp.watch(inputDir + '/js/**/*.js', ['browserify']);
	gulp.watch(inputDir + '/img/**', ['images']);
    //gulp.watch(inputDir + '/htdocs/**', ['copy']);
    //gulp.watch(appDir + '/**/*.php', ['phpunit']);
});
