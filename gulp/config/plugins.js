import replace from 'gulp-replace'; // плагин для поиска и замены
import plumber from 'gulp-plumber'; // плагин для обработки ошибок
import browserSync from 'browser-sync'; // плагин для атообновления браузера (локальный сервер)
import newer from 'gulp-newer'; // плагин для проверки обновлений
import ifPlugin from 'gulp-if'; // плагин для условного ветвления

export const plugins = {
  replace,
  plumber,
  browserSync,
  newer,
  if: ifPlugin,
};
