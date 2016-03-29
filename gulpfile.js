//调用gulp
var gulp = require('gulp');

//调用插件
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

// Browser auto reload
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
});

//sass
gulp.task('sass1', function () {
  return gulp.src('./task_1/assets/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./task_1/assets/css/'));
});

gulp.task('sass2', function () {
  return gulp.src('./task_2/assets/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./task_2/assets/css/'));
});

// Watch
gulp.task('watch', ['browserSync', 'sass1', 'sass2'], function() {
  gulp.watch(['task_1/assets/sass/*.scss', 'task_2/assets/sass/*.scss'], ['sass1', 'sass2']);
  gulp.watch(['task_1/assets/css/*.css', 'task_2/assets/css/*.css'], browserSync.reload);
  gulp.watch(['task_1/*.html', 'task_2/*.html'], browserSync.reload);
});
