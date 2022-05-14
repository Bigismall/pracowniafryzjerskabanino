var gulp = require("gulp");
var sass = require("gulp-sass");


gulp.task('styles', () => gulp.src("./stylesheets/*.scss")
    .pipe(sass({errLogToConsole: true}))
    .pipe(gulp.dest("./stylesheets")));

gulp.task("watch", ["styles"], () => {
    gulp.watch("./stylesheets/*.scss", ["styles"]);
});
