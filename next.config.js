/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'coreshop-headless.localhost',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'demo4-enterprise.coreshop.org',
                port: '',
                pathname: '/**',
            },
        ]
    }
}

module.exports = nextConfig
