import React from 'react';
import { Link } from 'gatsby';

import colors from '../../consts/colors';

import MenuButton from './menu-button';

function animateMenuItem(menuItem, delay) {
  console.log(delay);
  console.log(menuItem);
  menuItem.classList.add('turnOff');
  menuItem.addEventListener(
    'animationend',
    () => menuItem.classList.remove('turnOn'),
    { once: true },
  );

  setTimeout(() => {
    menuItem.classList.remove('turnOff');
    menuItem.classList.add('turnOn');
  }, delay);
}

function animateBg(delay) {
  const bgImg = document.getElementById('background');

  bgImg.classList.add('turnOff');
  setTimeout(() => {
    bgImg.classList.remove('turnOff');
    bgImg.classList.add('turnOn');
  }, delay);
}

function animateLoad(siteLoad) {
  const menuListItems = document.querySelectorAll('#mainMenu li');
  const menuButton = document.querySelector('.hamburger');
  const menuItems = Array.from(menuListItems);
  if (siteLoad) { menuItems.push(menuButton); }

  const delays = [];

  menuItems.forEach((menuItem) => {
    const delay = Math.random() * (siteLoad ? 1000 : 400);
    delays.push(delay);
    animateMenuItem(menuItem, delay);
  });
  delays.sort((a, b) => a - b);

  if (siteLoad) {
    animateBg(delays[0]);
  }
}

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.selectPage = this.selectPage.bind(this);
    this.clickMenu = this.clickMenu.bind(this);
  }

  componentDidMount() {
    animateLoad(true);
  }

  componentDidUpdate() {
    const { isOpen } = this.state;
    if (isOpen) { animateLoad(false); }
  }

  selectPage() {
    const bgGradient = document.querySelector('.background-gradient');
    bgGradient.classList.remove('turnOff');
    this.setState({ isOpen: false });
  }

  clickMenu() {
    const { isOpen } = this.state;
    const bgGradient = document.querySelector('.background-gradient');
    if (!isOpen) {
      bgGradient.classList.add('turnOff');
    } else {
      bgGradient.classList.remove('turnOff');
    }
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <nav className={isOpen ? 'is-open' : ''} id="mainMenu">
        <div className="menu-background" />
        <MenuButton
          buttonActive={isOpen}
          onClick={this.clickMenu}
        />
        <ul>
          <li>
            <Link to="/" activeClassName="active" exact="true" onClick={this.selectPage}>Home</Link>
          </li>
          <li>
            <Link to="/my-work/" activeClassName="active" onClick={this.selectPage}>My Work</Link>
          </li>
          <li>
            <Link to="/make-contact/" activeClassName="active" onClick={this.selectPage}>Make Contact</Link>
          </li>
          <li>
            <Link to="/coding-with-kids/" activeClassName="active" onClick={this.selectPage}>Coding With Kids</Link>
          </li>
        </ul>
        <style jsx>
          {`
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

          @keyframes mobileFluoOn {
            0%  {
              text-shadow: 0 0 0.125rem ${colors.lilacDeep(0.65)};
              color: ${colors.lilacBright(0.25)};
              transition: none;
            }
            38% {
              text-shadow: 0 0 0.125rem ${colors.lilacDeep(0.85)};
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
              text-shadow: 0 0 0.125rem ${colors.lilacDeep(0.85)};
              color: ${colors.lilacBright(0.25)};
            }
            100% {
              text-shadow: 0 0 0.125rem ${colors.lilacDeep()};
              transition: all 0.5s;
            }
          }

          nav#mainMenu {
            top: 0;
            right: 0;
            box-sizing: border-box;
            padding: 3rem 2rem;
            position: absolute;
            pointer-events: none;
            z-index: 10;

            > * {
              pointer-events: all;
            }

            .menu-background {
              opacity: 0;
              background: linear-gradient(to left, ${colors.navy(0)} 8%, ${colors.navy(0.75)} 35%);
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              position: absolute;
              transition: opacity 0.15s;
              pointer-events: none;
              z-index: -1;
            }

            @media screen and (max-width: 1300px){
              top: 0;
              right: 0;
              height: 100vh;
              z-index: 100;
              align-items: flex-end;
              flex-direction: column;
              display: flex;
              background: transparent;
              transition: background 2s;
              pointer-events: none;
              width: 100%;
              position: fixed;

                &.is-open {
                  position: fixed;
                  pointer-events: initial;

                  .menu-background {
                    opacity: 1;
                  }

                  ul {
                  max-height: 20rem;
                  overflow: visible;

                  li {
                    opacity: 1;
                    font-size: 2rem;
                  }
                }
              }
            }

            @media screen and (max-width: 725px) {
              width: 100%;
              position: absolute;
            }

            ul {
              display: flex;
              list-style: none;
              padding: 0;
              justify-content: space-around;
              align-items: center;
              margin: 0;
              line-height: 0;

              @media screen and (max-width: 1300px){
                flex-direction: column;
                align-items: flex-end;
                margin-top: 2rem;
                max-height: 0;
                transition: max-height 0.25s;
                overflow: hidden;
              }

              li {
                display: flex;
                font-size: 1.5rem;
                margin: 0;
                color: ${colors.lilacBright()};
                font-family: 'Josefin Slab', serif;
                line-height: normal;
                overflow: visible;
                padding: 0 1.25rem;

                @media screen and (max-width: 1300px) {
                  flex-direction: column;
                  margin-bottom: 1rem;
                  opacity: 0;
                  padding: 0.5rem 0;
                  transition: transform 0.5s, box-shadow 0.5s, opacity 0.15s;
                }

                &.turnOn :global(a) {
                  &:link, &:visited, &:active, &:focus, & {
                    animation-name: fluorescentOn;
                    animation-duration: 2s;

                    @media screen and (max-width: 1300px){
                      animation-name: mobileFluoOn;
                      animation-duration: 0.5s;
                    }
                  }
                }

                &.turnOff :global(a) {
                  &:link, &:visited, &:active, &:focus, & {
                    text-shadow: 0 0 0.125rem ${colors.lilacDeep(0.65)};
                    color: ${colors.lilacBright(0.25)};
                  }
                }
              }
              li :global(a) {
                &:link, &:visited, &:active, &:focus {
                  text-decoration: none;
                  text-shadow: 0 0 0.125rem ${colors.lilacDeep()};
                  transition: text-shadow 0.5s, transform 0.5s;
                  transition-timing-function: cubic-bezier(0.29, -0.69, 0.49, 1.46);
                  color: ${colors.lilacBright()};

                  &.active {
                    font-weight: 600;
                    
                    @media screen and (min-width: 1301px) {
                      transform: scale(1.125) translate(0, -0.1875rem);
                    }
                  }
                }
              }

              li :global(a:hover) {
                transform: scale(1.125);
                text-shadow: 0 0 0.75rem ${colors.lilacDeep()};

                @media screen and (max-width: 1300px) {
                  transform-origin: right;
                }
              }
            }
          }
          `}
        </style>
      </nav>
    );
  }
}

export default Menu;
