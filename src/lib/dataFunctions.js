// Función principal para aplicar filtros y ordenar los datos.
export const filtrosT = (data, genero, pov, orden) => {
  let dataFiltrada = data;

  // Aplica filtro por género si se proporciona un género específico.
  if (genero !== "nada") {
    dataFiltrada = filtroGenero(dataFiltrada, genero);
  }

  // Aplica filtro por punto de vista (POV) si se proporciona un POV específico.
  if (pov !== "nada") {
    dataFiltrada = filtroPOV(dataFiltrada, pov);
  }

  // Ordena alfabéticamente ascendente si se especifica 'asc'.
  if (orden === "asc") {
    dataFiltrada = ordenaAZ(dataFiltrada);
  }

  // Ordena alfabéticamente descendente si se especifica 'desc'.
  if (orden === "desc") {
    dataFiltrada = ordenaZA(dataFiltrada);
  }

  // Retorna los datos después de aplicar los filtros y ordenarlos.
  return dataFiltrada;
};

// Función para filtrar datos por género.
export const filtroGenero = (data, genero) => {
  const filtro1 = data.filter((items) => items.facts.gender === genero);
  return filtro1;
};

// Función para filtrar datos por punto de vista (POV).
export const filtroPOV = (data, POV) => {
  const filtro1 = data.filter((items) => items.facts.pointsOfView === POV);
  return filtro1;
};

// Función para ordenar datos alfabéticamente ascendente.
export const ordenaAZ = (data) => {
  const ordenAz = data.sort((a, b) => {
    if (a.name < b.name) {
      return -1; // a viene antes que b
    } else if (a.name > b.name) {
      return 1; // b viene antes que a
    }
    return 0; // a y b son iguales
  });
  return ordenAz;
};

// Función para ordenar datos alfabéticamente descendente.
export const ordenaZA = (data) => {
  const ordenaZa = data.sort((a, b) => {
    if (a.name > b.name) {
      return -1; // a viene antes que b
    } else if (a.name < b.name) {
      return 1; // b viene antes que a
    }
    return 0; // a y b son iguales
  });
  return ordenaZa;
};
