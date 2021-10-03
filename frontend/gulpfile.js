const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

exports.default = () => (
	gulp.src('src/index.css')
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(gulp.dest('src/css'))),
		
	gulp.src('src/custom.css')
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(gulp.dest('src/css'))