/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        if (isServer) {
            config.resolve.alias['expo-secure-store'] = false;
        }
        return config;
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'img.freepik.com',
                port: '',
            },
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
                port: ""
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                port: ""
            },
            {
                protocol: "https",
                hostname: "**",
                port: ""
            },
            {
                protocol: 'http',
                hostname: '**',
            },
        ]
    },
}
export default nextConfig;
