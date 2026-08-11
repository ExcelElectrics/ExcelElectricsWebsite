import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  allowedDevOrigins: ["192.168.0.21", "192.168.0.41", "192.168.0.32", "192.168.0.141", "192.168.0.197"],
  async redirects() {
    return [
      // Old hash-style legal URLs cannot be redirected from the server (hash is
      // client-only). /legal alone still lands on the first policy document.
      {
        source: "/legal/terms",
        destination: "/legal/terms-of-use",
        permanent: true,
      },
      {
        source: "/legal/privacy",
        destination: "/legal/privacy-policy",
        permanent: true,
      },
      {
        source: "/legal/cookies",
        destination: "/legal/cookie-policy",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
