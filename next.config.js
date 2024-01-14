/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
const nextConfig = {
    async redirects() {
        return [
        {
            source: '/',
            destination: '/en',
            permanent: true, 
        },
    ];
  },
}

module.exports = nextConfig
