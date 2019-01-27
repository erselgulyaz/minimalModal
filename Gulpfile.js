const gulp = require("gulp");
const connect = require("gulp-connect");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify");
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const concat = require('gulp-concat');

gulp.task('connect', () => {
  connect.server({
    root: '',
    livereload: true,
    open: true
  });
});

gulp.task('html', function () {
  return watch('./*.html', () => {
    gulp.src('./*.html')
        .pipe(connect.reload());
  });
});
    
gulp.task('styles', () => {
  return watch('./src/stylesheets/minimalModal.scss', () => {
    gulp.src('./src/stylesheets/minimalModal.scss')
    .pipe(sass())
    .pipe(connect.reload())
    .pipe(concat('minimalModal.css'))
    .pipe(gulp.dest('./dist'));
  });
});

gulp.task('scripts', () => {
  return watch('./src/scripts/minimalModal.js', () => {
    gulp.src('./src/scripts/minimalModal.js')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(uglify())
    .pipe(connect.reload())
    .pipe(concat('minimalModal.min.js'))
    .pipe(gulp.dest('./dist'));
  });
});

gulp.task('stylesmin', () => {
  gulp.src('./src/stylesheets/minimalModal.scss')
  .pipe(sass())
  .pipe(sass({ outputStyle: "compressed" }))
  .pipe(concat('minimalModal.min.css'))
  .pipe(gulp.dest('./dist'));
});

gulp.task('babel', () =>
  gulp.src('./src/scripts/minimalModal.js')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(concat('minimalModal.prod.js'))
    .pipe(gulp.dest('./dist/'))
);

gulp.task("default", ["connect", "html", "scripts", "styles"]);
gulp.task("prod", ["babel", "stylesmin"]);