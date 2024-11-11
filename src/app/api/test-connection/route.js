import dbConnect from '../../../../lib/mongoose';

export async function GET() {
    try {
        await dbConnect();
        return new Response(
            JSON.stringify({ message: 'Database connected successfully' }),
            {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            },
        );
    } catch (error) {
        console.error('Connection error:', error);
        return new Response(
            JSON.stringify({ error: 'Database connection failed' }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            },
        );
    }
}
