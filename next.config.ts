import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Strict mode for better React dev experience
  reactStrictMode: true,

  // Allow images from common domains if needed later
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
