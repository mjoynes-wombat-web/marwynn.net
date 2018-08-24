const chokidar = require('chokidar');
const { remove } = require('fs-extra');
const touch = require('touch');
const glob = require('globby');

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
