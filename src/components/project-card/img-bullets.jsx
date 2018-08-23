import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../../consts/colors';

const ImgBullets = ({
  imgs,
  activeImg,
  projectId,
  onClick,
}) => (
  <nav>
    {imgs.map(img => (
      <button
        className={activeImg === img.id ? 'active' : null}
        key={`project${projectId}img${img.id}bullet`}
        onClick={e => onClick(e, img.id)}
        type="button"
      >
        •
      </button>
    ))}
    <style jsx>
      {`
      nav {
        position: absolute;
        bottom: -0.125rem;
        z-index: 1;

        button {
          color: ${colors.lilacBright(0.5)};
          transition: all 0.5s;
          font-size: 1.5rem;
          line-height: 0;
          font-family: 'Josefin Slab', 'Arial', sans-serif;
          border: none;
          padding: 0;
          outline: none;
          cursor: pointer;
          transition: all 0.25s;

          &.active {
            color: ${colors.lilacBright(1)};
          }

          :hover {
            transform: scale(1.25);
            color: ${colors.spring()}
          }
        }
      }
      `}
    </style>
  </nav>
);

ImgBullets.propTypes = {
  activeImg: PropTypes.number.isRequired,
  projectId: PropTypes.number.isRequired,
  imgs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    url: PropTypes.string,
  })).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImgBullets;
