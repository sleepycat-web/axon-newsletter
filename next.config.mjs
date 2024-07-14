/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/",
      },
    ];
  },
  images: {
    domains: ["dummyimage.com", "images.unsplash.com"],
  },
};

export default nextConfig;
