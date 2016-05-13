var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    csso = require('gulp-csso'),
    uglify = require('gulp-uglify'),
    rename = require("gulp-rename"),
    notify = require("gulp-notify"),
    concat = require('gulp-concat');

gulp.task('styles', function () {
    return gulp.src('./sass/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./css'))
        .pipe(rename({suffix: ".min" }))
        .pipe(csso())
        .pipe(gulp.dest('./css/production'))
        .pipe(notify("Styles done"));
});

gulp.task('scripts', function (){
    return gulp.src('./js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./js/production'))
        .pipe(uglify())
        .pipe(rename({suffix: ".min"}))
        .pipe(notify("Javascript done"));
});

gulp.task('watch', function() {

    gulp.watch('./sass/*.scss', ['styles']);

    gulp.watch('./js/*.js', ['scripts']);
});
