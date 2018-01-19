var gulp = require('gulp'); 
var minify = require('gulp-minify');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

gulp.task('compress', function() {

	gulp.src('./dist/bundle.js')
		.pipe(minify({
	    	ext:{
	        	min:'.min.js'
	    	},
	    	ignoreFiles: ['bundle.min.js']
		}))
	.pipe(gulp.dest('dist'));

	gulp.src('dist/bundle.css')
	    .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename('bundle.min.css'))
	    .pipe(gulp.dest('./dist/'))
});