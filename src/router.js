// Objeto que almacena las rutas de la aplicación.
let routes = {};

// Variable que almacena el elemento raíz donde se renderizarán las vistas.
let rootElement = "";

// Función para establecer el elemento raíz.
export const setRootEl = (newRootElement) => {
  rootElement = newRootElement;
};

// Función para establecer las rutas de la aplicación.
export const setRoutes = (newRoutes) => {
  if (typeof newRoutes === "object") {
    routes = newRoutes;
  }
};

// Función interna para renderizar la vista correspondiente a una ruta.
const renderView = (pathname, props = {}) => {
  const root = rootElement;
  root.innerHTML = ""; // Limpia el contenido actual del elemento raíz.

  // Obtiene el parámetro de consulta 'id' de la URL.
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id") || "";

  // Verifica si la ruta especificada existe en el objeto 'routes'.
  if (routes[pathname]) {
    // Renderiza la vista correspondiente a la ruta actual.
    const template = routes[pathname]({ ...props, id });
    root.appendChild(template);
  } else {
    // Si la ruta no existe, redirige a la vista de error.
    renderView("/error");
  }
};

// Función para navegar a una nueva ruta.
export const navigateTo = (pathname, props = {}) => {
  // Actualiza el historial del navegador con la nueva ruta.
  let URLvisited = window.location.origin + pathname;
  if (props.id) {
    URLvisited += `?id=${props.id}`;
  }
  history.pushState({}, "", URLvisited);

  // Renderiza la vista correspondiente a la nueva ruta.
  renderView(pathname, { ...props });
};

// Función que se ejecuta cuando cambia la URL.
export const URLChange = (location) => {
  // Renderiza la vista correspondiente a la nueva URL.
  renderView(location);
};
