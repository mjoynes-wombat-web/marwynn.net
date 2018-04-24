import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';

import { Input, TextArea } from './inputs';
import Button from './button';
import colors from '../consts/colors';

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
      messageSent: null,
      messageSending: false,
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
    const main = document.querySelector('main');
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

    this.setState({ messageSending: true });
    console.log('CHANGE THIS TO A DYNAMIC URL');
    axios.post(
      'https://www.designbright.org:3000/api/help',
      Message(this.state.inputs),
    )
      .then(() => {
        const inputs = {
          name: '',
          email: '',
          subject: '',
          message: '',
        };
        this.setState({ inputs, messageSent: true, messageSending: false });
        main.scroll(0, 0);
      })
      .catch(() => {
        this.setState({ messageSent: false, messageSending: false });

        main.scroll(0, 0);
      });
  }

  render() {
    return (
      <form className={this.props.className} onSubmit={this.sendMessage}>
        <h2>Send Me a Message</h2>
        {this.state.messageSent !== null
          ? (
            <h3 className={`sub-heading ${this.state.messageSent ? null : 'error'}`}>
              {this.state.messageSent
                ? 'Thank you for contacting me.'
                : "Your message couldn't be sent. Please try again."
              }
            </h3>
          )
          : null}
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
        <Button className={this.state.messageSending ? 'processing' : null}>
          {this.state.messageSending ? 'Sending Message...' : 'Make Contact'}
        </Button>
      </form>
    );
  }
}

UnstyledContactForm.propTypes = {
  className: PropTypes.string,
};

UnstyledContactForm.defaultProps = {
  className: '',
};

const ContactForm = styled(UnstyledContactForm)`
  @keyframes errorPulse {
    0%{
      color: ${colors.lilac()};
    }
    25%{
      color: ${colors.tomato()};
      transform: scale(1.05);
    }
    50%{
      color: ${colors.lilac()};
      transform: scale(1);
    }
    75%{
      color: ${colors.tomato()};
      transform: scale(1.05);
    }
    100%{
      color: ${colors.lilac()};
      transform: scale(1);
    }
  }
  max-width: 100%;

  h3.error {
    animation-name: errorPulse;
    animation-duration: 1.5s;
    transform-origin: left center;
  }
`;

export default ContactForm;
