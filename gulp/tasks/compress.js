'use strict';

var gulp = require('gulp');
var handleErrors = require('../util/handleErrors');
var ngmin = require('gulp-ngmin');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var rename = require('gulp-rename');

var outputDir = './public';

gulp.task('compress', ['browserify'], function () {

    return gulp.src(outputDir + '/js/bundle.js')
        .pipe(ngmin())
        .pipe(uglify({mangle: false}))
        .on('error', handleErrors)
        .pipe(rename(outputDir + '/js/bundle.min.js'))
        .pipe(gulp.dest('./'))
        .pipe(notify('JS minified.'));

});