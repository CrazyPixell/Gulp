// Задача для работы с JavaScript
import webpack from 'webpack-stream'; // сборщик Webpack

export const javascript = () => {
  return app.gulp
    .src(app.path.src.js, { sourcemaps: app.isDev })
    .pipe(app.plugins.plumber())
    .pipe(
      webpack({
        mode: app.isBuild ? 'production' : 'development',
        output: {
          filename: 'app.min.js',
        },
      })
    )
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browserSync.stream());
};
