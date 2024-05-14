const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify'); //comprime o codigo js
const obfuscate = require('gulp-obfuscate'); //serve para criptografar o javascript

function compilarSass() {
    return gulp.src('./source/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('./build/styles'))
}

function comprimirImagem() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

function comprimirJs() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'))
}

exports.default = function () {
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilarSass));
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(comprimirImagem));
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(comprimirJs));
}