

const nextConfig = {
  reactStrictMode: true,
  // Required for Docker / self-hosted deployment (Hetzner)
  output: 'standalone',
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
