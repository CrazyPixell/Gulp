import { configFTP } from '../config/ftp.js'; // конфигурационный файл
import vinylFTP from 'vinyl-ftp'; // плагин для выгрузки на ftp
import util from 'gulp-util'; // плагин для отображения хода выгрузки на ftp

export const ftp = () => {
  configFTP.log = util.log;
  const ftpConnect = vinylFTP.create(configFTP);
  return app.gulp
    .src(`${app.path.buildFolder}/**/*.*`, {})
    .pipe(app.plugins.plumber())
    .pipe(ftpConnect.dest(`/${app.path.ftp}/${app.path.rootFolder}`));
};
