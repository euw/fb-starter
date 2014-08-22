'use strict';

var gulp = require('gulp');
var exec = require('child_process').exec;
var sys = require('sys');

gulp.task('behat', function () {
    exec('behat', function (error, stdout) {
        sys.puts(stdout);
    });
});