var gulp = require('gulp');
var sass = require('gulp-sass');
var runSequence = require('run-sequence');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');

gulp.task('up',['sass','watch']);

gulp.task('css', function(){
  return runSequence('sass');
});

gulp.task('watch',function(){
    gulp.watch('sass/**/*.scss',['sass']);
});

gulp.task('sass', function () {
  var processors = [                                 // 定義 postCSS 所需要的元件
      autoprefixer({})   // 使用 autoprefixer，這邊定義最新的五個版本瀏覽器
  ];
  return gulp.src('sass/**/*.scss')
    .pipe(sass(
      {outputStyle: 'expanded'}
    ).on('error', sass.logError))
    .pipe(postcss(processors))                       // 將 PostCSS 插入流程
    .pipe(gulp.dest('../css'));
});
