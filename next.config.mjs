/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['jsx', 'mdx'],
  reactStrictMode: true,
  swcMinify: false,
  experimental: {
    newNextLinkBehavior: false,
    scrollRestoration: false,
  },
}

export default nextConfig

// Working with newNextLinkBehavior to true
// Not working with newNextLinkBehavior to false
