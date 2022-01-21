// Задача для работы с svg
import svgSpriteMaker from 'gulp-svg-sprite';

export const svgSprite = () => {
  return app.gulp
    .src(`${app.path.src.svgicons}`, {})
    .pipe(app.plugins.plumber())
    .pipe(
      svgSpriteMaker({
        mode: {
          stack: {
            sprite: `../icons/icons.svg`,
            example: true,
          },
        },
      })
    )
    .pipe(app.gulp.dest(`${app.path.build.img}`));
};
