/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: process.env.API_HOSTNAME ? process.env.API_HOSTNAME : 'coreshop-headless.localhost',
                port: '',
                pathname: '/**',
            },
        ]
    }
}

module.exports = nextConfig
