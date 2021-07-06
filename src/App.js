import css from "./assets/css/styles.css";
import router from './router';

console.log("SPA Semana 6");

window.addEventListener('load', () => {
    console.log(`Ruta inicio:  ${window.location.hash}`);
    router(window.location.hash);
});

window.addEventListener('hashchange', () => {
    router(window.location.hash)
});