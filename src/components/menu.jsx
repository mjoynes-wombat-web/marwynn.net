import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../consts/colors';

function animateMenuItem(menuItem, duration) {
  menuItem.classList.add('turnOff');
  menuItem.addEventListener(
    'animationend',
    () => menuItem.classList.remove('turnOn'),
    { once: true },
  );

  setTimeout(() => {
    menuItem.classList.remove('turnOff');
    menuItem.classList.add('turnOn');
  }, duration);
}

function animateBg(duration) {
  const bgImg = document.getElementById('background');

  bgImg.classList.add('turnOff');

  setTimeout(() => {
    bgImg.classList.remove('turnOff');
    bgImg.classList.add('turnOn');
  }, duration);
}

function animateLoad() {
  const menuItems = document.querySelectorAll('#mainMenu li');
  const durations = [];

  menuItems.forEach((menuItem) => {
    const duration = Math.random() * 1000;
    durations.push(duration);
    animateMenuItem(menuItem, duration);
  });

  durations.sort((a, b) => a - b);
  animateBg(durations[0]);
}

class UnstyledMenu extends React.Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    animateLoad();
  }
  render() {
    return (
      <nav className={this.props.className} id="mainMenu">
        <ul>
          <li>
            <Link to="/" activeClassName="active" exact>Home</Link>
          </li>
          <li className="slash">/</li>
          <li>
            <Link to="/my-work/" activeClassName="active">My Work</Link>
          </li>
          {/* <li className="slash">/</li>
          <li>
            <Link to="/who-am-i/">Who Am I?</Link>
          </li> */}
          <li className="slash">/</li>
          <li>
            <Link to="/make-contact/" activeClassName="active">Make Contact</Link>
          </li>
          <li className="slash">/</li>
          <li>
            <Link to="/coding-with-kids/" activeClassName="active">Coding With Kids</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

UnstyledMenu.propTypes = {
  className: PropTypes.string,
};

UnstyledMenu.defaultProps = {
  className: '',
};


const Menu = styled(UnstyledMenu)`
@keyframes fluorescentOn {
  0%  {
    text-shadow: 0 0 0.125rem ${colors.lilacDeep(0.65)};
    color: ${colors.lilacBright(0.25)};
    transition: none;
  }
  14% {
    text-shadow: 0 0 0.125rem ${colors.lilacDeep(0.65)};
    color: ${colors.lilacBright(0.25)};
  }
  18% {
    text-shadow: 0 0 0.125rem ${colors.lilacDeep()};
    color: ${colors.lilacBright()};
  }
  20% {
    text-shadow: 0 0 0.125rem ${colors.lilacDeep(0.65)};
    color: ${colors.lilacBright(0.25)};
  }
  28% {
    text-shadow: 0 0 0.125rem ${colors.lilacDeep()};
    color: ${colors.lilacBright()};
  }
  30% {
    text-shadow: 0 0 0.125rem ${colors.lilacDeep(0.65)};
    color: ${colors.lilacBright(0.25)};
  }
  38% {
    text-shadow: 0 0 0.125rem ${colors.lilacDeep(0.65)};
    color: ${colors.lilacBright(0.25)};
  }
  45% {
    text-shadow: 0 0 0.125rem ${colors.lilacDeep()};
    color: ${colors.lilacBright()};
  }
  50% {
    text-shadow: 0 0 0.125rem ${colors.lilacDeep()};
    color: ${colors.lilacBright()};
  }
  52% {
    text-shadow: 0 0 0.125rem ${colors.lilacDeep(0.65)};
    color: ${colors.lilacBright(0.25)};
  }
  100% {
    text-shadow: 0 0 0.125rem ${colors.lilacDeep()};
    transition: all 0.5s;
  }
}

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
    font-size: 2.25rem;
    margin: 0;
    color: ${colors.lilacBright()};
    font-family: 'Josefin Sans', 'Open Sans', 'Arial', sans-serif;
    text-shadow: 0 0 0.125rem ${colors.lilacDeep()};
    transition: all 0.5s;
    transition-timing-function: cubic-bezier(0.29, -0.69, 0.49, 1.46);

    @media screen and (max-width: 1700px) {
      font-size: 2rem;
    }

    @media screen and (max-width: 1100px) {
      font-size: 1.75rem;
    }

    @media screen and (max-width: 900px) {
      font-size: 1.5rem;
    }

    @media screen and (max-width: 700px) {
      /* Change to hamburger menu */
      display: none;
    }
    
    &.slash {
      cursor: default;
    }

    a, a:link, a:visited, a:active, a:focus {
      text-decoration: none;
      color: ${colors.lilacBright()};

      &.active {
        font-weight: 400;
      }
    }

    &:hover:not(.slash) {
      transform: scale(1.0625);
      text-shadow: 0 0 0.75rem ${colors.lilacDeep()};
    }

    &.turnOn {
      animation-name: fluorescentOn;
      animation-duration: 2s;

      a, a:link, a:visited, a:active, a:focus {
        animation-name: fluorescentOn;
        animation-duration: 2s;
      }
    }

    &.turnOff {
      text-shadow: 0 0 0.125rem ${colors.lilacDeep(0.65)};
      color: ${colors.lilacBright(0.25)};
      transition: none;

      a, a:link, a:visited, a:active, a:focus {
        text-shadow: 0 0 0.125rem ${colors.lilacDeep(0.65)};
        color: ${colors.lilacBright(0.25)};
      }
    }
  }
}
`;

export default Menu;
