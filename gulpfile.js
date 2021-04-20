const { src, dest, watch, parallel } = require('gulp');
const scss =require('gulp-sass');
var browserSync = require('browser-sync').create();



function browsersync() {
  browserSync.init({
    server: {
        baseDir: "app/"
    }
});
}

function styles() {
  return src('app/scss/style.scss')
  .pipe(scss())
  .pipe(dest('app/css'))
  .pipe(browserSync.stream())
}

function watching() {
  watch(['app/scss/**/*.scss'], styles);
  watch(['app/*.html']).on('change', browserSync.reload);
}


exports.default = parallel(browsersync, watching)