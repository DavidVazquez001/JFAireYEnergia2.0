export async function GET() {
    return new Response(JSON.stringify({ message: 'Test successful' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}
