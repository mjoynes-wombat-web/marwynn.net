import styled from 'styled-components';

import colors from '../consts/colors';

const Button = styled.button`

  @keyframes pulse {
    0% {
      background-color: ${colors.lilacBright()};
      box-shadow: inset 0 0 0.75rem ${colors.lilacDeep()},
      0 0 0.75rem ${colors.lilac(1)};
    }
    50% {
      background-color: ${colors.lilacBright(0.75)};
      box-shadow: inset 0 0 0.5rem ${colors.lilacDeep(0.65)};
    }

    100% {
      background-color: ${colors.lilacBright()};
      box-shadow: inset 0 0 0.75rem ${colors.lilacDeep()},
      0 0 0.75rem ${colors.lilac(1)};
    }
  }
  font-family: 'Josefin Sans', 'Arial', sans-serif;
  font-weight: 400;
  cursor: pointer;
  appearance: none;
  background-color: ${colors.lilacBright(0.75)};
  border: 0;
  border-radius: 0.5rem;
  box-shadow: inset 0 0 0.5rem ${colors.lilacDeep(0.65)};
  color: ${colors.navy()};
  display: block;
  font-size: 1.375rem;
  margin: 0 auto;
  margin-top: 2rem;
  outline: none;
  padding: 1rem 0 0.75rem 0;
  transition: all 0.5s;
  width: 100%;

  &.processing {
    animation-name: pulse;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }

  @media screen and (max-width: 1700px) {
    font-size: 1.25rem;
  }

  @media screen and (max-width: 925px) {
    font-size: 1.125rem;
  }

  @media screen and (max-width: 700px) {
    font-size: 1rem;
  }

  &:hover {
    background-color: ${colors.lilacBright()};
    box-shadow: inset 0 0 0.75rem ${colors.lilacDeep()},
      0 0 0.75rem ${colors.lilac(1)};
  }

  :disabled {
    cursor: not-allowed;
  }
`;

export default Button;