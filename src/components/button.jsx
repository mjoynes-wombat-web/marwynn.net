import React from 'react';
import PropTypes from 'prop-types';

import colors from '../consts/colors';

const Button = ({
  className, disabled, children, onClick, width,
}) => (
  <button className={className} disabled={disabled} type="submit" onClick={onClick}>
    {children}
    <style jsx>
      {`
      button {
        @keyframes pulse {
          0% {
            background-color: ${colors.lilacBright()};
            box-shadow: inset 0 0 0.75rem ${colors.lilacDeep()},
            0 0 0.75rem ${colors.lilac(1)};
          }
          50% {
            background-color: ${colors.lilacBright(0.75)};
            box-shadow: inset 0 0 0.5rem ${colors.lilacDeep(0.65)};
          }

          100% {
            background-color: ${colors.lilacBright()};
            box-shadow: inset 0 0 0.75rem ${colors.lilacDeep()},
            0 0 0.75rem ${colors.lilac(1)};
          }
        }
        font-family: 'Open Sans', 'Arial' serif;
        font-weight: 400;
        cursor: pointer;
        appearance: none;
        background-color: ${colors.lilacBright(0.75)};
        border: 0;
        border-radius: 0.5rem;
        box-shadow: inset 0 0 0.5rem ${colors.lilacDeep(0.65)};
        color: ${colors.navy()};
        display: block;
        font-size: 1.5rem;
        margin-top: 2rem;
        outline: none;
        padding: 1rem 0 0.75rem 0;
        transition: all 0.5s;
        width: 100%;
        max-width: ${width};

        &.processing {
          animation-name: pulse;
          animation-duration: 2s;
          animation-iteration-count: infinite;
        }

        &:hover {
          background-color: ${colors.lilacBright()};
          box-shadow: inset 0 0 0.75rem ${colors.lilacDeep()},
            0 0 0.75rem ${colors.lilac(1)};
        }

        :disabled {
          cursor: not-allowed;
        }
      }
      `}
    </style>
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  onClick: PropTypes.func,
  width: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  disabled: false,
  onClick: () => null,
  width: '100%',
};

export default Button;
