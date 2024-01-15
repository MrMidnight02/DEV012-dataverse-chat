// Define la función 'renderDetails' que crea y devuelve un contenedor de detalles para un personaje o videojuego.
export const renderDetails = (detalles) => {
  // Crea un contenedor principal para los detalles.
  const detallesContenedor = document.createElement("div");
  detallesContenedor.classList.add("detalles-contenedor");

  // Crea una imagen para el logo del videojuego o personaje.
  const logoDetalles = document.createElement("img");
  detallesContenedor.appendChild(logoDetalles);
  logoDetalles.setAttribute("id", "logoDetalles");
  logoDetalles.src = detalles.logo;

  // Crea una imagen para la foto del personaje o videojuego.
  const fotoPersonaje = document.createElement("img");
  detallesContenedor.appendChild(fotoPersonaje);
  fotoPersonaje.setAttribute("id", "fotoPersonaje");
  fotoPersonaje.src = detalles.personajeUrl;

  // Crea un elemento para mostrar la descripción del personaje o videojuego.
  const descripcion = document.createElement("div");
  detallesContenedor.appendChild(descripcion);
  descripcion.setAttribute("id", "descripcion");
  descripcion.textContent = "Descripción: " + detalles.description;

  // Crea un elemento para mostrar el año de lanzamiento del videojuego.
  const lanzamiento = document.createElement("div");
  detallesContenedor.appendChild(lanzamiento);
  lanzamiento.setAttribute("id", "lanzamiento");
  lanzamiento.textContent = "Año de lanzamiento: " + detalles.facts.yearReleased;

  // Crea un elemento para mostrar el género del videojuego o personaje.
  const generoJuego = document.createElement("div");
  detallesContenedor.appendChild(generoJuego);
  generoJuego.setAttribute("id", "generoJuego");
  generoJuego.textContent = "Género: " + detalles.facts.gender;

  // Crea un elemento para mostrar el estilo de juego del videojuego.
  const estiloDeJuego = document.createElement("div");
  detallesContenedor.appendChild(estiloDeJuego);
  estiloDeJuego.setAttribute("id", "estiloDeJuego");
  estiloDeJuego.textContent = "Estilo de juego: " + detalles.facts.playingStyles;

  // Crea un elemento para mostrar la perspectiva del videojuego.
  const perspectivaJuego = document.createElement("div");
  detallesContenedor.appendChild(perspectivaJuego);
  perspectivaJuego.setAttribute("id", "perspectivaJuego");
  perspectivaJuego.textContent = "Perspectiva: " + detalles.facts.pointsOfView;

  // Crea un elemento para mostrar si el videojuego es multiplayer o no.
  const multiplayerJuego = document.createElement("div");
  detallesContenedor.appendChild(multiplayerJuego);
  multiplayerJuego.setAttribute("id", "multiplayerJuego");
  multiplayerJuego.textContent = "Multiplayer: " + detalles.facts.multiplayer;

  // Retorna el contenedor de detalles creado.
  return detallesContenedor;
};
