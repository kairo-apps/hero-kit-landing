/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: "/policy", destination: "/privacy", permanent: true }];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
      },
    ],
  },
};

export default nextConfig;
