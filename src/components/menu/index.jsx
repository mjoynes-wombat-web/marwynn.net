import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../../consts/colors';

import MenuButton from './menu-button';

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

function animateMenuBg(duration) {
  const bgGradient = document.querySelector('.background-gradient');

  bgGradient.classList.add('turnOff');
  console.log(duration);
}

function animateLoad(siteLoad) {
  const menuListItems = document.querySelectorAll('#mainMenu li');
  const menuButton = document.querySelector('.hamburger');
  const menuItems = Array.from(menuListItems);
  if (siteLoad) { menuItems.push(menuButton); }

  const durations = [];

  menuItems.forEach((menuItem) => {
    const duration = Math.random() * (siteLoad ? 1000 : 500);
    durations.push(duration);
    animateMenuItem(menuItem, duration);
  });

  durations.sort((a, b) => a - b);

  if (siteLoad) {
    animateBg(durations[0]);
  }
}

class UnstyledMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.clickMenu = this.clickMenu.bind(this);
  }
  componentDidMount() {
    animateLoad(true);
  }

  componentDidUpdate() {
    if (this.state.isOpen) { animateLoad(false); }
  }

  clickMenu() {
    const bgGradient = document.querySelector('.background-gradient');
    if (!this.state.isOpen) {
      bgGradient.classList.add('turnOff');
    } else {
      bgGradient.classList.remove('turnOff');
    }
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    return (
      <nav className={`${this.props.className} ${this.state.isOpen ? 'is-open' : ''}`} id="mainMenu">
        <MenuButton
          buttonActive={this.state.isOpen}
          onClick={this.clickMenu}
        />
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

bottom: 0;
box-sizing: border-box;
padding: 2rem 8%;
position: absolute;
width: 100%;

@media screen and (max-width: 700px){
  top: 0;
  right: 0;
  width: auto;
  height: auto;
  z-index: 100;
  align-items: flex-end;
  flex-direction: column;
  display: flex;
  width: 100vw;
  background: transparent;
  transition: background 2s;

    &.is-open {
      background: linear-gradient(to left, ${colors.navy(0)} 8%, ${colors.navy(0.75)} 35%);

      ul {
      max-height: 20rem;
      overflow: visible;

      li {
        opacity: 1;
      }
    }
  }
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


ul {
  display: flex;
  list-style: none;
  padding: 0;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  line-height: 0;

  @media screen and (max-width: 700px){
    flex-direction: column;
    align-items: flex-end;
    margin-top: 2rem;
    max-height: 0;
    transition: max-height 0.25s;
    overflow: hidden;
  }

  li {
    display: flex;
    font-size: 2.25rem;
    margin: 0;
    color: ${colors.lilacBright()};
    font-family: 'Josefin Sans', 'Open Sans', 'Arial', sans-serif;
    text-shadow: 0 0 0.125rem ${colors.lilacDeep()};
    transition: all 0.5s;
    transition-timing-function: cubic-bezier(0.29, -0.69, 0.49, 1.46);
    line-height: normal;
    overflow: visible;

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
      flex-direction: column;
      margin-bottom: 1rem;
      opacity: 0;
      transition: transform 0.5s, box-shadow 0.5s, opacity 0.15s;
    }
    
    &.slash {
      cursor: default;

      @media screen and (max-width: 700px){
        opacity: 0;
        pointer-events: none;
        width: 0;
        height: 0;
        overflow: hidden;
      }
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

      @media screen and (max-width: 700px){ {
        animation-duration: 1.5s;
      }

      a, a:link, a:visited, a:active, a:focus {
        animation-name: fluorescentOn;
        animation-duration: 2s;

        @media screen and (max-width: 700px){
          animation-duration: 1.5s;
        }
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
