/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['static1.cbrimages.com', 'assets-in.bmscdn.com',"upload.wikimedia.org","https://lh3.googleusercontent.com"],
  },
}

export default nextConfig;
