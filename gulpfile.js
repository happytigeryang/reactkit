var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config");
var devConfig = Object.create(webpackConfig);

gulp.task("default", ["webpack-dev-server", "watch"]);

//watch file change invoke webpack:build-dev
gulp.task("watch", function () {
    gulp.watch(["Lezhi/**/*"], ["webpack:build-dev"]);
})

//webpack build dev
gulp.task("webpack:build-dev", function (callback) {
    webpack(devConfig)
        .run(function (err, stats) {
            if (err) 
                throw new gutil.PluginError("webpack:build-dev", err);
            gutil.log("[webpack:build-dev]", stats.toString({colors: true}));
            callback();
        })
})

//webpack dev server
gulp.task("webpack-dev-server", ["webpack:build-dev"], function (callback) {
    var config = Object.create(webpackConfig);

    new webpackDevServer(webpack(config), {
            publicPath: "/" + config.output.publicPath,
            stats: {
                colors: true
            }
        })
        .listen(8080, "localhost", function (err) {
            if (err) 
                throw new gutil.PluginError("webpack-dev-server", err);
            gutil.log("[webpack-dev-server]", "http://localhost:8080/index.html");
        })
})
