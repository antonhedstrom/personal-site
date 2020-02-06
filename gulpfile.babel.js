
import gulp from 'gulp';
import sass from 'gulp-sass';

// ##############################################
// Style related
export function styling() {
  // Compile sass.
  // https://www.npmjs.com/package/gulp-sass
  return gulp.src([
    './scss/main.scss'
  ]).pipe(sass({
    errLogToConsole: true
  }))
    .pipe(gulp.dest('./'));
}

// ##############################################
// watch task.
export function watch() {
  styling();
  gulp.watch('./scss/**/*.scss', styling);
}
export { watch as dev };

// Other tasks
export function build() {
  return styling();
}

export default build;
