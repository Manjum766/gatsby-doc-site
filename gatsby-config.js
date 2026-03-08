module.exports = 
{
  pathPrefix: "/gatsby-doc-site",
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/src/docs`
      }
    },
    `gatsby-transformer-remark`
  ]
}