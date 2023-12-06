import { setRootEl, setRoutes, navigateTo } from './router.js';
import { Home } from './views/Home.js';

// Configura el elemento raíz
const root = document.getElementById('root');
setRootEl(root);

// Configura las rutas
setRoutes({
    '/': Home,
    // Aquí puedes añadir más rutas y vistas
});

// Función para manejar los cambios de ruta
const handleRouteChange = () => {
    const path = window.location.pathname;
    navigateTo(path);
};

// Eventos para manejar el cambio de ruta
window.addEventListener('load', handleRouteChange);
window.addEventListener('popstate', handleRouteChange);















/*
import Example from './views/Example.js';

Ejemplo de definición de rutas:

const routes = {
    "/": Example,
    ...
}
*/

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/