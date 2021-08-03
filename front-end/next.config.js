module.exports = {
  async rewrites() {
    return [
      {
        source: '/auth/oauth',
        destination: 'https://accounts.google.com/o/oauth2/v2/auth/*',
      },
    ]
  },
  reactStrictMode: false,
  env: {
    API_URL: process.env.API_URL
  }
};
