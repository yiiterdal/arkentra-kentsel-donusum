/** next.config.mjs */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  async redirects() {
    return [
      {
        source: '/post/2026-kentsel-donusum-kira-yardimi-istanbul-guncel-rakamlar',
        destination: '/yazilarimiz/2026-kentsel-donusum-kira-yardimi-istanbul-guncel-rakamlar',
        permanent: true,
      },
      {
        source: '/yazilarimiz/2026-kentsel-donusum-kira-yardimi-basvuru',
        destination: '/yazilarimiz/2026-kentsel-donusum-kira-yardimi-istanbul-guncel-rakamlar',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/videos/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2560],
    imageSizes: [256, 384, 640, 750, 828, 1080],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'images.pexels.com', pathname: '/**' },
    ],
  },
};

export default nextConfig;
