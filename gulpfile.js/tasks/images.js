// Módulos
var gulp = require('gulp'),
	path = require('../../gulpconfig').images;

// Tarea | Copiar imágenes
gulp.task('images', function() {
	gulp.src(path.in)
	.pipe(gulp.dest(path.out));
});