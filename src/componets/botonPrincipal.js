// Importa la función 'navigateTo' desde el módulo '../router.js'.
import { navigateTo } from "../router.js";

// Define la función 'botonRegresar' que crea y devuelve un componente de botón para regresar a la vista principal.
export const botonRegresar = () => {
  // Crea un elemento de botón.
  const botonRegresarComponent = document.createElement("button");

  // Configura el atributo 'id' del botón.
  botonRegresarComponent.setAttribute("id", "botonRegresar");

  // Establece el texto del botón como "Regresar".
  botonRegresarComponent.textContent = "Regresar";

  // Agrega un evento de clic al botón para navegar a la vista principal al hacer clic.
  botonRegresarComponent.addEventListener("click", () => {
    navigateTo("/");
  });

  // Retorna el componente de botón creado.
  return botonRegresarComponent;
};

