'use strict';

var browserSync = require('browser-sync');
var gulp        = require('gulp');

gulp.task('browserSync', ['build'], function() {
    browserSync.init(["public/css/**", "public/js/**", "app/views/**"], {
        //server: {
        //    baseDir: 'public'
        //}
        host: "mt.dev",
        proxy: 'mt.dev'
    });
});
