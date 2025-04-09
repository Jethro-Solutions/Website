/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Disable advanced features that might cause issues
    typedRoutes: false,
  },
  serverExternalPackages: [],
  webpack: (config) => {
    // Add optimization
    config.optimization.moduleIds = 'deterministic';
    return config;
  },
}

module.exports = nextConfig 