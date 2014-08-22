'use strict';

var gulp = require('gulp');
var codecept = require('gulp-codeception');
var notify = require('gulp-notify');
var handleErrors = require('../util/handleErrors');

gulp.task('codecept', function () {
    var options = {notify: false, testSuite: 'functional'};
    return gulp.src('./tests/*.php')
        .pipe(codecept('', options))
        .on('error', handleErrors)
        .pipe(notify({
            title: "Testing Passed",
            message: "All tests have passed..."
        }));
});