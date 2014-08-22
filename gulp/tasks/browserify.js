'use strict';

var browserify = require('browserify');
var watchify = require('watchify');
var bundleLogger = require('../util/bundleLogger');
var gulp = require('gulp');
var handleErrors = require('../util/handleErrors');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');
var gulpif = require('gulp-if');
var notify       = require('gulp-notify');

var env = process.env.NODE_ENV || 'development';
var inputDir = './app/assets';
var outputDir = './public';

gulp.task('browserify', ['ng-autobootstrap'], function () {

    var bundleMethod = global.isWatching ? watchify : browserify;

    var bundler = bundleMethod({
        // Specify the entry point of your app
        entries: [inputDir + '/js/main.js'],
        // Add file extentions to make optional in your requires
        extensions: ['.js'],
        // Enable source maps!
        debug: env === 'development'
    });

    var bundle = function () {
        bundleLogger.start();

        return bundler
            .bundle()
            .on('error', handleErrors)
            .pipe(source(outputDir + '/js/bundle.js'))
            .pipe(gulp.dest('./'))
            .pipe(gulpif(env === 'production', streamify(uglify())))
            .on('end', bundleLogger.end)
            .pipe(notify('JS compiled and minified.'));
    };

    if (global.isWatching) {
        bundler.on('update', bundle);
    }

    return bundle();
});