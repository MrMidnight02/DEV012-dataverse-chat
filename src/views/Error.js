// Importamos la función 'botonRegresar
import { botonRegresar } from "../componets/botonPrincipal.js";
// Definimos la función componente 'error'.
export const error = () => {
  // Creamos un nuevo elemento 'div' y le asignamos el id 'vistaError'.
  const divError = document.createElement('div');
  divError.setAttribute("id","vistaError");

  // Añadimos el botón de regresar utilizando la función importada 'botonRegresar'.
  divError.appendChild(botonRegresar());

  // Creamos un nuevo elemento 'section' para la vista de error.
  const errorView = document.createElement("section");

  // Definimos el contenido HTML de la pantalla de error.
  const pantallaError = `
        <div class="contenedorFlex" id="mensajeError">
          <p>Página no encontrada</p>
          <p>Lo sentimos, al parecer esta parte del arcade no está funcionando.</p>
          <p>Por favor regresa a la página principal para seguir disfrutando.</p>
        </div>`;
  
  // Asignamos el contenido HTML a 'errorView'.
  errorView.innerHTML = pantallaError;

  // Añadimos 'errorView' como hijo de 'divError'.
  divError.appendChild(errorView);

  // Establecemos estilos de fondo para el cuerpo del documento.
  document.body.style.backgroundImage = 'url("https://raw.githubusercontent.com/Passitaz/DEV012-dataverse-chat/main/Pantalla%20de%20error.png")';
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundRepeat = 'no-repeat';

  // Retornamos 'divError'.
  return divError;
};
