module.exports = {
  siteMetadata: {
    title: `Gatsby Default Some Starter`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
