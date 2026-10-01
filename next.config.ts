import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Saloon-Management",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
