import { error } from "../../src/views/Error.js";


describe('error', () => {
  it('debería renderizar la vista de error correctamente', async () => {
    // Configurar el cuerpo del documento
    document.body.innerHTML = '';

    // Llamar a la función error
    const errorElement = error();

    // Esperar a que se resuelva la promesa de la función asíncrona (si la hay)
    await Promise.resolve();

    // Verificar que el contenido del errorElement coincide con la estructura esperada
    expect(errorElement).toMatchSnapshot();
  });
});