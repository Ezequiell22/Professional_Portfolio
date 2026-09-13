import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/pt-BR",
        destination: "/",
      },
    ];
  },
};

export default nextConfig;
