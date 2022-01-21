// Задача для работы с html
import fileInclude from 'gulp-file-include'; // плагин для подключения html файлов (@@somefile.html)
import webpHTMLNosvg from 'gulp-webp-html-nosvg'; // плагин для замены img на picture, source
import versionNumber from 'gulp-version-number'; // плагин для предотвращения кэширования

export const html = () => {
  return app.gulp
    .src(app.path.src.html)
    .pipe(app.plugins.plumber())
    .pipe(fileInclude())
    .pipe(app.plugins.replace(/@img\//g, 'img/'))
    .pipe(app.plugins.if(app.isBuild, webpHTMLNosvg()))
    .pipe(
      app.plugins.if(
        app.isBuild,
        versionNumber({
          value: '%DT%',
          append: {
            key: '_v',
            cover: 0,
            to: ['css', 'js'],
          },
          output: {
            file: 'gulp/version.json',
          },
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browserSync.stream());
};
