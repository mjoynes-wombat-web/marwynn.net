import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../consts/colors';

import { EmailInput } from './inputs';

import validEmail from '../helpers/validEmail';

console.log(validEmail);

class UnstyledContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs : {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
    };

    this.onChange = this.onChange.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
  }

  onChange(e, v = null) {
    console.log(e);
    const { target } = e;
    const { name } = target;
    const value = v || target.value;
    const { inputs } = this.state;

    inputs[name] = value;
    console.log(inputs);

    this.setState({
      inputs,
    });
  }

  onChangeEmail(e) {
    this.onChange(e);
  }

  render() {
    return (
      <form className={this.props.className} action={this.props.action}>
        <h2>Send Me a Message</h2>
        <EmailInput
          onChange={this.onChangeEmail}
          value={this.state.inputs.email}
          error={!validEmail(this.state.inputs.email) && this.state.inputs.email ? 'Please enter a valid email.' : null}
        />
      </form>
    );
  }
}

UnstyledContactForm.propTypes = {
  action: PropTypes.string,
  className: PropTypes.string,
};

UnstyledContactForm.defaultProps = {
  action: '',
  className: '',
};

const ContactForm = styled(UnstyledContactForm)`
`;

export default ContactForm;
