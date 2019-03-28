module.exports = {
  siteMetadata: {
    title: `Ethereum`,
    description: `The worlds largest community solving global challenges and democratizing the internet.`,
    author: `@deepwork_studio`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ethereum`,
        short_name: `ethereum`,
        start_url: `/`,
        background_color: `#0E0F15`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png` // This path is relative to the root of the site.
      }
    }
  ]
};
