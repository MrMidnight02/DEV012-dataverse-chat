// Importa la función 'navigateTo' desde el módulo '../router.js'.
import { navigateTo } from "../router.js";

// Define la función 'renderItems' que crea y devuelve un elemento 'ul' con elementos 'li' para cada objeto en 'data'.
export const renderItems = (data) => {
  // Crea un elemento 'ul' para contener la lista de elementos.
  const contenedorUl = document.createElement("ul");
  
  // Itera sobre cada objeto en 'data'.
  for (const datos of data) {
    // Crea un elemento 'li' para cada objeto.
    const contenedorLi = document.createElement("li");
    contenedorUl.appendChild(contenedorLi);

    // Crea un grupo de definición ('dl') para organizar la información del objeto.
    const grupodl = document.createElement("dl");
    contenedorLi.appendChild(grupodl);
    grupodl.setAttribute("itemscope", "");
    grupodl.setAttribute("itemtype", "videojuegos");

    // Crea una imagen ('img') para la portada del videojuego.
    const portada = document.createElement("img");
    grupodl.appendChild(portada);
    portada.src = datos.imageUrl;

    // Crea un término de definición ('dt') para el nombre del videojuego.
    const dt1 = document.createElement("dt");
    grupodl.appendChild(dt1);
    dt1.textContent = "Nombre:";

    // Crea un dato de definición ('dd') para mostrar el nombre del videojuego.
    const dd1 = document.createElement("dd");
    grupodl.appendChild(dd1);
    dd1.setAttribute("itemprop", "name");
    dd1.textContent = datos.name;

    // Crea un segundo término de definición ('dt') para la descripción corta del videojuego.
    const dt2 = document.createElement("dt");
    grupodl.appendChild(dt2);
    dt2.textContent = "Descripción corta:";

    // Crea un segundo dato de definición ('dd') para mostrar la descripción corta del videojuego.
    const dd2 = document.createElement("dd");
    grupodl.appendChild(dd2);
    dd2.setAttribute("itemprop", "shortDescription");
    dd2.textContent = datos.shortDescription;

    // Añade un evento de clic al 'li' para navegar a la vista de detalle del videojuego.
    contenedorLi.addEventListener("click", () => { 
      navigateTo('/detalle', datos);
    });
  }

  // Retorna el elemento 'ul' con los elementos 'li' creados.
  return contenedorUl;
};
