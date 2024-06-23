// import isAvifWebp from 'avif-webp-checker';
// isAvifWebp({ mode: 'webp' });

// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";
// import styles bundle
import "swiper/css/bundle";

import form from "./modules/form.js";

window.addEventListener("load", function () {
  // Переменные
  const body = document.querySelector("body");

  form();

  // Показываем страницу после загрузки
  body.style.opacity = 1;
});
