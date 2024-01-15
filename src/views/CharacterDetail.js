// Importamos las funciones y componentes necesarios desde otros archivos
import { chatPeticion } from "../lib/Api.js";
import { renderDetails } from "../componets/detalles.js";
import { botonRegresar } from "../componets/botonPrincipal.js";

// Definimos la función componente 'characterDetails' que acepta propiedades (props)
export const characterDetails = (props) => {
  // Creamos un nuevo elemento 'div' y le asigna el id 'vistaDetalles'.
  const divCharacter = document.createElement("div");
  divCharacter.setAttribute("id", "vistaDetalles");

  // Añadimos el botón de regresar utilizando la función importada 'botonRegresar'.
  divCharacter.appendChild(botonRegresar());

  // Creamos un nuevo elemento 'section' para la vista del detalle del personaje.
  const characterView = document.createElement("section");

  // Creamos varios elementos HTML necesarios para la vista de detalles.
  const contenedorDetalles = document.createElement("div");
  const barraChat = document.createElement("div");
  const textarea = document.createElement("textarea");
  const button = document.createElement("button");
  const contenedorMensajes = document.createElement("div");

  // Añadimos clases, ids y atributos a los elementos creados.
  characterView.classList.add("contenedorPrincipal");
  contenedorDetalles.classList.add("detallesJuegos2");
  contenedorDetalles.id = "detallesJuegos";
  barraChat.classList.add("contenedorTexto");
  textarea.id = "chatIndividual";
  textarea.placeholder = "Escribe aquí tu mensaje";
  button.dataset.testid = "boton-enviar";
  button.name = "boton-enviar";
  button.id = "botonEnviar";
  button.classList.add("enviar-chat");
  button.textContent = "Enviar";
  contenedorMensajes.id = "textoContenedor";

  // Construimos la estructura de la barra de chat.
  barraChat.appendChild(textarea);
  barraChat.appendChild(button);
  barraChat.appendChild(contenedorMensajes);

  // Renderizamos los detalles del personaje y los añadimos al contenedor de detalles.
  const detallesElemento = renderDetails(props);
  contenedorDetalles.appendChild(detallesElemento);
  contenedorDetalles.appendChild(barraChat); // Movemos barraChat dentro de contenedorDetalles

  // Añadimos los contenedores al elemento 'characterView'.
  characterView.appendChild(contenedorDetalles);
  characterView.appendChild(barraChat);

  // Definimos la función asincrónica 'enviarMensaje'.
  const enviarMensaje = async () => {
    // Obtienemos el contenido del textarea y eliminamos espacios en blanco al inicio y al final.
    const mensajeUsuario = textarea.value.trim();

    // Verificamos que el mensaje del usuario no esté vacío.
    if (mensajeUsuario !== "") {
      // Creamos un nuevo elemento <p> para representar el mensaje del usuario.
      const nuevoMensajeUsuario = document.createElement("p");

      // Asignamos el contenido del mensaje del usuario al nuevo elemento <p>.
      nuevoMensajeUsuario.textContent = mensajeUsuario;

      // Agregamos el nuevo elemento al contenedor de mensajes.
      contenedorMensajes.appendChild(nuevoMensajeUsuario);

      // Limpiamos el contenido del textarea.
      textarea.value = "";

      // Estilizamos el mensaje del usuario con un fondo azul claro, relleno y bordes redondeados.
      nuevoMensajeUsuario.style.backgroundColor = "lightblue";
      nuevoMensajeUsuario.style.padding = "10px";
      nuevoMensajeUsuario.style.borderRadius = "5px";

      try {
        // Realizamos una llamada asíncrona a la función chatPeticion para obtener la respuesta del modelo.
        const respuesta = await chatPeticion(mensajeUsuario, props.name);

        // Verificamos que la respuesta tenga la estructura esperada.
        if (
          respuesta.choices &&
          respuesta.choices[0] &&
          respuesta.choices[0].message
        ) {
          // Creamos un nuevo elemento <p> para representar la respuesta del modelo.
          const nuevoMensajeAI = document.createElement("p");

          // Asignamos el contenido de la respuesta del modelo al nuevo elemento <p>.
          nuevoMensajeAI.textContent = respuesta.choices[0].message.content;

          // Agregamos el nuevo elemento al contenedor de mensajes.
          contenedorMensajes.appendChild(nuevoMensajeAI);

          // Estilizamos la respuesta del modelo con un fondo verde claro, relleno y bordes redondeados.
          nuevoMensajeAI.style.backgroundColor = "lightgreen";
          nuevoMensajeAI.style.padding = "10px";
          nuevoMensajeAI.style.borderRadius = "5px";
        } else {
          // Imprime un mensaje de error si la respuesta del modelo no tiene la estructura esperada.
          /* console.error(
            "La respuesta del modelo no tiene la estructura esperada:",
            respuesta
          ); */
        }
      } catch (error) {
        // Captura y maneja errores al obtener la respuesta del modelo.
        /* console.error("Error al obtener respuesta del modelo:", error.message); */
      }
    }
  };

  // Agregamos el evento click al botón y llamamos a la función enviarMensaje.
  button.addEventListener("click", enviarMensaje);

  // Agregamos un evento al textarea para detectar la tecla "Enter" y llamamos a la función enviarMensaje.
  textarea.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      enviarMensaje();
    }
  });

  // Agregamos el contenedor de la vista del personaje al elemento 'divCharacter' y lo devolvemos.
  divCharacter.appendChild(characterView);
  return divCharacter;
};
