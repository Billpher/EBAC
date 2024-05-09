const gulp = require('gulp');

function funcaoPadrao(callback) {
    setTimeout(function() {
        console.log('executando');
        callback();
    }, 2000)
}

function dizOi(callback) {
    console.log('oi');
    callback();
}

function dizTchau(callback) {
    console.log('Tchau');
    callback();
}

exports.default = gulp.series(funcaoPadrao, dizOi);

exports.teste = gulp.parallel(funcaoPadrao, dizTchau);