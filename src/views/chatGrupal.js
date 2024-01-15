// Importamos la función 'botonRegresar
import { botonRegresar } from "../componets/botonPrincipal.js";

// Definimos la función componente 'chatGrupal'.
export const chatGrupal = () => {
  // Creamos un nuevo elemento 'div' y le asignamos el id 'vistaChat'.
  const divChat = document.createElement("div");
  divChat.setAttribute("id", "vistaChat");

  // Añadimos el botón de regresar utilizando la función importada 'botonRegresar'.
  divChat.appendChild(botonRegresar());

  // Creamos un nuevo elemento 'section' para la vista del chat grupal.
  const chatView = document.createElement("section");

  // Definimos el contenido HTML de la pantalla del chat grupal.
  const pantallaChatGrupal = `
    <div class="contenedorFlex" id="chat_grupal">
      <p>Chatea con todos los juegos</p>
    </div>
    <div class=uno></div>
    <div class=dos id="miDivDos"></div> 
    <div class="tres">
      <textarea class="miTextarea" name="miTextarea" placeholder="Tu mensaje aquí" id="miTextarea"></textarea>
      <button class="enviar-chat" id="enviarMensaje">Enviar</button>
    </div>`;
  
  // Asignamos el contenido HTML a 'chatView'.
  chatView.innerHTML = pantallaChatGrupal;

  // Añadimos 'chatView' como hijo de 'divChat'.
  divChat.appendChild(chatView);

  // Obtienemos el botón 'enviarMensaje' y agregamos un escuchador de eventos para la función 'enviarMensaje'.
  const enviarMensajeBtn = divChat.querySelector("#enviarMensaje");
  enviarMensajeBtn.addEventListener("click", enviarMensaje);

  // Retornamos 'divChat'.
  return divChat;
};

// Definimos la función 'enviarMensaje'.
const enviarMensaje = () => {
  // Obtenemos el contenido del textarea con id 'miTextarea'.
  const mensaje = document.getElementById("miTextarea").value;

  // Creamos un nuevo elemento 'p' y le asignamos el texto del mensaje.
  const nuevoMensaje = document.createElement("p");
  nuevoMensaje.textContent = mensaje;

  // Limpiamos el contenido del textarea.
  document.getElementById("miTextarea").value = "";

  // Agregamos el nuevo mensaje al div con id 'miDivDos'.
  document.getElementById("miDivDos").appendChild(nuevoMensaje);
};
