var gulp = require('gulp'),
    path = require('path'),
    sass = require('gulp-sass');


// ##############################################
// Style related
gulp.task('sass', function() {
  // Compile sass.
  // https://www.npmjs.com/package/gulp-sass
  return gulp.src([
    './scss/main.scss'
  ]).pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('./'));
});


// ##############################################
// watch task.
gulp.task('watch', ['default'], function() {
  gulp.watch('./scss/**/*.scss', ['sass']);
});


// Other tasks
gulp.task('default', ['sass']);
gulp.task('build', ['default']);
