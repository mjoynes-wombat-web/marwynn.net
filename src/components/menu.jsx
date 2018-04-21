import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import '../consts/colors.scss';

const Menu = ({ className }) => (
  <nav className={className} id="mainMenu">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li className="slash">/</li>
      <li>
        <Link to="/my-work/">My Work</Link>
      </li>
      <li className="slash">/</li>
      <li>
        <Link to="/who-am-i/">Who Am I?</Link>
      </li>
      <li className="slash">/</li>
      <li>
        <Link to="/make-contact/">Make Contact</Link>
      </li>
      <li className="slash">/</li>
      <li>
        <Link to="/coding-with-kids/">Coding With Kids</Link>
      </li>
    </ul>
  </nav>
);

export default styled(Menu)`
  bottom: 0;
  box-sizing: border-box;
  padding: 2.5rem;
  position: absolute;
  width: 100%;

  ul {
    display: flex;
    list-style: none;
    padding: 0;
    justify-content: space-around;

    li {
      display: flex;
      font-size: 2rem;
      
      &.slash {
        font-size: 2.25rem;
        font-weight: bold;
      }

      a {
        text-decoration: none;
      }
    }
  }
`;

Menu.propTypes = {
  className: PropTypes.string,
};

Menu.defaultProps = {
  className: '',
};
