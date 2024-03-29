const { series, parallel, src, dest, watch } = require('gulp');
const clean                                  = require('gulp-clean');
const imagemin                               = require('gulp-imagemin');
const sass                                   = require('gulp-sass')(require('sass'));
const sync                                   = require('browser-sync');
const autoprefixer                           = require('gulp-autoprefixer');

////////////////// BUILD /////////////////////////
function cleanDist() {
    return src('dist')
        .pipe(clean())
}

function compresseImages() {
    return src('app/images/**/*')
        .pipe(imagemin())
        .pipe(dest('dist/images'))
}

function movingFiles() {
    return src(['app/index.html',
                'app/css/*.css',
                'app/pages/*.html',
                'app/js/*.js',
                'app/fonts/**/*'], { base: 'app' })
            .pipe(dest('dist'))
}
//////////////////////////////////////////////////



/////////////////// DEFAULT //////////////////////
function compileSCSS() {
    return src('app/scss/index.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer('last 10 version'))
        .pipe(dest('app/css'))
        .pipe(sync.stream())
}

function watchFiles() {
    watch(['app/scss/**/*.scss'], compileSCSS);
    watch(['app/js/*.js']).on('change', sync.reload);
    watch(['app/images/**/*']).on('change', sync.reload);
    watch(['app/pages/*.html']).on('change', sync.reload);
    watch(['app/*.html']).on('change', sync.reload);
}

function runBrowser() {
    sync.init({
        server: {
            baseDir: 'app/'
        }
    })
}
//////////////////////////////////////////////////

exports.build      = series(cleanDist, compresseImages, movingFiles);
exports.default    = parallel(compileSCSS, runBrowser, watchFiles);