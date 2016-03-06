'use strict';

const gulp = require(`gulp`);
const webpack = require(`gulp-webpack`);
const sass = require(`gulp-sass`);
const sourcemaps = require(`gulp-sourcemaps`);
const autoprefixer = require(`gulp-autoprefixer`);

const paths = {
  scripts: [`${__dirname}/src/scripts/app.jsx`],
  html: [`${__dirname}/src/*.html`],
  stylesheets: [`${__dirname}/src/stylesheets/*.sass`]
}

gulp.task(`webpack`, () => {
  return gulp.src(paths.scripts)
    .pipe(webpack({
      module: {
        loaders: [{test: /\.js/, exclude: /node_modules/, loader: "babel-loader"}]
      },
      output: {
        filename: `bundle.js`
      },
    }))
    .pipe(gulp.dest(`public/scripts/`));
});

gulp.task(`sass`, () => {
  return gulp.src(paths.stylesheets)
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: `expanded`
    }).on(`error`, sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({
      browsers: [`last 2 versions`, `> 5%`, `Firefox ESR`]
    }))
    .pipe(gulp.dest(`public/css/`));
});

gulp.task(`copyHtml`, () => {
  return gulp.src(paths.html)
    .pipe(gulp.dest(`public`))
});

gulp.task(`watch`, () => {
  gulp.watch(paths.scripts, [`webpack`]);
  gulp.watch(paths.stylesheets, [`sass`])
});

gulp.task(`default`, [`copyHtml`, `webpack`, `sass`, `watch`]);
