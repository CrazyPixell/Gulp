import del from 'del'; // плагин для удаления архива (если имеется)
import zipPlugin from 'gulp-zip'; // плагин для создания архива

export const zip = () => {
  del(`./${app.path.rootFolder}.zip`);
  return app.gulp
    .src(`${app.path.buildFolder}/**/*.*`, {})
    .pipe(app.plugins.plumber())
    .pipe(zipPlugin(`${app.path.rootFolder}.zip`))
    .pipe(app.gulp.dest('./'));
};
