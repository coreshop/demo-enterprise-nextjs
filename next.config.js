/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    sassOptions: {
        // stylesheets import each other with paths relative to the project root
        loadPaths: [__dirname],
        // the stylesheets still use @import and / division (Bootstrap 5 does too)
        silenceDeprecations: ['import', 'global-builtin', 'slash-div', 'mixed-decls', 'color-functions'],
    },
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
