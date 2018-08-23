import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faArrowCircleRight from '@fortawesome/fontawesome-free-solid/faArrowCircleRight';
import faArrowCircleLeft from '@fortawesome/fontawesome-free-solid/faArrowCircleLeft';

const UnstyledImgButtons = ({
  onClick,
  activeImg,
  imgsLength,
  className,
}) => (
  <div className={`img-buttons ${className}`}>
    <button
      className="left"
      data-direction="left"
      onClick={onClick}
      disabled={activeImg === 0}
      type="button"
    >
      <FontAwesomeIcon icon={faArrowCircleLeft} />
    </button>
    <button
      className="right"
      data-direction="right"
      onClick={onClick}
      disabled={activeImg + 1 === imgsLength}
      type="button"
    >
      <FontAwesomeIcon icon={faArrowCircleRight} />
    </button>
  </div>
);

UnstyledImgButtons.propTypes = {
  onClick: PropTypes.func.isRequired,
  activeImg: PropTypes.number.isRequired,
  imgsLength: PropTypes.number.isRequired,
  className: PropTypes.string,
};

UnstyledImgButtons.defaultProps = {
  className: '',
};

const ImgButtons = styled(UnstyledImgButtons)`
  button {
    position: absolute;
    top: calc(50% - 8px);
    overflow: visible;
    background: transparent;
    appearance: none;
    outline: none;
    border: none;
    z-index: 10;

    .fa-arrow-circle-left, .fa-arrow-circle-right {
      color: transparent;
      filter: none;
      width: 25px;
      height: 24px;
      transition: all 0.25s;
      cursor: pointer;
    }

    :disabled {
      .fa-arrow-circle-left, .fa-arrow-circle-right {
        :hover {
          transform: none;
          cursor: not-allowed;
        }
      }
    }
  }

  button.left {
    left: 0.625rem;
  }

  button.right {
    right: 0.625rem;
  }
`;

export default ImgButtons;
