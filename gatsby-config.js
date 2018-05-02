const generateBabelConfig = require('gatsby/dist/utils/babel-config');

exports.modifyWebpackConfig = ({ config, stage }) => {
  const program = {
    directory: __dirname,
    browserslist: ['> 1%', 'last 2 versions', 'IE >= 9'],
  };

  return generateBabelConfig(program, stage).then((babelConfig) => {
    config.removeLoader('js').loader('js', {
      test: /\.jsx?$/,
      exclude: modulePath => (
        /node_modules/.test(modulePath) &&
        !/node_modules\/(swiper|dom7)/.test(modulePath)
      ),
      loader: 'babel',
      query: babelConfig,
    });
  });
};

module.exports = {
  siteMetadata: {
    title: 'SimeonSmith.me',
    description: 'Simeon Smith\'s Portfolio Website',
    keywords: 'simeon, smith, graphic, designer, artist, web, developer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     path: `${__dirname}/markdown`,
    //     name: 'markdown-pages',
    //   },
    // },
    // 'gatsby-transformer-remark',
  ],
  pathPrefix: '/simeonsmith.me',
};
