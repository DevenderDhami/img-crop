/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'cropperjs/dist/cropper.css': 'cropperjs/dist/cropper.min.css'
    };
    return config;
  }
};

export default nextConfig;
