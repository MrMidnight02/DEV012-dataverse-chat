// Define la función 'header' que devuelve un componente de encabezado como una cadena de texto HTML.
export const header = () => {
  // Crea una cadena de texto HTML que representa el contenido del encabezado.
  const headerComponent = `
    <header>
    <div class="logo-container">
      <img id="logo" src="Logo.png" alt="Logo">
     </div>
    </header>`;

  // Retorna la cadena de texto HTML que representa el componente de encabezado.
  return headerComponent;
};
