import React from 'react';
import PropTypes from 'prop-types';

import colors from '../../consts/colors';

const MenuButton = ({ buttonActive, onClick }) => (
  <button
    className={['hamburger', 'hamburger--spring', buttonActive ? 'is-active' : ''].join(' ')}
    type="button"
    onClick={onClick}
  >
    <span className="hamburger-box">
      <span className="hamburger-inner" />
    </span>
    <style jsx>
      {`
      :active, :focus, span:active, span:focus {
        outline: none;
        -webkit-tap-highlight-color: transparent;
      }

      .hamburger {
        opacity: 0;
        pointer-events: none;
        width: 0;
        height: 0;
        overflow: hidden;

        @media screen and (max-width: 700px){
          display: block;
          opacity: 1;
          pointer-events: auto;
          width: auto;
          height: auto;
          overflow:  initial;
        }

        &.turnOn {
            .hamburger-inner, .hamburger-inner::after, .hamburger-inner::before {
              animation-name: hamFluorescentOn;
              animation-duration: 2s;
            }
          }

          &.turnOff {
            .hamburger-inner, .hamburger-inner::after, .hamburger-inner::before {
              box-shadow: 0 0 0.5rem ${colors.lilacDeep(0.65)};
              background-color: ${colors.lilacBright(0.25)};
            }
          }
      }

      @keyframes hamFluorescentOn {
        0%  {
          box-shadow: 0 0 0.5rem ${colors.lilacDeep(0.65)};
          background-color: ${colors.lilacBright(0.25)};
          transition: none;
        }
        14% {
          box-shadow: 0 0 0.5rem ${colors.lilacDeep(0.65)};
          background-color: ${colors.lilacBright(0.25)};
        }
        18% {
          box-shadow: 0 0 0.5rem ${colors.lilacDeep()};
          background-color: ${colors.lilacBright()};
        }
        20% {
          box-shadow: 0 0 0.5rem ${colors.lilacDeep(0.65)};
          background-color: ${colors.lilacBright(0.25)};
        }
        28% {
          box-shadow: 0 0 0.5rem ${colors.lilacDeep()};
          background-color: ${colors.lilacBright()};
        }
        30% {
          box-shadow: 0 0 0.5rem ${colors.lilacDeep(0.65)};
          background-color: ${colors.lilacBright(0.25)};
        }
        38% {
          box-shadow: 0 0 0.5rem ${colors.lilacDeep(0.65)};
          background-color: ${colors.lilacBright(0.25)};
        }
        45% {
          box-shadow: 0 0 0.5rem ${colors.lilacDeep()};
          background-color: ${colors.lilacBright()};
        }
        50% {
          box-shadow: 0 0 0.5rem ${colors.lilacDeep()};
          background-color: ${colors.lilacBright()};
        }
        52% {
          box-shadow: 0 0 0.5rem ${colors.lilacDeep(0.65)};
          background-color: ${colors.lilacBright(0.25)};
        }
        100% {
          box-shadow: 0 0 0.5rem ${colors.lilacDeep()};
          transition: all 0.5s;
        }
      }

    /*!
    * Hamburgers
    * @description Tasty CSS-animated hamburgers
    * @author Jonathan Suh @jonsuh
    * @site https://jonsuh.com/hamburgers
    * @link https://github.com/jonsuh/hamburgers
    * @modified Simeon M Smith
    * @site https://www.simeonsmith.me
    */
    .hamburger {
      display: inline-block;
      padding: 0;
      cursor: pointer;
      font: inherit;
      color: inherit;
      text-transform: none;
      background-color: transparent;
      border: 0;
      margin: 0;
      overflow: visible;
      transition: transform 0.5s;
      &:focus {
          outline: none;
        }

      :hover {
      transform: scale(1.125);
      }
    }

    .hamburger-box {
      width: 34px;
      height: 28px;
      display: inline-block;
      position: relative; }

    .hamburger-inner {
      display: block;
      top: 50%;
      margin-top: -2px; }
      .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
        width: 34px;
        height: 2px;
        background-color: ${colors.lilacBright()};
        box-shadow: 0 0 0.5rem ${colors.lilacDeep()};
        position: absolute;
        transition: transform 0.15s ease; }
      .hamburger-inner::before, .hamburger-inner::after {
        content: "";
        display: block; }
      .hamburger-inner::before {
        top: -10px; }
      .hamburger-inner::after {
        bottom: -10px; }

    /*
    * Spring
    */
    .hamburger--spring .hamburger-inner {
      top: 2px;
      transition: background-color 0s 0.13s linear,
      box-shadow 0s ease 0.15s; }
    .hamburger--spring .hamburger-inner::before {
      top: 12px;
      transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }
    .hamburger--spring .hamburger-inner::after {
      top: 24px;
      transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }

    .hamburger--spring.is-active .hamburger-inner {
      transition-delay: 0.22s;
      background-color: transparent;
      box-shadow: none;
    }
    .hamburger--spring.is-active .hamburger-inner::before {
      top: 4px;
      transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
      transform: translate3d(0, 10px, 0) rotate(45deg); }
    .hamburger--spring.is-active .hamburger-inner::after {
      top: 4px;
      transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
      transform: translate3d(0, 10px, 0) rotate(-45deg); }
      `}
    </style>
  </button>
);

MenuButton.propTypes = {
  buttonActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MenuButton;
