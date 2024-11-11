const cloudinary = require('../config/cloudinary');
const fs = require('fs');

async function deleteAllImages(folder = '') {
    let nextCursor = null;

    try {
        do {
            // Obtener las imágenes con paginación
            const result = await cloudinary.api.resources({
                type: 'upload',
                prefix: 'products', // Carpeta específica o todas las imágenes si está vacío
                max_results: 100, // Límite de 100 imágenes por solicitud
                next_cursor: nextCursor, // Usar el cursor para obtener la siguiente página
            });

            // Extraer los public_ids de las imágenes
            const imageIds = result.resources.map((image) => image.public_id);

            if (imageIds.length > 0) {
                // Eliminar las imágenes listadas en la página actual
                const deleteResult =
                    await cloudinary.api.delete_resources(imageIds);
                console.log(`Imágenes eliminadas:`, deleteResult);
            }

            // Actualizar el cursor para la siguiente página (si existe)
            nextCursor = result.next_cursor;
        } while (nextCursor); // Continuar mientras haya más páginas

        console.log(
            `Todas las imágenes en la carpeta '${folder}' han sido eliminadas.`,
        );
    } catch (error) {
        console.error('Error al eliminar imágenes:', error);
    }
}

// Llama a la función con el nombre de la carpeta
deleteAllImages('nombre_de_la_carpeta'); // Sustituye 'nombre_de_la_carpeta' por el nombre real
