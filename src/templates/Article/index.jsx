import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import colors from '../../consts/colors';
import Layout from '../../layouts';
import Image from './components/Image';

function createElements(elements, images) {
  return elements.reduce((elementAccu, element) => {
    const newElementsAccu = elementAccu;
    const currentElement = element;

    if (currentElement.properties) {
      if (currentElement.properties.className && typeof currentElement.properties.className !== 'string') currentElement.properties.className = currentElement.properties.className.join(' ');
      if (currentElement.properties.dataLanguage) {
        currentElement.properties.datalanguage = currentElement.properties.dataLanguage;
        delete currentElement.properties.dataLanguage;
      }
    }

    if (currentElement.type === 'text') {
      if (currentElement.value === '\n') return newElementsAccu;
      newElementsAccu.push(currentElement.value);
      return newElementsAccu;
    }
    if (currentElement.tagName === 'img') {
      newElementsAccu.push(<Image {...currentElement.properties} images={images} />);
      return newElementsAccu;
    }
    const newElement = React
      .createElement(
        currentElement.tagName,
        currentElement.properties,
        currentElement.children ? createElements(currentElement.children, images) : null,
      );
    newElementsAccu.push(newElement);
    return newElementsAccu;
  }, []);
}

const Article = ({ data: { markdownRemark: { frontmatter, htmlAst }, images } }) => (
  <Layout>
    <Helmet>
      <title>{`${frontmatter.title} - ${frontmatter.date} - Coding With Kids - SimeonSmith.me`}</title>
    </Helmet>
    <main className="blog-article">
      <p className="article-date">{frontmatter.date}</p>
      <h1 className="article-title">{frontmatter.title}</h1>
      {createElements(htmlAst.children, images)}
    </main>
    {/* <main dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} /> */}

    <style jsx global>
      {`
      main.blog-article {
        .article-date {
          color: ${colors.springLight()};
        }

        .article-title {
          margin-top: 0;
        }
        p {
          code {
            font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
            font-weight: lighter;
            color: rgba(255, 255, 255, 0.75);
            padding: 0.25rem;
            background-color: ${colors.navy(0.3)};
            box-shadow: inset 0 0 0.125rem ${colors.lilac(0.5)};
            border-radius: 0.25rem;
            
            span {
              white-space: normal;
            }
          }
        }

        blockquote {
          text-align: center;
          margin: 0 0 2rem 0;
        }

        .gatsby-highlight pre {
          max-width: 65ch;
          box-sizing: border-box;
          background-color: ${colors.navy(0.3)};
          box-shadow: inset 0 0 0.25rem ${colors.lilac(0.5)};
          border-radius: 0.25rem;
          display: flex;
          flex-direction: column;
          transition: all 0.5s;
          overflow: scroll;
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

            span {
              white-space: normal;
            }
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
      }
      `}
    </style>
  </Layout>
);

Article.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
      }),
      htmlAst: PropTypes.object,
    }),
    images: PropTypes.object,
  }).isRequired,
};

export const query = graphql`
  query BlogPostQuery($path: String!){
    markdownRemark(fields: {
      slug: {
        eq: $path
      }
    }) {
      id
      excerpt
      html
      htmlAst
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
    images: allImageSharp {
      edges {
        node {
          id
          sizes(maxWidth:300) {
            aspectRatio
            srcSet
            sizes
            originalName
            originalImg
          }
        }
      }
    }
  }
`;

export default Article;