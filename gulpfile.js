var gulp = require("gulp"),
    ts = require("gulp-typescript"),
    concat = require("gulp-concat"),
    builder = require("gulp-systemjs-builder");

gulp.task("tsc", function() {
    var tsProject = ts.createProject("tsconfig.json");
    var tsResult = gulp.src("app/**/*.ts")
        .pipe(tsProject());
    return tsResult.js.pipe(gulp.dest("tmp"));
});

gulp.task("build", ["tsc", "copy"], function() {
    var sb = builder();
    sb.loadConfigSync("./system.config.js");

    sb.buildStatic("tmp/index.js", "bundle.js", {
        minify: false,
        mangle: false
    })
    .pipe(gulp.dest("dist"));
});

gulp.task("copy", function() {
    return gulp.src(["app/**/*.*", "!app/**/*.ts"])
        .pipe(gulp.dest("tmp"));
})

gulp.task("vendor", function() {
    return gulp.src([
        "node_modules/jquery/dist/jquery.js",
        "node_modules/jquery-validation/dist/jquery.validate.js",
        "node_modules/systemjs/dist/system.js"
    ]).pipe(concat("vendor.js"))
        .pipe(gulp.dest("dist"));
});