module.exports = {
  siteMetadata: {
    title: 'Simeon Smith.dev',
    siteUrl: 'https://www.simeonsmith.dev',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.simeonsmith.dev',
        sitemap: 'https://www.simeonsmith.dev/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-eslint',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'articles',
        path: `${__dirname}/src/articles/markdown`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'article-images',
        path: `${__dirname}/static/assets/articles/imgs`,
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve(`${__dirname}/src/layouts/index.jsx`),
      },
    },
  ],
};
