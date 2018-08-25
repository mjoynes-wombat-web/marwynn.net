import css from 'styled-jsx/css';

import colors from '../consts/colors';

const layoutStyle = css.global`
@keyframes bgOn {
  0%  {
    opacity: 0.25;
    transition: none;
  }
  40% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}

html {
  font-size: 1em;

   @media screen and (max-width: 1700px) {
    font-size: 0.875em;
  }

  @media screen and (max-width: 925px) {
    font-size: 0.75em
  }

  @media screen and (max-width: 700px) {
    font-size: 0.625em;
  }
}

body {
  background: ${colors.navy()};
  color: ${colors.carolina()};
  font-family: 'Open Sans', 'Arial', 'sans-serif';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 300;  
}

code, body {
  font-size: 1.25rem;
}

h1 {
  color: white;
  font-family: 'Josefin Slab', 'serif';
  font-size: 2.875rem;
  font-weight: 600;
  margin: 2.375rem 0 1.25rem 0;
}

main .page-content > h1:first-child {
  margin-top:0;
  padding-right: 2.25rem;
  box-sizing: border-box;
}

h2 {
  color: white;
  font-family: 'Josefin Slab', 'Arial', sans-serif;
  font-size: 2.125rem;
  margin: 2.375rem 0 1.2375rem 0;

  &.sub-heading {
    color: ${colors.lilac()};
    font-family: 'Open Sans', 'Arial', sans-serif;
    font-weight: 300;
    font-size: 1.5rem;
    line-height: 2rem;
    margin: 1.375rem 0;
  }
}

h3 {
  color: white;
  font-family: 'Josefin Slab', 'Arial', sans-serif;
  font-size: 2rem;
  margin: 2.375rem 0 1.2375rem 0;

  &.sub-heading {
    color: ${colors.lilac()};
    font-family: 'Open Sans', 'Arial', sans-serif;
    font-weight: 300;
    font-size: 1.375rem;
    line-height: 1.875rem;
    margin: 1.25rem 0;
  }
}

p {
  margin: 1.125rem 0;
  max-width: 65ch;
}

p, code {
  line-height: 1.75rem;
}

a {
  &:link {
    color: ${colors.spring()};
    transition: color 0.5s;

    &:focus, &:active {
      color: ${colors.spring()};
    }
  }

  &:visited {
    color: ${colors.lilac()};
  }

  &:hover {
    color: ${colors.springLight()};
  }
}

main {
  margin: 5rem;
  min-width: calc(100% - 10rem);
  padding-right: 0.5rem;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 700px) {
    width: calc(100vw - 10rem);
    overflow: initial;
  };
}

.page-content {
  p, h2, h3 {
    max-width: 45rem;
  }
}

.wrapper {
  min-height: 100vh;
  min-width: 100%;
  overflow: auto;
  position: relative;
  box-sizing: border-box;

  @media screen and (max-width: 875px) {
    padding-bottom: 2rem;
  }
}

.background-wrapper {
  position: fixed;
  min-width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: -1;
  padding-left: 60%;
  line-height: 0;
  box-sizing: border-box;
  text-align: right;

  @media screen and (max-width: 700px) {
    position: fixed;
  }
}

#background {
  max-height: 100vh;
  min-height: 100vh;
  z-index: -1;
  overflow: hidden;
}

#background.turnOff {
  opacity: 0.25;
}

#background.turnOn {
  animation-name: bgOn;
  animation-duration: 2.5s;
}

.bg-photo-credit {
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 0;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  pointer-events: all;
  transition: none;
  text-align: right;
  font-weight: 700;
  min-width: 100%;
  box-sizing: border-box;

  a:link, a:visited, a:active, a:focus {
    color: ${colors.lilacBright(0.75)};
    text-decoration: none;
  }

  @media screen and (max-width: 875px) {
    position: absolute;
    bottom: 0;
    text-align: center;
    padding: 0.75rem
  }

  @media screen and (max-width: 700px) {
    right: initial;
    color: ${colors.lilacBright(0.75)};

    a:link, a:visited, a:active, a:focus {
      color: ${colors.lilacBright(0.75)};
    }
  }
}

.background-gradient {
  background: linear-gradient(to top, ${colors.navy(0)} 5%, ${colors.navy(0.65)} 30%);
  left: 0;
  min-height: 100vh;
  min-width: 100vw;
  position: absolute;
  top: 0;
  z-index: 0;
  transition: opacity 0.5s;
  pointer-events: none;

  @media screen and (max-width: 700px) {
    position: fixed;
    background: radial-gradient(at top right, ${colors.navy(0)} 4rem,
${colors.navy(0.65)} 18rem);

    &.turnOff {
      opacity: 0;
    }
  }
}
`;

export default layoutStyle;
