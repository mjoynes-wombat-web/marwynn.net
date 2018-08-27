import React from 'react';
import PropTypes from 'prop-types';
import css from 'styled-jsx/css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import TransitionHandler from './TransitionHandler';

const position = css.resolve`
  left: 50%;
  position: absolute;
  top: 278px;
  transform: translateX(-50%);
`;

const enter = css.resolve`
  opacity: 0.01;
`;

const enterActive = css.resolve`
  opacity: 1;
  transition: opacity 250ms ease-in;
`;

const exit = css.resolve`
  ${position} opacity: 1;
`;

const exitActive = css.resolve`
  ${position} opacity: 0.01;
  transition: opacity 250ms ease-out;
`;

const PageTransition = ({ children, location }) => (
<>
  <TransitionGroup>
    <CSSTransition
      classNames="page-animation"
      timeout={{ enter: 500, exit: 250 }}
      key={location.pathname}
    >
      <TransitionHandler location={location}>
        {/* This div receives the classes for transitioning. */}
        {children}
      </TransitionHandler>
    </CSSTransition>
  </TransitionGroup>
  <style jsx global>
    {`
      .page-animation-enter {
        opacity: 0;
        transition: opacity 0.25s linear 0.25s;

        &.page-animation-enter-active {
          opacity: 1;
        }
      }

      .page-animation-exit {
        opacity: 1;
        transition: opacity 0.25s;

        &.page-animation-exit-active {
          opacity: 0;
        }
      }
      `}
  </style>
  {enter.styles}
  {enterActive.styles}
  {exit.styles}
  {exitActive.styles}
</>
);

PageTransition.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default PageTransition;
