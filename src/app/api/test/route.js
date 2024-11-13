// export async function GET() {
//     return new Response(JSON.stringify({ message: 'Test successful' }), {
//         status: 200,
//         headers: { 'Content-Type': 'application/json' },
//     });
// }

import dbConnect from '../../../../lib/mongoose';

export async function GET() {
    try {
        await dbConnect(); // Intenta conectar a MongoDB
        return new Response(
            JSON.stringify({ message: 'Database connected successfully' }),
            {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            },
        );
    } catch (error) {
        console.error('Database connection error:', error);
        return new Response(
            JSON.stringify({
                message: 'Database connection failed',
                error: error.message,
            }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            },
        );
    }
}
