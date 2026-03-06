const path = require("path")
const docs = require("./content/docs.json")  // adjust path if needed

exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  docs.forEach(doc => {
    createPage({
      path: `/docs/${doc.slug}`,            // URL for this page
      component: path.resolve("./src/templates/docTemplate.js"),
      context: doc,                        // passes title/content to the template
    })
  })
}