const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const categoryServices = await graphql(`
    query {
      categoryServices: allContentfulServiceCategory {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  console.log("Services data:", JSON.stringify(categoryServices, null, 2));
  console.log("datacategoredges", categoryServices.data.categoryServices.edges);
  const serviceTemplate = path.resolve("src/templates/service.js");

  categoryServices.data.categoryServices.edges.forEach((categoryService) => {
    console.log("categoryService", categoryService);
    createPage({
      path: categoryService.node.slug,
      component: serviceTemplate,
      context: {
        slug: categoryService.node.slug,
      },
    });
  });
};
