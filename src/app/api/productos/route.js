import dbConnect from '../../../../lib/mongoose';
import Product from '../../../../models/Product';

// export async function GET(req) {
//     await dbConnect();

//     const products = await Product.find({});
//     return new Response(JSON.stringify(products), { status: 200 });
// }

export async function GET(req) {
    // if (
    //     process.env.NODE_ENV === 'production' &&
    //     typeof window === 'undefined'
    // ) {
    //     return new Response(
    //         JSON.stringify({ message: 'API not available during build' }),
    //         { status: 200 },
    //     );
    // }

    await dbConnect();

    try {
        const products = await Product.find({});
        const categorizedProducts = products.reduce((acc, product) => {
            const { category, subcategory } = product;
            if (!acc[category]) {
                acc[category] = {};
            }
            if (!acc[category][subcategory]) {
                acc[category][subcategory] = [];
            }
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
