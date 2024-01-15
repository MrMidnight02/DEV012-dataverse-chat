// Importa el conjunto de datos 'data' desde el módulo '../data/dataset.js'.
import data from "../data/dataset.js";

// Define la función 'computeStats' que calcula estadísticas sobre juegos multijugador y no multijugador.
export function computeStats(data) {
  // Inicializa el objeto 'estadisticas' con contadores para juegos multijugador y no multijugador.
  const estadisticas = data.reduce(
    (stats, juego) => {
      // Incrementa el contador correspondiente según si el juego es multijugador o no.
      if (juego.facts.multiplayer === "Sí") {
        stats.juegosMultijugador += 1;
      } else {
        stats.juegosNoMultijugador += 1;
      }
      return stats;
    },
    { juegosMultijugador: 0, juegosNoMultijugador: 0 }
  );

  // Retorna el objeto con las estadísticas calculadas.
  return estadisticas;
}

// Define la función 'estadisticaJuegos' que muestra las estadísticas en un elemento de párrafo.
export const estadisticaJuegos = () => {
  // Calcula las estadísticas llamando a la función 'computeStats' con el conjunto de datos.
  const estadisticas = computeStats(data);
  
  // Crea un elemento de párrafo para mostrar las estadísticas.
  const pEstadistica = document.createElement('p');
  pEstadistica.setAttribute('id', 'estadistica');
  pEstadistica.textContent = `Juegos Multijugador: ${estadisticas.juegosMultijugador}, Juegos No Multijugador: ${estadisticas.juegosNoMultijugador}`;

  // Retorna el elemento de párrafo creado con las estadísticas.
  return pEstadistica;
}
