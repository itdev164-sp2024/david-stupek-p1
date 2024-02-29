require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Webstupek-Portfolio`,
    description: `A collection of work by David Stupek`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    contact: {
      name: `David Stupek`,
      company: `Webstupek LLC`,
      address: `560 E Elizabeth St Waukesha WI`
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        /*
        spaceID:`${process.env.SPACE_ID}`,
        accessToken: `${process.env.ACCESS_TOKEN}`
        */
        spaceId: `gzt868czzsz8`,
        accessToken: `OMuhSMXW46CoP9RAP3huDBURlDNjT1VdiQkU2xk6eNU`        
      }
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
