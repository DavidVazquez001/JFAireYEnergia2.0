const cloudinary = require('../config/cloudinary');
const fs = require('fs');

async function listAllImages(folder = '') {
    let allImages = [];
    let nextCursor = null;

    try {
        do {
            // Obtener las imágenes con paginación
            const result = await cloudinary.api.resources({
                type: 'upload',
                prefix: '', // Carpeta específica o todas las imágenes si está vacío
                max_results: 100, // Límite de 100 imágenes por solicitud
                next_cursor: nextCursor, // Usar el cursor para obtener la siguiente página
            });

            // Agregar URLs de la página actual a la lista
            allImages = allImages.concat(
                result.resources.map((image) => image.secure_url),
            );

            // Actualizar el cursor para la siguiente página (si existe)
            nextCursor = result.next_cursor;
        } while (nextCursor); // Continuar mientras haya más páginas

        // Guardar todas las URLs en un archivo de texto
        fs.writeFileSync('all_images_urls.txt', allImages.join('\n'), 'utf8');
        console.log(
            `Todas las URLs de imágenes se guardaron en all_images_urls.txt`,
        );
    } catch (error) {
        console.error('Error al listar imágenes:', error);
    }
}

// Llama a la función con el nombre de la carpeta o sin argumento para todas las imágenes
listAllImages(); // O listAllImages('nombre_de_la_carpeta');
