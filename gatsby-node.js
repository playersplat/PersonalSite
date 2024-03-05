const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const portTemplate = path.resolve(`./src/templates/portTemplate.js`);
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: portTemplate,
      context: {
        // Passing path as context to be used in portTemplate's GraphQL query
        slug: node.frontmatter.path,
      },
    });
  });
};
