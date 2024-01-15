// Importamos los archivos necesarios para el funcionamieno de nuestra vista
import data from "../data/dataset.js";
import { renderItems } from "../componets/tarjetas.js";
import { footer } from "../componets/footer.js";
import { header } from "../componets/header.js";
import { vistaFiltro } from "../componets/filtros.js";
import { filtrosT } from "../lib/dataFunctions.js";
import { estadisticaJuegos } from "../componets/estadistica.js";
import { navigateTo } from "../router.js";

// Creamos una copia del array 'data' y lo asignamos a 'newData'.
const newData = data.slice();

// Definimos la función componente 'Home'.
export const Home = () => {
  // Creamos un nuevo elemento 'div' y le asigna el id 'vistaHome'.
  const divHome = document.createElement('div');
  divHome.setAttribute('id', 'vistaHome');
  
  // Creamos un nuevo elemento 'section' y le asignamos el contenido de 'header' y 'vistaFiltro'.
  const homeView = document.createElement("section");
  homeView.innerHTML = header() + vistaFiltro();

  // Creamos un elemento de estadísticas y lo añadimos al contenedor con id 'contenedor-2'.
  const estadisticasElemento = estadisticaJuegos();
  const contenedorEstadisticas = homeView.querySelector('#contenedor-2'); 
  contenedorEstadisticas.appendChild(estadisticasElemento);

  // Creamos un nuevo elemento 'div' y le asignamos el id 'itemsDiv'.
  const itemsDiv = document.createElement('div');
  itemsDiv.setAttribute('id', 'itemsDiv');
  homeView.appendChild(itemsDiv);

  // Creamos un nuevo elemento 'section' y le asignamos el contenido de 'footer'.
  const homeFooter = document.createElement("section");
  homeFooter.innerHTML = footer();
  homeView.appendChild(homeFooter);

  // Añadimos 'homeView' como hijo de 'divHome'.

  divHome.appendChild(homeView);

  // Definimos la función 'agregarEventosFiltros'.
  function agregarEventosFiltros() {
    // Obtenemos elementos del DOM para filtros y ordenamiento.
    const filtrarGenero = document.querySelector('[id="filtrar-por-género"]');
    const filtrarPOV = document.querySelector('[id="filtrar-por-POV"]');
    const ordenaAZ = document.querySelector('[id="ordenar-por"]');

    // Agregamos escuchadores de eventos para cambios en los filtros.
    filtrarGenero.addEventListener("change", aplicarFiltros);
    filtrarPOV.addEventListener("change", aplicarFiltros);
    ordenaAZ.addEventListener("change", aplicarFiltros);
  }

  // Definimos la función 'aplicarFiltros'.
  function aplicarFiltros() {
    // Obtenemos elementos del DOM para filtros y ordenamiento.
    const filtrarGenero = document.querySelector('[id="filtrar-por-género"]');
    const filtrarPOV = document.querySelector('[id="filtrar-por-POV"]');
    const ordenaAZ = document.querySelector('[id="ordenar-por"]');

    // Obtenemos valores seleccionados en los filtros.
    const indice = filtrarGenero.selectedIndex;
    const optionSelect = filtrarGenero.options[indice];
    const indicePov = filtrarPOV.selectedIndex;
    const optionSelectPOV = filtrarPOV.options[indicePov];
    const indiceOrdenar = ordenaAZ.selectedIndex;
    const ordenar = ordenaAZ.options[indiceOrdenar];

    // Limpiamos el contenido de 'itemsDiv'.
    itemsDiv.innerHTML = "";

    // Filtramos los datos y renderizamos los elementos.
    const dataFiltrada = filtrosT(data, optionSelect.value, optionSelectPOV.value, ordenar.value);
    itemsDiv.appendChild(renderItems(dataFiltrada)); 
  }

  // Obtenemos el botón de restablecer filtros y agrega un escuchador de eventos.
  const boton = divHome.querySelector('[data-testid="restablecerFiltros"]');
  boton.addEventListener("click", limpiar);

  // Definimos la función 'limpiar' para restablecer los filtros.
  function limpiar() {
    const filtrarGenero = document.querySelector('[id="filtrar-por-género"]');
    const filtrarPOV = document.querySelector('[id="filtrar-por-POV"]');
    const ordenaAZ = document.querySelector('[id="ordenar-por"]');
    
    // Restablecemos los valores de los filtros y el contenido de 'itemsDiv'.
    filtrarGenero.value = 'nada';
    filtrarPOV.value = 'nada';
    ordenaAZ.value = 'nada';
    itemsDiv.innerHTML = "";
    itemsDiv.appendChild(renderItems(newData));
  }

  // Obtenemos el botón para navegar al chat grupal y agrega un escuchador de eventos.
  const boton2 = divHome.querySelector('[data-testid="botonChatGrupal"]');
  boton2.addEventListener("click", () => {
    navigateTo("/chatGrupal");
  })

  // Obtemenos el botón para navegar a la API key y agrega un escuchador de eventos.
  const botonApi = divHome.querySelector('[data-testid="botonApiKey"]');
  botonApi.addEventListener("click", () => {
    navigateTo("/apiKey");
  })
 
  // Añadimos 'divHome' al cuerpo del documento.
  document.body.appendChild(divHome);

  // Agregamos eventos de filtros y aplica filtros por defecto.
  agregarEventosFiltros();
  aplicarFiltros();

  // Retornamos 'divHome'.
  return divHome;
};
