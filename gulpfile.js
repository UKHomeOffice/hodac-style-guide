var gulp           = require('gulp');
var fs             = require('fs');
var browserSync    = require('browser-sync');
var sass           = require('gulp-sass');
var sourcemaps     = require('gulp-sourcemaps');
var prefix         = require('gulp-autoprefixer');
var cp             = require('child_process');
var s3             = require('gulp-s3');
var gzip           = require('gulp-gzip');
var cssmin         = require('gulp-cssmin');
var rename         = require('gulp-rename');
var path           = require('path');
var awsCredentials = existsSync('./aws.json') ? require('./aws.json') : require('./aws-sample.json');

/**
 * existsSync
 * @param  {[string]} filename
 * @return {[bool]}  true if file exists
 */
function existsSync(filename) {
    try {
        fs.accessSync(filename);
        return true;
    } catch (ex) {
        return false;
    }
}

var jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build',
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', ['minify-css', 'build:images'], function (done) {
    browserSync.notify(messages.jekyllBuild);
    var configPath = path.resolve(__dirname, '_config.yml');
    return cp.spawn(jekyll, ['build', '--config', configPath], {
        stdio: 'inherit',
    })
    .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'jekyll-build'], function () {
    browserSync({
      open: false,
        server: {
            baseDir: '_site',
        },
    });
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
    return gulp.src('_scss/main.scss')
      .pipe(sourcemaps.init())
    .pipe(sass({
        includePaths: ['scss',
          'node_modules/compass-mixins/lib',
          'node_modules/govuk_frontend_toolkit/stylesheets',
          'node_modules/govuk-elements-sass/public/sass',
          'node_modules/govuk_template/source/assets/stylesheets',
          'node_modules/prismjs/themes'
        ],
        onError: browserSync.notify,
    }))
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
        cascade: true,
    }))
    .pipe(sourcemaps.write())
    .pipe(browserSync.reload({
        stream: true,
    }))
    // .pipe(gulp.dest('_site/css/'))
    .pipe(gulp.dest('css'));
});


/**
 * Copy Images
 *
 */
gulp.task('build:images', function () {

    var dirs = [
      'node_modules/govuk_template_mustache/assets/stylesheets/images/**/*',
      'node_modules/govuk_template_mustache/assets/images/**/*',
      '_scss/hodac-styleguide/images/**/*',
      'node_modules/govuk_template/source/assets/stylesheets/images/**/*',
      'node_modules/govuk_frontend_toolkit/images/**/*'
    ];

    return gulp.src(dirs)
    .pipe(gulp.dest('images'));
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch('_scss/**/*.scss', ['sass']);
    gulp.watch(['*.html', '**/*.md', '_layouts/*.html', '_posts/*', '_js/**/*.js'], ['jekyll-rebuild', 'sass']);
});

/**
 * Minify CSS
 */
gulp.task('minify-css', ['sass'], function() {
  return gulp.src('css/main.css')
  .pipe(cssmin())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('css'));
});

/**
 * Dist pipeline
 */
gulp.task('dist', ['jekyll-build'], function () {
  console.log('Build completed');
});

/**
 * Deploy to S3
 */
gulp.task('deploy', ['dist'], function () {
    gulp.src('./_site/**')
      .pipe(s3(awsCredentials, {}));
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);
