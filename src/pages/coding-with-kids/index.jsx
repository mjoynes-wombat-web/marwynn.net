import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import BlogList from '../../components/blog/BlogList';

const CodingWithKids = ({ title, data: { allMarkdownRemark } }) => (
  <main>
    <Helmet
      meta={[
        { name: 'description', content: 'Coding with Kids Blog Articles' },
        { name: 'keywords', content: 'web, designer, developer, graphic, production, devops, development, design, portfolio, samples, coding, kids' },
      ]}
    >
      <title>{`Coding With Kids - ${title}`}</title>
    </Helmet>
    <div className="page-content">
      <h1>Coding With Kids</h1>
      <p>Welcome to my blog about coding fun web apps for my kids to play with.</p>
      <BlogList articles={allMarkdownRemark.edges} />
    </div>
  </main>
);

CodingWithKids.propTypes = {
  title: PropTypes.string,
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object),
    }),
  }).isRequired,
};

CodingWithKids.defaultProps = {
  title: 'SimeonSmith.dev',
};

export const query = graphql`
  query BlogPostsQuery{
    allMarkdownRemark(sort: {
    fields: [frontmatter___date]
    order: DESC
    }) {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
          frontmatter {
            title
            date
            repo
            site
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default CodingWithKids;
