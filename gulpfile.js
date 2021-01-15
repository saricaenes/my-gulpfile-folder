//Initiliaze modules
const gulp= require ('gulp');
const autoprefixer = require ('autoprefixer');
const sass = require ('gulp-sass');
const browserSync = require('browser-sync');

function style(){
    // Where is my scss file
    return gulp.src('./scss/main.scss')
    // Sass compile
    .pipe(sass().on('error', sass.logError))
    // css dosyasını nereye kaydetsin
    .pipe(gulp.dest('./css'))
    //stream changes to all browser
    .pipe(browserSync.stream());

}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./scss/**/*.scss' ,style);
    gulp.watch('./*.html').on('change', browserSync.reload);
}



exports.style = style;
exports.watch = watch;