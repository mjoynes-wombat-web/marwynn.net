import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';

import { Input, TextArea } from './inputs';
import Button from './button';

import validEmail from '../helpers/validEmail';

class UnstyledContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      messageSent: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  onChange(e, v = null) {
    const { target } = e;
    const { name } = target;
    const value = v || target.value;
    const { inputs } = this.state;

    inputs[name] = value;

    this.setState({
      inputs,
    });
  }

  onChangeEmail(e) {
    this.onChange(e);
  }

  sendMessage(e) {
    e.preventDefault();
    
    const Message = ({
      name,
      email,
      subject,
      message,
    }) =>
      (
        {
          name,
          email,
          subject,
          message,
        }
      );

    this.setState({ messageSent: true });
    axios.post(
      `https://${window.location.hostname}:3000/api/help`,
      Message(this.state.inputs),
    )
      .then((results) => {
        const inputs = {
          name: '',
          email: '',
          subject: '',
          message: '',
        };
        this.setState({ inputs, messageSent: false });
        window.scroll(0, 0);
      })
      .catch((error) => {
        this.setState({ messageSent: false });

        window.scroll(0, 0);
      });
  }

  render() {
    return (
      <form className={this.props.className} onSubmit={this.sendMessage}>
        <h2>Send Me a Message</h2>
        <Input
          label="Name"
          id="name"
          type="text"
          value={this.state.inputs.name}
          placeholder="Please enter your name."
          onChange={this.onChange}
          width="22rem"
          required
        />
        <Input
          label="Email"
          id="email"
          type="email"
          value={this.state.inputs.email}
          placeholder="Please enter your email."
          onChange={this.onChangeEmail}
          error={!validEmail(this.state.inputs.email) && this.state.inputs.email ? 'Please enter a valid email.' : null}
          width="20rem"
          required
        />
        <Input
          label="Subject"
          id="subject"
          type="text"
          value={this.state.inputs.subject}
          placeholder="How can I help you?"
          onChange={this.onChange}
          width="25rem"
          required
        />
        <TextArea
          label="Message"
          id="message"
          value={this.state.inputs.message}
          onChange={this.onChange}
          width="30rem"
          required
        />
        <Button>
          Make Contact
        </Button>
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
  max-width: 100%;
`;

export default ContactForm;
