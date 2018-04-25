import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../consts/colors';

const UnstyledMenuButton = ({ className, buttonActive, onClick }) => (
  <button
    className={`hamburger hamburger--spring ${className} ${buttonActive ? 'is-active' : ''}`}
    type="button"
    onClick={onClick}
  >
    <span className="hamburger-box">
      <span className="hamburger-inner" />
    </span>
  </button>
);

const MenuButton = styled(UnstyledMenuButton)`
/*!
 * Hamburgers
 * @description Tasty CSS-animated hamburgers
 * @author Jonathan Suh @jonsuh
 * @site https://jonsuh.com/hamburgers
 * @link https://github.com/jonsuh/hamburgers
 * @modified Simeon M Smith
* @site https://www.simeonsmith.me
 */
  &.hamburger {
    padding: 15px 15px;
    display: inline-block;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;
    transition: all 0.5s;

    &:focus {
      outline: none;
    }

    &:hover {
      transform: scale(1.0625);
      .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
        box-shadow: 0 0 1rem ${colors.lilacDeep()};
        transition: box-shadow 0.5s;
      }
    }

    .hamburger-box {
      width: 34px;
      height: 28px;
      display: inline-block;
      position: relative;
    }

    .hamburger-inner {
      display: block;
      top: 50%;
      margin-top: -2px;
    }

    .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
      width: 34px;
      height: 2px;
      background-color: ${colors.lilacBright()};
      box-shadow: 0 0 0.5rem ${colors.lilacDeep()};
      position: absolute;
      transition: transform 0.15s ease,
      box-shadow 0.5s ease;
    }

    .hamburger-inner::before, .hamburger-inner::after {
      content: "";
      display: block;
    }
    .hamburger-inner::before {
      top: -10px;
    }
    .hamburger-inner::after {
      bottom: -10px;
    }
  }

/*
* Spring
*/
  &.hamburger--spring .hamburger-inner {
    top: 2px;
    transition: background-color 0s 0.13s linear,
    box-shadow 0.5s ease; }
  &.hamburger--spring .hamburger-inner::before {
    top: 12px;
    transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19),
    box-shadow 0.5s ease; }
  &.hamburger--spring .hamburger-inner::after {
    top: 24px;
    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19),
    box-shadow 0.5s ease; }

  &.hamburger--spring.is-active .hamburger-inner {
    transition-delay: 0.22s;
    background-color: transparent;
    box-shadow: none;
  }
  &.hamburger--spring.is-active .hamburger-inner::before {
    top: 4px;
    transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1),
    box-shadow 0.5s ease;
    transform: translate3d(0, 10px, 0) rotate(45deg); }
  &.hamburger--spring.is-active .hamburger-inner::after {
    top: 4px;
    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1),
    box-shadow 0.5s ease;
    transform: translate3d(0, 10px, 0) rotate(-45deg); }
`;

export default MenuButton;