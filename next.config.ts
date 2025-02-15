import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone", // For deployment as a single unit
};

export default nextConfig;
