const path = require("path")

exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.nodes.forEach(node => {

    createPage({
      path: node.frontmatter.slug,
      component: path.resolve(`src/templates/doc-template.js`),
      context: {
        id: node.id
      }
    })

  })

}