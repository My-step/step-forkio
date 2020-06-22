const gulp = require("gulp"); 
const sass = require('gulp-sass');
const minify = require('gulp-minify');
const imagemin = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');
var clean = require('gulp-clean');


const patchs = {
	cleanCSS: {
		src: "./dist/*",
		dist: "./dist"
		
	},
	scss: {
		src: "./src/scss/**/*.scss",
		dist: "./dist/css/"
	},
	js: {
		src: "./src/js/**/*.js",
		dist: "./dist/js/"
	},
	img: {
		src: "./src/image/**/*.{jpg,png,webp,gif,svg}",
		dist: "./dist/img/"
	}
};

const moveCLEAN = () => 
gulp.src(patchs.cleanCSS.src).
pipe(clean()).
pipe(gulp.dest(patchs.cleanCSS.dist));

const moveSCSS = () => 
gulp.src(patchs.scss.src).
pipe(autoprefixer()).
pipe(sass({outputStyle: 'compressed'})).
pipe(gulp.dest(patchs.scss.dist));

const moveJS = () => 
gulp.src(patchs.js.src).
pipe(minify()). 
pipe(gulp.dest(patchs.js.dist));

const moveIMG = () => 
gulp.src(patchs.img.src).
pipe(imagemin()). 
pipe(gulp.dest(patchs.img.dist));

const watch = () => {
	gulp.watch(patchs.cleanCSS.src, moveCLEAN);
	gulp.watch(patchs.scss.src, moveSCSS);
	gulp.watch(patchs.js.src, moveJS);				
	gulp.watch(patchs.img.src, moveIMG);
}

gulp.task('build', gulp.parallel(moveCLEAN, moveSCSS, moveIMG, moveJS));

gulp.task('dev', gulp.series('build', watch));




