import path from "path";

const nextConfig = {
  output: "standalone",

  turbopack: {
    root: path.resolve(__dirname),
  },

  images: {
    unoptimized: true,
  },

  // Fix HMR WebSocket for VM/non-localhost access
  devIndicators: {
    position: "bottom-right",
  },

  async headers() {
    return [];
  },
};

export default nextConfig;