/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                // host of the CoreShop installation whose assets are rendered (build time)
                hostname: process.env.API_HOSTNAME || '**',
                port: '',
                pathname: '/**',
            },
        ]
    }
}

module.exports = nextConfig;
