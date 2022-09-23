/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['jsx', 'mdx'],
  // reactStrictMode: true,
  swcMinify: false,
  experimental: {
    newNextLinkBehavior: false,
    scrollRestoration: false,
  },
}

export default nextConfig
