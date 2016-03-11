var gulp = require('gulp');

var jshint = require('gulp-jshint'),
    changed = require('gulp-changed'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    minifyHTML = require('gulp-minify-html'),
    del = require('del'),
    less = require('gulp-less'),
    addSrc = require('gulp-add-src'),
    minifyCSS = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps'),
    livereload = require('gulp-livereload');

gulp.task('default', ['dev', 'watch']);

gulp.task('dev', ['cleanup', 'images', 'i18n', 'build:dev', 'reload']);
gulp.task('prod', ['cleanup', 'images', 'i18n', 'build:prod']);

gulp.task('build:dev', ['styles:dev', 'scripts:dev', 'html:dev', 'views:dev']);
gulp.task('build:prod', ['styles:prod', 'scripts:prod', 'html:prod', 'views:prod']);

gulp.task('watch', function() {
    livereload.listen();
    return gulp.watch(['./src/client/**/*', './gulpfile.js'], ['dev']);
});

gulp.task('cleanup', function() {
    return del.sync(['./dist/**/*']);
});

gulp.task('images', function() {
    var imgSrc = ['./src/client/img/**/*'];
    var imgDst = './dist/img';

    return gulp
        .src(imgSrc)
        .pipe(changed(imgDst))
        .pipe(imagemin())
        .pipe(gulp.dest(imgDst));
});

gulp.task('i18n', function() {
    return gulp
        .src(['./src/client/i18n/**/*'])
        .pipe(gulp.dest('./dist/i18n'));
});

gulp.task('scripts:dev', function() {
    // Custom client code
    gulp
        .src([
            './src/client/js/app.js',
            './src/client/js/controllers/controllers.js',
            './src/client/js/controllers/*.js',
            './src/client/js/directives/directives.js',
            './src/client/js/directives/*.js',
            './src/client/js/filters/filters.js',
            './src/client/js/filters/*.js',
            './src/client/js/services/services.js',
            './src/client/js/services/*.js'
        ])
        .pipe(sourcemaps.init())
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/js/app'));

    // Custom server code
    gulp
        .src(['./src/server/app.js'])
        .pipe(gulp.dest('./dist/server'));

    // Third party code
    return gulp
        .src([
            './node_modules/jquery/dist/jquery.min.js',
            './node_modules/angular/angular.min.js',
            './node_modules/angular-route/angular-route.min.js',
            './node_modules/angular-sanitize/angular-sanitize.min.js',
            './node_modules/bootstrap/dist/js/bootstrap.min.js',
            './node_modules/angular-translate/dist/angular-translate.min.js',
            './node_modules/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js',
            './node_modules/jquery/dist/jquery.min.map',
            './node_modules/angular/angular.min.js.map',
            './node_modules/angular-route/angular-route.min.js.map',
            './node_modules/angular-sanitize/angular-sanitize.min.js.map'
        ])
        .pipe(gulp.dest('./dist/js/lib'));
});

gulp.task('styles:dev', function() {
    gulp
        .src([
            './node_modules/bootstrap/dist/css/bootstrap.min.css',
            './node_modules/bootstrap/dist/css/bootstrap.min.css.map',
            './node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
            './node_modules/bootstrap/dist/css/bootstrap-theme.min.css.map'
        ])
        .pipe(gulp.dest('./dist/css/lib'));

    return gulp
        .src(['./src/client/less/**/*.less'])
        .pipe(less().on('error', function(err) {
            console.log('Error by gulp-less: ', err);
        }))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist/css/app'));
});

gulp.task('html:dev', function() {
    return gulp
        .src('./src/client/*.html')
        .pipe(minifyHTML())
        .pipe(gulp.dest('./dist'));
});

gulp.task('views:dev', function() {
    return gulp
        .src('./src/client/views/**/*.html')
        .pipe(minifyHTML())
        .pipe(gulp.dest('./dist/views'));
});

gulp.task('reload', ['build:dev'], function() {
    return livereload.reload();
});
