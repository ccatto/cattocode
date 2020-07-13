module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-root-import`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: 'Roboto Mono',
            variable: true,
            weights: ['200..900']
          },
          {
            family: 'limelight',
            weights: ['700']
          },
          {
            family: 'Titillium',
            variable: true,
            weights: ['200..900']
          }
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    }
  ],
  siteMetadata: {
    title: 'Catto Gatsby test title',
  },
}
