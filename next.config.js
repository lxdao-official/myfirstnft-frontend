module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'api.nft.myfirst.io' }],
        destination: 'https://nft.myfirstweb3.xyz/:path*',
        permanent: true,
      },
    ]
  },
}
