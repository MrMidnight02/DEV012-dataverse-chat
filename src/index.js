// Importa funciones y componentes necesarios desde el módulo 'router.js' y otros archivos.
import { setRootEl, setRoutes, URLChange } from "./router.js";
import { Home } from "./views/HOME.js";
import { characterDetails } from "./views/CharacterDetail.js";
import { error } from "./views/Error.js";
import { chatGrupal } from "./views/chatGrupal.js";
import { api } from "./views/apiView.js";

// Configura las rutas de la aplicación.
const routes = {
  "/": Home,
  "/detalle": characterDetails,
  "/error": error,
  "/apiKey": api,
  "/chatGrupal": chatGrupal,
};

// Obtiene el elemento raíz del documento HTML.
const root = document.getElementById("root");

// Configura las rutas y el elemento raíz utilizando las funciones importadas.
setRoutes(routes);
setRootEl(root);

// Función que maneja los cambios de ruta al cargar el contenido del documento.
document.addEventListener("DOMContentLoaded", (event) => {
  // Inicia la gestión de rutas al cargar la página.
  URLChange(event.target.location.pathname);
});

// Evento que maneja los cambios de ruta al utilizar los botones de retroceso/adelante del navegador.
window.addEventListener("popstate", () => {
  // Llama a la función de manejo de cambios de ruta al cambiar la URL.
  URLChange(window.location.pathname);
});
