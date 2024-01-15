// Importa la función 'botonRegresar' desde el módulo '../componets/botonPrincipal.js'.
import { botonRegresar } from "../componets/botonPrincipal.js";

// Define la función componente 'api'.
export const api = () => {
  // Crea un nuevo elemento 'div' y le asigna el id 'pantallaApiKey'.
  const divApiKey = document.createElement("div");
  divApiKey.setAttribute("id", "pantallaApiKey");

  // Añade el botón de regresar utilizando la función importada 'botonRegresar'.
  divApiKey.appendChild(botonRegresar());

  // Crea un nuevo elemento 'section' para la vista de la API.
  const apiKeyView = document.createElement("section");

  // Crea un nuevo elemento 'div' para el contenido de la API Key.
  const contenedorApiKeyDiv = document.createElement("div");
  contenedorApiKeyDiv.id = "ingreso";

  // Crea un elemento de párrafo con texto indicando el propósito de la API Key.
  const pTexto = document.createTextNode(
    "Api Key Admin \n Desde aquí puedes administrar la API Key a utilizar"
  );
  const pElemento = document.createElement("p");
  pElemento.appendChild(pTexto);
  contenedorApiKeyDiv.appendChild(pElemento);

  // Crea un segundo 'div' para el formulario de ingreso de la API Key.
  const segundoDiv = document.createElement("div");

  // Crea un elemento de textarea para ingresar la API Key.
  const contenidoTextarea = document.createElement("textarea");
  contenidoTextarea.setAttribute("id", "apiTex");
  contenidoTextarea.setAttribute("name", "Api");
  contenidoTextarea.setAttribute("rows", "4");
  contenidoTextarea.setAttribute("cols", "50");
  contenidoTextarea.setAttribute("placeholder", "API KEY");
  contenidoTextarea.setAttribute("class", "apiText");

  // Crea un botón para enviar la API Key.
  const botonEnviar = document.createElement("button");
  botonEnviar.setAttribute("data-testid", "boton-enviar");
  botonEnviar.setAttribute("name", "boton-enviar");
  botonEnviar.setAttribute("id", "enviar");
  botonEnviar.appendChild(document.createTextNode("Enviar"));

  // Agrega el textarea y el botón al segundo 'div'.
  segundoDiv.appendChild(contenidoTextarea);
  segundoDiv.appendChild(botonEnviar);

  // Agrega los elementos al elemento 'apiKeyView'.
  apiKeyView.appendChild(contenedorApiKeyDiv);
  apiKeyView.appendChild(segundoDiv);

  // Añade 'apiKeyView' al cuerpo del documento.
  document.body.appendChild(apiKeyView);

  // Agrega un evento de clic al botón para validar la API Key.
  botonEnviar.addEventListener("click", () => {
    const apiKey = contenidoTextarea.value;

    // Verifica si se proporcionó una API Key y la almacena en el localStorage.
    if (apiKey) {
      localStorage.setItem("apiKey", apiKey);
      alert("La apikey ha sido validada correctamente");
    } else {
      alert("Ha habido un error. Por favor, introduce una API key válida");
    }
  });

  // Añade 'apiKeyView' a 'divApiKey'.
  divApiKey.appendChild(apiKeyView);

  // Retorna 'divApiKey'.
  return divApiKey;
};
