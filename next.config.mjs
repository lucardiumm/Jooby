/** @type {import('next').NextConfig} */
const nextConfig = {
    crossOrigin: 'use-credentials',
    images: {
        remotePatterns: [
            {
                hostname: 'lh3.googleusercontent.com',
            }
        ]
    }
};

export default nextConfig;
