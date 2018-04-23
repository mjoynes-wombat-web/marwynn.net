import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../consts/colors';

const inputStyling = () => `
input {
    appearance: none;
    background-color: ${colors.lilacBright(0.05)};
    box-shadow: inset 0 0 0.25rem ${colors.lilac(0.35)};
    border: none;
    border-radius: 0.25rem;
    border: 1px solid transparent;
    box-sizing: border-box;
    color: ${colors.lilacBright()};
    display: block;
    font-family: 'Open Sans', 'Arial', sans-serif;
    font-size: 1.125rem;
    font-weight: 300;
    line-height: normal;
    margin: 0.375rem 0;
    max-width: 100%;
    padding: 0.5rem;
    transition: all 0.5s;
    width: 15rem;

    &:hover {
      background-color: ${colors.navy()};
      box-shadow: inset 0 0 0.25rem ${colors.lilac(0.25)};
    }

    &::placeholder {
      color: ${colors.lilacBright(0.8)};
    }

    &:focus {
      border: 1px solid ${colors.lilac(0.5)};
      outline: none;
    }
  }

  .error {
    margin: 0.5rem 0;
    color: ${colors.tomato()};
    font-size: 0.875rem;
    line-height: normal;
  }
`;

const UnstyledLabel = ({
  className,
  children,
  id,
  required,
  text,
}) => (
  <label htmlFor={id} className={className}>
    {text} {required ? '*' : ''}
    {children}
  </label>
);

UnstyledLabel.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  required: PropTypes.bool,
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

UnstyledLabel.defaultProps = {
  className: '',
  required: false,
};

const Label = styled(UnstyledLabel)`
  font-family: 'Josefin Sans', 'Arial', sans-serif;
  font-weight: 300;
  font-size: 1.375rem;
  color: ${colors.spring()};
`;

const UnstyledEmail = ({
  className,
  value,
  onChange,
  error,
}) => (
  <div className={className}>
    <Label text="Email" id="email" required>
      <input
        onChange={onChange}
        type="email"
        placeholder="Please enter your email."
        id="email"
        name="email"
        value={value}
      />
    </Label>
    <p className="error">{error}&nbsp;</p>
  </div>
);

UnstyledEmail.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

UnstyledEmail.defaultProps = {
  className: '',
  value: '',
  error: '',
};

export const EmailInput = styled(UnstyledEmail)`
  ${inputStyling()}
  input {
    width: 20rem;
  }
`;

export default EmailInput;
