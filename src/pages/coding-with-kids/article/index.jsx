import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import colors from '../../../consts/colors';


import Layout from '../../../layouts/index';

const Article = ({ data }) => (
  <Layout>
    {console.log(data)}
    <main dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />

    <style jsx global>
      {`
      main :global(p) {
        max-width: 65ch;
      }

      main :global(pre) {
        max-width: 65ch;
        box-sizing: border-box;
        background-color: ${colors.navy(0.3)};
        box-shadow: inset 0 0 0.25rem ${colors.lilac(0.5)};
        border-radius: 0.25rem;
        display: flex;
        flex-direction: column;
        transition: all 0.5s;
        overflow: hidden;
        margin: 1rem 0;
        max-width: 65ch;
        padding: 1em;
        line-height: 1.5rem;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        word-wrap: normal;
        font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
        tab-size: 4;
        color: white;

        code {
          font-family: inherit;
        }

        .token {
          &.tag {
            color: ${colors.tomato()};
          }
          &.keyword, &.selector {
            color: ${colors.lilac()};
          }
          &.attr-name, &.operator {
            color: ${colors.carolina()};
          }
          &.property, &.string, &.attr-value {
            color: ${colors.spring()};
          }
          &.comment {
            color: #999;
          }
          &.punctuation {
            color: white;
          }
        }
      }
      `}
    </style>
  </Layout>
);

Article.propTypes = {

};

export const query = graphql`
  query BlogPostQuery($slug: String!){
    markdownRemark(fields: {
      slug: {
        eq: $slug
      }
    }) {
      excerpt
      html
      htmlAst
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

export default Article;
