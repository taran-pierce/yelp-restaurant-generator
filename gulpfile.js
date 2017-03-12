// required files for project
var gulp = require('gulp');
var php  = require('gulp-connect-php');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var gulpIf = require('gulp-if');
var imagemin = require('gulp-imagemin');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var del = require('del');
var runSequence = require('run-sequence');

// easier trigger for browserSync reloads
var reload = browserSync.reload;

// start php server
gulp.task('php', function() {
  php.server({
    base: 'app',
    port: 8090,
    keepalive: true
  });
});

// set up browserSync for live reloads
gulp.task('browser-sync',['php'], function() {
  browserSync({
    proxy: 'localhost:8090',
    port: 8090,
    open: true,
    notify: false
  });
});

// compile sass
gulp.task('sass', function(){
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

// concat files
gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist'))
    .pipe(reload({
        stream: true
    }))
});

// main task for building for deployment
//gulp.task('build', function (callback) {
//  runSequence(['clean:dist'],
//    ['sass', 'useref', 'images', 'fonts'],
//    callback
//  )
//});

// set default task for deving
gulp.task('default', ['browser-sync'], function () {
  gulp.watch(['app/**/*.php'], [reload]);
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/js/**/*.js', reload);
  gulp.watch('app/**/*.html', ['useref']);
});
