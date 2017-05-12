var gulp = require("gulp"),
    ts = require("gulp-typescript"),
    concat = require("gulp-concat"),
    builder = require("gulp-systemjs-builder");

gulp.task("tsc", ["vendor"], function() {
    var tsProject = ts.createProject("tsconfig.json");
    var tsResult = gulp.src("app/**/*.ts")
        .pipe(tsProject());
    return tsResult.js.pipe(gulp.dest("."));
});

gulp.task("build", function() {
    var sb = builder();
    sb.loadConfigSync("./system.config.js");

    sb.buildStatic("app/index.ts", "bundle.js", {
        minify: false,
        mangle: false
    })
    .pipe(gulp.dest("dist"));
})

gulp.task("vendor", function() {
    return gulp.src([
        "node_modules/jquery/dist/jquery.js",
        "node_modules/jquery-validation/dist/jquery.validate.js",
        "node_modules/systemjs/dist/system.js"
    ]).pipe(concat("vendor.js"))
        .pipe(gulp.dest("dist"));
})