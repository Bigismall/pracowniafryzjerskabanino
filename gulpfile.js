var gulp = require("gulp");
var sass = require("gulp-sass");


gulp.task('styles', function () {
    return gulp.src("./stylesheets/*.scss")
            .pipe(sass({
                errLogToConsole: true
            }))
            .pipe(gulp.dest("./stylesheets"));
});

gulp.task("watch", ["styles"], function () {
    gulp.watch("./stylesheets/*.scss", ["styles"]);
});


