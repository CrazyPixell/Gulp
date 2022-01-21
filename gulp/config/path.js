// Получить имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

// Директория для готового проекта
const buildFolder = './dist';
// Директория исходных файлов
const srcFolder = './src';

// Пути
export const path = {
  build: {
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    img: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
    files: `${buildFolder}/files/`,
  },
  src: {
    html: `${srcFolder}/*.html`,
    scss: `${srcFolder}/scss/style.scss`,
    js: `${srcFolder}/js/app.js`,
    img: `${srcFolder}/img/**/*.{jpg, jpeg, png, gif, webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    files: `${srcFolder}/files/**/*.*`,
    svgicons: `${srcFolder}/svgicons/*.svg`,
  },
  watch: {
    html: `${srcFolder}/**/*.html`,
    scss: `${srcFolder}/scss/**/*.scss`,
    js: `${srcFolder}/js/**/*.js`,
    img: `${srcFolder}/img/**/*.{jpg, jpeg, png, svg, gif, ico, webp}`,
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``, // папка на удалённом сервере
};
