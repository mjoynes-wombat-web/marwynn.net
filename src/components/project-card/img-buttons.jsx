import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faArrowCircleRight from '@fortawesome/fontawesome-free-solid/faArrowCircleRight';
import faArrowCircleLeft from '@fortawesome/fontawesome-free-solid/faArrowCircleLeft';

import colors from '../../consts/colors';

const ImgButtons = ({
  onClick,
}) => (
  <div className="img-buttons">
    <button
      className="left"
      data-direction="left"
      onClick={onClick}
      type="button"
      aria-label="Previous Image"
    >
      <FontAwesomeIcon icon={faArrowCircleLeft} />
    </button>
    <button
      className="right"
      data-direction="right"
      onClick={onClick}
      type="button"
      aria-label="Next Image"
    >
      <FontAwesomeIcon icon={faArrowCircleRight} />
    </button>

    <style jsx>
      {`
      .img-buttons {
        button {
          opacity: 0;
          position: absolute;
          top: calc(50% - 8px);
          overflow: visible;
          background: transparent;
          appearance: none;
          outline: none;
          border: none;
          z-index: 10;
          transition: 0.25s;
        }

        button :global(.fa-arrow-circle-left), button :global(.fa-arrow-circle-right) {
          color: transparent;
          filter: none;
          width: 25px;
          height: 24px;
          transition: all 0.25s;
          cursor: pointer;
          color: ${colors.spring(0.85)};
          filter: drop-shadow(0 0 0.125rem ${colors.navy(0.75)});

          &:hover {
            color: ${colors.spring()};
            transform: scale(1.125);
          }
        }

        button:disabled :global(.fa-arrow-circle-left), button:disabled :global(.fa-arrow-circle-right) {
          color: ${colors.navy(0.25)};
          filter: drop-shadow(0 0 0.125rem ${colors.navy(0.75)});
          &:hover {
            transform: none;
            cursor: not-allowed;
            color: ${colors.navy(0.25)};
          }
        }

        button.left {
          left: 0.625rem;
        }

        button.right {
          right: 0.625rem;
        }
      }
      `}
    </style>
  </div>
);

ImgButtons.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ImgButtons;
