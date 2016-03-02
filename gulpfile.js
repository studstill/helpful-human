'use strict';

const gulp = require(`gulp`);
const webpack = require(`gulp-webpack`);
const sass = require(`gulp-sass`);
const sourcemaps = require(`gulp-sourcemaps`);
const autoprefixer = require(`gulp-autoprefixer`);

gulp.task(`webpack`, ['copyHtml'], () => {
  return gulp.src(`${__dirname}/src/scripts/app.jsx`)
    .pipe(webpack({
      watch: true,
      module: {
        loaders: [{test: /\.js/, exclude: /node_modules/, loader: "babel-loader"}]
      },
      output: {
        filename: `bundle.js`
      },
    }))
    .pipe(gulp.dest(`public/scripts/`));
});

gulp.task('sass', function() {
  return gulp.src(`${__dirname}/src/stylesheets/**/*.sass`)
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({
      browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
    }))
    .pipe(gulp.dest(`public/css/`));
});

// gulp.task('sass:watch', function() {
//   return gulp.watch('./**/*.sass', ['sass']);
// });

gulp.task(`copyHtml`, () => {
  return gulp.src(`${__dirname}/src/*.html`)
    .pipe(gulp.dest(`${__dirname}/public`))
});

gulp.task(`default`, [`copyHtml`, `sass`, `webpack`]);
