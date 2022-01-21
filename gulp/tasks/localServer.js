// Задача для запуска локального сервера
export const localServer = done => {
  app.plugins.browserSync.init({
    server: {
      baseDir: `${app.path.build.html}`,
    },
    notify: false,
    port: 3000,
  });
};
