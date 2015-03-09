var gulp = require('gulp');
var source = require('vinyl-source-stream'); // Used to stream bundle for further handling
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

function handleError(err) {
  console.error(err.toString());
  this.emit('end');
}

gulp.task('browserify', function() {
    var bundler = browserify({
        entries: ['./js/main.js'], // Only need initial file, browserify finds the deps
        transform: [reactify], // We want to convert JSX to normal javascript
        debug: true, // Gives us sourcemapping
        cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
    });
    var watcher  = watchify(bundler);

    return watcher
    .on('update', function () { // When any files update
        var updateStart = Date.now();
        console.log('Updating!');
        watcher.bundle() // Create new bundle that uses the cache for high performance
        .pipe(source('main.js'))
    // This is where you add uglifying etc.
        .pipe(gulp.dest('./build/'));
        console.log('Updated!', (Date.now() - updateStart) + 'ms');
    })
    .bundle() // Create the initial bundle when starting the task
    .pipe(source('main.js'))
    .pipe(gulp.dest('./build/'));
});

gulp.task('connect-dev', function() {
  connect.server({
    root: ''
  });
});

gulp.task('styles',  function () {
  return gulp.src('scss/*.scss')
    .pipe(sass({style: 'expanded'}))
    .on('error', handleError)
    .pipe(gulp.dest('build'));
});

gulp.task('watch', ['styles'] ,function () {
  gulp.watch('scss/*.scss', ['styles']);
});

gulp.task('default', ['watch', 'browserify', 'connect-dev']);
