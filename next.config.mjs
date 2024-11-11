/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        MONGO_URI: process.env.MONGO_URI,
    },

    images: {
        domains: ['res.cloudinary.com'],
    },
};

export default nextConfig;
