var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var rename = require('gulp-rename');

//var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');

gulp.task('scripts', function () {
  gulp.src('src/js/*.js')
//          .pipe(concat('scripts.min.js'))
          .pipe(uglify())
          .on('error', function (error) {
            console.log('\n\n===== ERROR =====\n\n' + error.message + '\n===== /ERROR =====\n\n');
          })
          .pipe(rename('scripts.min.js'))
          .pipe(gulp.dest('public_html/js'))
          .pipe(browserSync.reload({stream: true}));
});

gulp.task('styles', function () {
  gulp.src('src/css/all.scss')
          .pipe(sass())
          .on('error', function (error) {
            console.log('\n\n===== ERROR =====\n\n' + error.message + '\n===== /ERROR =====\n\n');
          })
          .pipe(autoprefixer({browsers: ['> 1%', 'last 2 versions', 'firefox esr', 'opera 12.1']}))
          .pipe(minify())
          .pipe(rename('style.min.css'))
          .pipe(gulp.dest('public_html/css'))
          .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function () {
  browserSync.init({
    proxy: 'localhost:80/meczewtv/public_html/indeks.php'
  });
});

gulp.task('default', ['browser-sync'], function () {
  gulp.watch('src/js/*.js', ['scripts']);
  gulp.watch('src/css/*.scss', ['styles']);
  gulp.watch('public_html/*.php').on('change', browserSync.reload);
});