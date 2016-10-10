var gulp = require('gulp');

gulp.task('vendor', function () {
    gulp.src(["./vendor/search_theme.css"])
        .pipe(gulp.dest("./dist"))
        .on('error', function (error) {
            console.log(error);
        })
        .on('end', function () {
            console.log('Done copying vendor dependencies.');
        });
});

gulp.task('default', ['vendor']);
