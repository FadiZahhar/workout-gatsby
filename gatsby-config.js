/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title:'Simple Recipes',
    description:"Nice and clean recipes site",
    author:"@johnsmilga",
    person:{name:"john",age:32},
    simpleData:['item 1','item 2'],
    complexData: [
      {name:"john",age:32},
      {name:"susan",age:21},
    ]
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
  ],
}
