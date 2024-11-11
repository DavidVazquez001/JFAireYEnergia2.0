const cloudinary = require('cloudinary').v2;

cloudinary.config({});

async function testConnection() {
    try {
        const result = await cloudinary.api.ping();
        console.log('Connection successful:', result);
    } catch (error) {
        console.error('Connection failed:', error);
    }
}

testConnection();
