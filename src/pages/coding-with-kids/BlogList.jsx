import React from 'react';
import PropTypes from 'prop-types';

import BlogListArticle from './BlogListArticle';

const BlogList = ({ articles }) => (
  <section className="blog-list">
    {articles.map(({ node }) => <BlogListArticle article={node} />)}
  </section>
);

BlogList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    node: PropTypes.object,
  })).isRequired,
};

export default BlogList;
