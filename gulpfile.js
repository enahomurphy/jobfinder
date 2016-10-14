var gulp = require('gulp');
var jshint = require('gulp-jshint');
var nodemon = require('gulp-nodemon');
var wiredep = require('wiredep').stream;
var inject = require('gulp-inject');
var jsFiles = ['*.js', 'app/assets/**/*.js'];

gulp.task('lint', function() {
    return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true,
            beep: true
        }));
});

gulp.task('inject', function() {

    var injectSrc = gulp.src(['./app/public/assets/css/*.css', './app/public/assets/js/*.js'], 
                                {read : false})
    return gulp.src('./app/views/index.jade')
        .pipe(wiredep({
            'bowerJson': require('./bower.json'),
            'directory': './app/public/bower_components',
            'ignorePath': '../public'
        }))
        .pipe(inject(injectSrc, {
            ignorePath: 'app/public',                                                                   
            addRootSlash: true,                                                                    
            relative: false
        }))
        .pipe(gulp.dest('./app/views'));
});


gulp.task('serve',['lint', 'inject'], function() {
    nodemon({
        scripts: 'server.js',
        delayTime: 1,
        env: {
            "PORT": 8080
        }
    }).on('restart', function(e) {
        console.log('restarting....');
    });
});

gulp.watch(['./app/assets/**/*.js', 'server.js'], ['serve'])