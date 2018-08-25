import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const Image = ({
  src, alt, title, images,
}) => {
  const { node: image } = images.edges.find(img => img.node.sizes.originalName === src.split('/').pop());
  return (<>
    <a href={image.sizes.originalImg || null}>
      <Img sizes={image.sizes} alt={alt} title={title} />
    </a>
    <style jsx global>
      {`
      .gatsby-image-outer-wrapper {
        margin-top: 2rem;
        max-height: 20rem;
        .gatsby-image-wrapper {
          max-height: 20rem;

          img {
            object-fit: contain !important;
          }
        }
      }
        `}
    </style>
  </>);
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  images: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.shape({
      node: PropTypes.shape({
        sizes: PropTypes.shape({
          originalImg: PropTypes.string,
        }),
      }),
    })),
  }),
};

export default Image;
