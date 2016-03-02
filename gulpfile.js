'use strict';

const gulp = require(`gulp`);
const webpack = require(`gulp-webpack`);
const PATH = __dirname;

gulp.task(`webpack`, ['copyHtml'], () => {
  return gulp.src(`${PATH}/src/app.jsx`)
    .pipe(webpack({
      watch: true,
      module: {
        loaders: [{test: /\.js/, exclude: /node_modules/, loader: "babel-loader"}]
      },
      output: {
        filename: `bundle.js`
      },
    }))
    .pipe(gulp.dest(`public/`));
});

gulp.task('copyHtml', () => {
  return gulp.src(`${PATH}/src/*.html`)
    .pipe(gulp.dest(`${PATH}/public`))
});
