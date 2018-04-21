import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

const Menu = ({ pages }) => (
  <nav id="mainMenu">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li><Link to="/my-work/">My Work</Link></li>
      <li><Link to="/who-am-i/">Who Am I?</Link></li>
      <li><Link to="/make-contact/">Make Contact</Link></li>
      <li><Link to="/coding-with-kids/">Coding With Kids</Link></li>
    </ul>
  </nav>
);

export default Menu;

Menu.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.string),
};

Menu.defaultProps = {
  pages: [],
};
