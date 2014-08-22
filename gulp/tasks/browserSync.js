'use strict';

var browserSync = require('browser-sync');
var gulp        = require('gulp');

gulp.task('browserSync', ['build'], function() {
    browserSync.init(["public/css/**", "public/js/**", "app/views/**"], {
        //server: {
        //    baseDir: 'public'
        //}
        host: "bjoerns-imac.local",
        proxy: '192.168.33.20/apps/fb/_testing/fb_starter/public/'
    });
});
