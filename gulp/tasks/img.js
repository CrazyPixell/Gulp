// Задача для работы с изображениями
import webp from 'gulp-webp'; // плагин для работы с форматом webp
import imagemin from 'gulp-imagemin'; // плагин для сжатия изображений

export const img = () => {
  return app.gulp
    .src(app.path.src.img)
    .pipe(app.plugins.plumber())
    .pipe(app.plugins.newer(app.path.build.img))
    .pipe(app.plugins.if(app.isBuild, webp()))
    .pipe(app.plugins.if(app.isBuild, app.gulp.dest(app.path.build.img)))
    .pipe(app.plugins.if(app.isBuild, app.gulp.src(app.path.src.img)))
    .pipe(app.plugins.if(app.isBuild, app.plugins.newer(app.path.build.img)))
    .pipe(
      app.plugins.if(
        app.isBuild,
        imagemin({
          progressive: true,
          svgoPlugins: [{ removeViewBox: false }],
          interlaced: true,
          optimizationLevel: 3, // от 0 до 7
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.img))
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.gulp.dest(app.path.build.img))
    .pipe(app.plugins.browserSync.stream());
};
