// Задача для очистки dist директории
import del from 'del'; // плагин для очистки

export const reset = () => {
  return del(app.path.clean);
};
