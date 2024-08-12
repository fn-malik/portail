/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['myiuc.com'],
    },
    typescript: {
        ignoreBuildErrors: true,
    }
};

export default nextConfig;
