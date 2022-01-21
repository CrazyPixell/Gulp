// Задача для работы со стилями (SCSS синтаксис)
import dartSass from 'sass'; // препроцессор Sass
import gulpSass from 'gulp-sass'; // компилятор в css
import rename from 'gulp-rename'; // плагин для переименования
import cleanCss from 'gulp-clean-css'; //плагин для сжатия css файлов
import webpCss from 'gulp-webpcss'; // плагин для вывода webp изображений
import autoPrefixer from 'gulp-autoprefixer'; // плагин для добавления вендорных префиксов
import groupMediaQueries from 'gulp-group-css-media-queries'; // плагин для группировки медиа запросов

const sass = gulpSass(dartSass);

export const scss = () => {
  return (
    app.gulp
      .src(app.path.src.scss, { sourcemaps: app.isDev })
      .pipe(app.plugins.plumber())
      .pipe(app.plugins.replace(/@img\//g, '../img/'))
      .pipe(
        sass({
          outputStyle: 'expanded',
        })
      )
      .pipe(app.plugins.if(app.isBuild, groupMediaQueries()))
      .pipe(
        app.plugins.if(
          app.isBuild,
          webpCss({
            webpClass: '.webp',
            noWebpClass: '.no-webp',
          })
        )
      )
      .pipe(
        app.plugins.if(
          app.isBuild,
          autoPrefixer({
            grid: true,
            overrideBrowserslist: ['last 3 versions'],
            cascade: true,
          })
        )
      )
      // Если необходим не сжатый файл
      .pipe(app.gulp.dest(app.path.build.css))
      .pipe(app.plugins.if(app.isBuild, cleanCss()))
      .pipe(
        rename({
          extname: '.min.css',
        })
      )
      .pipe(app.gulp.dest(app.path.build.css))
      .pipe(app.plugins.browserSync.stream())
  );
};
