import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  images: {
    unoptimized: true,
  },

  devIndicators: {
    position: "bottom-right",
  },

  async headers() {
    return [];
  },
};

export default nextConfig;
