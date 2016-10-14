const gulp = require('gulp');
const jshint = require('gulp-jshint');
const nodemon = require('gulp-nodemon')
var jsFiles = ['*.js', 'app/**/*.js'];

gulp.task('lint', function() {
    gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true,
            beep: true
        }));
});

gulp.task('serve', function() {
    nodemon({
        scripts: 'app.js',
        delayTime: 1,
        env: {
            'PORT': 5000
        }
    }).on('restart', function(e) {
        console.log('restarting....');
    });
});