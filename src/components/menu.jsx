import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../consts/colors';

const UnstyledMenu = ({ className }) => (
  <nav className={className} id="mainMenu">
    <ul>
      <li className="active">
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

UnstyledMenu.propTypes = {
  className: PropTypes.string,
};

UnstyledMenu.defaultProps = {
  className: '',
};


const Menu = styled(UnstyledMenu)`
bottom: 0;
box-sizing: border-box;
padding: 2rem 8%;
position: absolute;
width: 100%;

ul {
  display: flex;
  list-style: none;
  padding: 0;
  justify-content: space-around;
  align-items: center;
  margin: 0;

  li {
    display: flex;
    font-size: 2rem;
    margin: 0;
    color: ${colors.lilacBright};
    font-family: 'Josefin Sans', 'Open Sans', 'Arial', sans-serif;
    text-shadow: 0 0 0.125rem ${colors.lilacDeep};
    transition: all 0.5s;
    transition-timing-function: cubic-bezier(0.29, -0.69, 0.49, 1.46);
    
    &.slash {
      cursor: default;
    }

    &.active {
      font-weight: 400;
    }

    a, a:link, a:visited, a:active, a:focus {
      text-decoration: none;
      color: ${colors.lilacBright};
    }

    &:hover:not(.slash) {
      transform: scale(1.0625);
      text-shadow: 0 0 0.75rem ${colors.lilacDeep};
    }
  }
}
`;

export default Menu;
