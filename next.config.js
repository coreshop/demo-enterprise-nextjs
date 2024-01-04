/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: process.env.API_HOSTNAME,
                port: '',
                pathname: '/**',
            },
        ]
    }
}

module.exports = nextConfig
