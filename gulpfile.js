// Подключаем Gulp
import gulp from 'gulp';
// Импортируем пути
import { path } from './gulp/config/path.js';
// Импортируем основные плагины
import { plugins } from './gulp/config/plugins.js';

// Передаём значения в глобальный объект
global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  gulp,
  path,
  plugins,
};

// Импортируем задачи
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { localServer } from './gulp/tasks/localServer.js';
import { html } from './gulp/tasks/html.js';
import { scss } from './gulp/tasks/scss.js';
import { javascript } from './gulp/tasks/javascript.js';
import { img } from './gulp/tasks/img.js';
import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js';
import { svgSprite } from './gulp/tasks/svgSprite.js';
import { zip } from './gulp/tasks/zip.js';
import { ftp } from './gulp/tasks/ftp.js';

// Функция для наблюдения за изменениями
const watcher = () => {
  gulp.watch(app.path.watch.files, copy);
  gulp.watch(app.path.watch.html, html);
  gulp.watch(app.path.watch.scss, scss);
  gulp.watch(app.path.watch.js, javascript);
  gulp.watch(app.path.watch.img, img);
};

export { svgSprite };

// Последовательная обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

// Основные задачи
const mainTasks = gulp.series(
  fonts,
  gulp.parallel(copy, html, scss, javascript, img)
);

// Сценарии для выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, localServer));
const build = gulp.series(reset, mainTasks);
const buildZIP = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);

// Экспорт сценариев
export { dev };
export { build };
export { buildZIP };
export { deployFTP };

// Выполнение сценария по умолчанию
gulp.task('default', dev);
