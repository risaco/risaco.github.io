var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var header = require('gulp-header');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var pkg = require('./package.json');

// Set the banner content
var banner = ['/*!\n',
  ' * Start Bootstrap - <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
  ' * Copyright 2013-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
  ' * Licensed under <%= pkg.license %> (https://github.com/BlackrockDigital/<%= pkg.name %>/blob/master/LICENSE)\n',
  ' */\n',
  ''
].join('');

// Compiles SCSS files from /scss into /css
function sassToCSS() {
  return gulp.src('scss/agency.scss')
    .pipe(sass())
    .pipe(header(banner, {
      pkg: pkg
    }))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }));
};

// gulp.task('sass', () => {
//   return gulp.src('scss/agency.scss')
//     .pipe(sass())
//     .pipe(header(banner, {
//       pkg: pkg
//     }))
//     .pipe(gulp.dest('css'))
//     .pipe(browserSync.reload({
//       stream: true
//     }))
// });

// Minify compiled CSS
function minifyCSS() {
  return gulp.src('css/agency.css')
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }));
};

// gulp.task('minify-css', ['sass'], function() {
//   return gulp.src('css/agency.css')
//     .pipe(cleanCSS({
//       compatibility: 'ie8'
//     }))
//     .pipe(rename({
//       suffix: '.min'
//     }))
//     .pipe(gulp.dest('css'))
//     .pipe(browserSync.reload({
//       stream: true
//     }))
// });

// Minify custom JS
function minifyJS() {
  return gulp.src('js/agency.js')
    .pipe(uglify())
    .pipe(header(banner, {
      pkg: pkg
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('js'))
    .pipe(browserSync.reload({
      stream: true
    }));
}

// gulp.task('minify-js', () => {
//   return gulp.src('js/agency.js')
//     .pipe(uglify())
//     .pipe(header(banner, {
//       pkg: pkg
//     }))
//     .pipe(rename({
//       suffix: '.min'
//     }))
//     .pipe(gulp.dest('js'))
//     .pipe(browserSync.reload({
//       stream: true
//     }))
// });

// Copy vendor files from /node_modules into /vendor
// NOTE: requires `npm install` before running!

function copyVendorFiles() {
  gulp.src([
      'node_modules/bootstrap/dist/**/*',
      '!**/npm.js',
      '!**/bootstrap-theme.*',
      '!**/*.map'
    ])
    .pipe(gulp.dest('vendor/bootstrap'))

  gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/jquery/dist/jquery.min.js'])
    .pipe(gulp.dest('vendor/jquery'))

  gulp.src(['node_modules/jquery.easing/*.js'])
    .pipe(gulp.dest('vendor/jquery-easing'))

  gulp.src([
      'node_modules/font-awesome/**',
      '!node_modules/font-awesome/**/*.map',
      '!node_modules/font-awesome/.npmignore',
      '!node_modules/font-awesome/*.txt',
      '!node_modules/font-awesome/*.md',
      '!node_modules/font-awesome/*.json'
    ])
    .pipe(gulp.dest('vendor/font-awesome'))
}

// gulp.task('copy', () => {
//   gulp.src([
//       'node_modules/bootstrap/dist/**/*',
//       '!**/npm.js',
//       '!**/bootstrap-theme.*',
//       '!**/*.map'
//     ])
//     .pipe(gulp.dest('vendor/bootstrap'))

//   gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/jquery/dist/jquery.min.js'])
//     .pipe(gulp.dest('vendor/jquery'))

//   gulp.src(['node_modules/jquery.easing/*.js'])
//     .pipe(gulp.dest('vendor/jquery-easing'))

//   gulp.src([
//       'node_modules/font-awesome/**',
//       '!node_modules/font-awesome/**/*.map',
//       '!node_modules/font-awesome/.npmignore',
//       '!node_modules/font-awesome/*.txt',
//       '!node_modules/font-awesome/*.md',
//       '!node_modules/font-awesome/*.json'
//     ])
//     .pipe(gulp.dest('vendor/font-awesome'))
// });

// Default task
// gulp.task('default', ['sass', 'minify-css', 'minify-js', 'copy']);
exports.default = gulp.series(
  sassToCSS,
  gulp.parallel(minifyCSS, minifyJS, copyVendorFiles)  
);

// Configure the browserSync task
function runBrowserSync() {
  browserSync.init({
    server: {
      baseDir: ''
    },
  })
}

// gulp.task('browserSync', () => {
//   browserSync.init({
//     server: {
//       baseDir: ''
//     },
//   })
// });

// Dev task with browserSync
function runWatcher() {
  gulp.watch('scss/*.scss', sassToCSS);
  gulp.watch('css/*.css', minifyCSS);
  gulp.watch('js/*.js', minifyJS);
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('*.html', browserSync.reload);
  gulp.watch('js/**/*.js', browserSync.reload);
};

exports.dev = gulp.series(
  runBrowserSync,
  sassToCSS,
  gulp.parallel(minifyCSS, minifyJS),
  runWatcher
);

// gulp.task('dev', ['browserSync', 'sass', 'minify-css', 'minify-js'], function() {
//   gulp.watch('scss/*.scss', ['sass']);
//   gulp.watch('css/*.css', ['minify-css']);
//   gulp.watch('js/*.js', ['minify-js']);
//   // Reloads the browser whenever HTML or JS files change
//   gulp.watch('*.html', browserSync.reload);
//   gulp.watch('js/**/*.js', browserSync.reload);
// });
