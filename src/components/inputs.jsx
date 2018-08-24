import React from 'react';
import PropTypes from 'prop-types';
import css from 'styled-jsx/css';

import colors from '../consts/colors';

const inputStyling = css`
margin-top: 1rem;

textarea {
  min-height: 10rem;
}

input, textarea {
    appearance: none;
    background: ${colors.navy(0.3)};
    box-shadow: inset 0 0 0.25rem ${colors.lilac(0.5)};
    border: none;
    border-radius: 0.25rem;
    border: 1px solid transparent;
    box-sizing: border-box;
    color: ${colors.lilacBright()};
    display: block;
    font-family: 'Open Sans', 'Arial', sans-serif;
    font-size: 1.25rem;
    font-weight: 300;
    line-height: normal;
    margin: 0.375rem 0 0 0;
    max-width: 100%;
    padding: 0.5rem;
    transition: all 0.5s;
    width: 15rem;

    @media screen and (max-width: 1700px) {
      font-size: 1.125rem;
    }

    @media screen and (max-width: 925px) {
      font-size: 1rem;
    }
  
    @media screen and (max-width: 700px) {
      font-size: 0.875rem;
    }

    &:hover, &:focus, &:active {
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
    margin: 0.125rem 0;
    color: ${colors.lilac()};
    font-size: 0.875rem;
    line-height: normal;
  
    @media screen and (max-width: 700px) {
      font-size: 0.75rem;
    }
  }
`;

export const Label = ({
  children,
  id,
  required,
  text,
}) => (
  // eslint-disable-next-line
  <label htmlFor={id}>
    {text}
    {required ? '*' : ''}
    {children}
    <style jsx>
      {`
      font-family: 'Josefin Sans', 'Arial', sans-serif;
      font-weight: 300;
      font-size: 1.5rem;
      color: ${colors.spring()};

      @media screen and (max-width: 1700px) {
        font-size: 1.375rem;
      }

      @media screen and (max-width: 925px) {
        font-size: 1.25rem;
      }

      @media screen and (max-width: 700px) {
        font-size: 1.125rem;
      }
      `}
    </style>
  </label>
);

Label.propTypes = {
  text: PropTypes.string.isRequired,
  required: PropTypes.bool,
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Label.defaultProps = {
  required: false,
};

export const Input = ({
  className,
  label,
  id,
  value,
  onChange,
  placeholder,
  type,
  error,
  required,
  width,
}) => (
  <div className={className}>
    <Label text={label} id={id} required={required}>
      <input
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        id={id}
        name={id}
        value={value}
        required={required}
        style={{
          width,
        }}
      />
    </Label>
    <p className="error">
      {error}
      &nbsp;
    </p>
    <style jsx>
      {inputStyling}
    </style>
  </div>
);

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
  width: PropTypes.string,
};

Input.defaultProps = {
  className: '',
  value: '',
  placeholder: '',
  error: '',
  required: false,
  width: '20rem',
};

export const TextArea = ({
  className,
  label,
  id,
  value,
  onChange,
  required,
  width,
}) => (
  <div className={className}>
    <Label text={label} id={id} required={required}>
      <textarea
        onChange={onChange}
        id={id}
        name={id}
        value={value}
        required={required}
        style={{
          width,
        }}
      />
    </Label>
    <style jsx>
      {inputStyling}
    </style>
  </div>
);

TextArea.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  width: PropTypes.string,
};

TextArea.defaultProps = {
  className: '',
  value: '',
  required: false,
  width: '20rem',
};
