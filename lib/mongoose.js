import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    throw new Error(
        'Please define the MONGO_URI environment variable inside .env',
    );
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose
            .connect(MONGO_URI, {
                bufferCommands: false,
            })
            .then((mongoose) => {
                console.log('Connected to MongoDB');
                return mongoose;
            })
            .catch((error) => {
                console.error('Error connecting to MongoDB:', error);
                throw error; // Para propagar el error a donde se llame dbConnect
            });
    }

    try {
        cached.conn = await cached.promise;
    } catch (error) {
        console.error('Connection failed:', error);
        throw error;
    }

    return cached.conn;
}

export default dbConnect;
