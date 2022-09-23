// import nextMDX from '@next/mdx'
// import remarkGfm from 'remark-gfm'
// import rehypePrism from '@mapbox/rehype-prism'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['jsx', 'mdx'],
  reactStrictMode: true,
  swcMinify: true,
  // experimental: {
  //   newNextLinkBehavior: false,
  //   scrollRestoration: false,
  // },
}
// Fix: Fixing commit
export default nextConfig

// const withMDX = nextMDX({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [remarkGfm],
//     rehypePlugins: [rehypePrism],
//   },
// })

// export default withMDX(nextConfig)
