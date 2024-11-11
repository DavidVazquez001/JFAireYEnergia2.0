import dbConnect from '../../../../lib/mongoose';
import Product from '../../../../models/Product';

// export async function GET(req) {
//     await dbConnect();

//     const products = await Product.find({});
//     return new Response(JSON.stringify(products), { status: 200 });
// }

export async function GET(req) {
    await dbConnect();

    try {
        const products = await Product.find({});

        const categorizedProducts = products.reduce((acc, product) => {
            const { category, subcategory } = product;

            // Inicializa la categoría si no existe
            if (!acc[category]) {
                acc[category] = {};
            }

            // Inicializa la subcategoría dentro de la categoría si no existe
            if (!acc[category][subcategory]) {
                acc[category][subcategory] = [];
            }

            // Agrega el producto a la subcategoría correspondiente
            acc[category][subcategory].push(product);
            return acc;
        }, {});

        return new Response(JSON.stringify(categorizedProducts), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error al obtener productos:', error);
        return new Response(
            JSON.stringify({ error: 'Error al obtener productos' }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            },
        );
    }
}

export async function POST(req) {
    await dbConnect();
    const data = await req.json();
    const product = new Product(data);
    await product.save();
    return new Response(JSON.stringify(product), { status: 201 });
}
