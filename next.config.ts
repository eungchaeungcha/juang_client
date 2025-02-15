import type { NextConfig } from "next";

const API_BASE_URL = "http://43.201.36.213:8080/api/v1";

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    // Support SVG (aviable )
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `${API_BASE_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;
