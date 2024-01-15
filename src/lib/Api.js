// Define la función 'chatPeticion' que realiza una solicitud a la API de OpenAI para conversaciones.
export const chatPeticion = (mensajeUsuario, personaje) => {
  // Obtiene la API Key almacenada en el localStorage.
  const API = localStorage.getItem("apiKey");

  // Retorna la promesa de una solicitud fetch a la API de OpenAI para completar la conversación.
  return fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API}`, // Incluye la API Key en la cabecera de autorización.
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Toma como rol el personaje principal del videojuego ${personaje}, responde como si fueses dicho personaje`,
        },
        {
          role: "user",
          content: mensajeUsuario,
        },
      ],
    }),
  })
    .then((response) => {
      // Convierte la respuesta a formato JSON y la retorna.
      return response.json();
    })
    .catch(() => {
      // Lanza un error en caso de fallo al comunicarse con la API.
      throw new Error("Error al comunicarse con la API");
    });
};
