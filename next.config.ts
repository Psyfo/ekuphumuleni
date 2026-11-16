import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Standalone output keeps the production image small: `next build` traces
  // the files the server actually needs into .next/standalone with its own
  // server.js, and the Dockerfile ships only that, not the whole install.
  output: 'standalone',
  // sharp (used by next/image) loads its native libvips through the dynamic
  // linker, which file tracing cannot follow, so include it explicitly. The
  // Dockerfile loads sharp during the image build, so a gap here fails the
  // deploy rather than every optimised image in production.
  outputFileTracingIncludes: {
    '/**': ['./node_modules/@img/sharp-libvips-linux*/lib/**/*'],
  },
  images: {
    // The home hero requests quality 80; Next 16 only allows qualities
    // listed here (default [75]) and warns on every page load otherwise
    qualities: [75, 80],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
