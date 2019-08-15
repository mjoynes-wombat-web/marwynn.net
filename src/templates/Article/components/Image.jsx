import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const Image = ({
  src, alt, title, images,
}) => {
  const { node: image } = images.edges.find((img) => img.node.sizes.originalName === src.split('/').pop());
  return (
    <>
      <a href={image.sizes.originalImg || null} target="_blank" rel="noopener noreferrer">
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
    </>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  images: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.shape({
      node: PropTypes.shape({
        sizes: PropTypes.shape({
          originalImg: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    })).isRequired,
  }).isRequired,
};

export default Image;
