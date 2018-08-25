import React from 'react';
import { Link } from 'gatsby';

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

function animateLoad(siteLoad) {
  const menuListItems = document.querySelectorAll('#mainMenu li');
  const menuButton = document.querySelector('.hamburger');
  const menuItems = Array.from(menuListItems);
  if (siteLoad) { menuItems.push(menuButton); }

  const durations = [];

  menuItems.forEach((menuItem) => {
    const duration = Math.random() * (siteLoad ? 1000 : 400);
    durations.push(duration);
    animateMenuItem(menuItem, duration);
  });

  durations.sort((a, b) => a - b);

  if (siteLoad) {
    animateBg(durations[0]);
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
        <MenuButton
          buttonActive={isOpen}
          onClick={this.clickMenu}
        />
        <ul>
          <li>
            <Link to="/" activeClassName="active" exact="true" onClick={this.selectPage}>Home</Link>
          </li>
          <li className="slash">/</li>
          <li>
            <Link to="/my-work/" activeClassName="active" onClick={this.selectPage}>My Work</Link>
          </li>
          {/* <li className="slash">/</li>
          <li>
            <Link to="/who-am-i/">Who Am I?</Link>
          </li> */}
          <li className="slash">/</li>
          <li>
            <Link to="/make-contact/" activeClassName="active" onClick={this.selectPage}>Make Contact</Link>
          </li>
          <li className="slash">/</li>
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
            bottom: 0;
            box-sizing: border-box;
            padding: 2rem 8%;
            position: absolute;
            width: 100%;
            pointer-events: none;

            > * {
              pointer-events: all;
            }

            @media screen and (max-width: 700px){
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

                &.is-open {
                  background: linear-gradient(to left, ${colors.navy(0)} 8%, ${colors.navy(0.75)} 35%);
                  pointer-events: initial;
                  position: fixed;

                  ul {
                  max-height: 20rem;
                  overflow: visible;

                  li {
                    opacity: 1;
                  }
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
                font-family: 'Open Sans', 'Arial', sans-serif;
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

                &.turnOn {
                  animation-name: fluorescentOn;
                  animation-duration: 2s;

                  @media screen and (max-width: 700px) {
                    animation-name: mobileFluoOn;
                    animation-duration: 0.5s;
                  }
                }

                &.turnOn :global(#mainMenu a, #mainMenu a:link, #mainMenu a:visited, #mainMenu a:active, #mainMenu a:focus) {
                  animation-name: fluorescentOn;
                  animation-duration: 2s;

                  @media screen and (max-width: 700px){
                    animation-name: mobileFluoOn;
                    animation-duration: 0.5s;
                  }
                }

                &.turnOff {
                  text-shadow: 0 0 0.125rem ${colors.lilacDeep(0.65)};
                  color: ${colors.lilacBright(0.25)};
                  transition: none;
                }

                &.turnOff :global( #mainMenu a, #mainMenu a:link, #mainMenu a:visited, #mainMenu a:active, #mainMenu a:focus) {
                  text-shadow: 0 0 0.125rem ${colors.lilacDeep(0.65)};
                  color: ${colors.lilacBright(0.25)};
                }
              }
              li :global( #mainMenu a, #mainMenu a:link, #mainMenu a:visited, #mainMenu a:active, #mainMenu a:focus) {
                text-decoration: none;
                color: ${colors.lilacBright()};
                text-shadow: 0 0 0.125rem ${colors.lilacDeep()};
                transition: all 0.5s;
                transition-timing-function: cubic-bezier(0.29, -0.69, 0.49, 1.46);

                &.active {
                  font-weight: 400;
                  transform: scale(1.125);

                  &:hover {
                    transform: scale(1.125);
                    text-shadow: 0 0 0.125rem ${colors.lilacDeep()};
                    transition: all 0s;
                  }
                }
              }

              li :global( #mainMenu :not(.slash) a:hover) {
                transform: scale(1.0625);
                text-shadow: 0 0 0.75rem ${colors.lilacDeep()};
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
