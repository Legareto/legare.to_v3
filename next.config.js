// import nextMDX from '@next/mdx'
// import remarkGfm from 'remark-gfm'
// import rehypePrism from '@mapbox/rehype-prism'

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   pageExtensions: ['jsx'],
//   reactStrictMode: true,
//   swcMinify: false,
// experimental: {
//   newNextLinkBehavior: false,
//   scrollRestoration: false,
// },
// }

// module.exports = nextConfig

// const withMDX = nextMDX({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [remarkGfm],
//     rehypePlugins: [rehypePrism],
//   },
// })

// export default withMDX(nextConfig)

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
}
