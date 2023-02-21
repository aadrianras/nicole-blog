const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  }, {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  }, {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  }, {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
];

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  experimental: {
    appDir: true,
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
};


