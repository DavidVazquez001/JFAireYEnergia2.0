import dbConnect from '../../../lib/mongoose';

export default async function handler(req, res) {
    try {
        await dbConnect();
        res.status(200).json({ message: 'Database connected successfully' });
    } catch (error) {
        console.error('Connection error:', error);
        res.status(500).json({ error: 'Database connection failed' });
    }
}
