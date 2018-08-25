import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import colors from '../../consts/colors';

const BlogListArticle = ({
  article: {
    frontmatter: {
      title, date, repo, site,
    },
    fields: {
      slug,
    },
    excerpt,
  },
}) => (
  <article className="blog-article">
    <h2 className="article-title">
      <Link to={slug}>{title}</Link>
    </h2>
    <p className="article-date">{date}</p>
    <p className="article-links">
      <a className="repo-link" href={repo}>Code Repo</a>
      <a className="site-link" href={site}>Live Site</a>
    </p>
    <p className="blog-excerpt">
      {excerpt}
      <Link to={slug}>Read More.</Link>
    </p>
    <style jsx>
      {`
      article.blog-article {
        
        .article-title {
          margin-bottom: 0;
        }
        .article-title :global(a) {
          text-decoration: none;
          color: white;
           &:hover {
             color: white;
           }
        }
        .article-date {
          color: ${colors.springLight()};
          margin-top: 0.375rem;
        }
        .article-links {
          max-width: 60ch;
        }
        .article-links  :global(a) {
          width: 25%;
          min-width: 15ch;
          display: inline-block;
        }
      }
      `}
    </style>
  </article>
);

BlogListArticle.propTypes = {
  article: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
      date: PropTypes.string,
      repo: PropTypes.string,
      site: PropTypes.string,
    }),
  }).isRequired,
};

export default BlogListArticle;
