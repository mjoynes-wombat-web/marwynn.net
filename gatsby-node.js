const chokidar = require('chokidar');
const { remove } = require('fs-extra');
const touch = require('touch');
const glob = require('globby');
const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'coding-with-kids',
    });
    createNodeField({
      node,
      name: 'slug',
      value: `/coding-with-kids${slug}`,
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then((result) => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/pages/coding-with-kids/article/index.jsx'),
          context: {
            slug: node.fields.slug,
          },
        });
      });

      resolve();
    }).catch((error) => {
      reject(error);
    });
  });
};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: 'styled-jsx/babel',
    options: { plugins: ['styled-jsx-plugin-postcss'] },
  });
};

// Watch CSS files
exports.onCreateWebpackConfig = ({ stage, actions }, options) => {
  if (stage === 'develop') {
    const newOptions = {
      watchCss: true,
      watch: 'src/**/*.css',
      remove: 'node_modules/.cache',
      touch: 'src/**/*.js',
      ...options,
    };
    if (newOptions.watchCss) {
      const watcher = chokidar.watch(newOptions.watch);
      watcher.on('change', (event) => {
        remove(newOptions.remove)
          .then(() => glob(newOptions.touch))
          .then(files => Promise.all(files.map(file => touch(file))))
          .catch(console.error);
      });
      process.on('exit', () => watcher.close());
    }
  }

  return actions;
};
