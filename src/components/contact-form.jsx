import React from 'react';
import axios from 'axios';

import { Input, TextArea } from './inputs';
import Button from './button';
import colors from '../consts/colors';

import validEmail from '../helpers/validEmail';

class ContactForm extends React.Component {
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
    const { inputs: currentInputs } = this.state;
    const main = document.querySelector('main');

    this.setState({ messageSending: true });
    const messageDetails = {
      firstName: currentInputs.name,
      senderEmail: currentInputs.email,
      receiverEmail: 'ssmith@wombatweb.us',
      subject: `${currentInputs.subject} - SimeonSmith.me`,
      msg: currentInputs.message,
      confirmation: 'Thank you for reaching out to me. I will get back to you within 24 hours.',
      receptionMsg: 'This message was sent from simeonsmith.me.',
      receiverName: 'Simeon Smith',
    };

    axios.post(
      'https://www.wombatweb.us:7777/api/v1/contact',
      messageDetails,
    )
      .then(() => {
        const inputs = {
          name: '',
          email: '',
          subject: '',
          message: '',
        };
        this.setState({ inputs, messageSent: true, messageSending: false });
        window.scroll(0, 0);
        main.scroll(0, 0);
      })
      .catch(() => {
        this.setState({ messageSent: false, messageSending: false });
        window.scroll(0, 0);
        main.scroll(0, 0);
      });
  }

  render() {
    const { messageSent, inputs, messageSending } = this.state;
    return (
      <form
        name="make-contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <style jsx>
          {`
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

          h3.error {
            animation-name: errorPulse;
            animation-duration: 1.5s;
            transform-origin: left center;
          }
          `}
        </style>
        <h2>Send Me a Message</h2>
        {messageSent !== null
          ? (
            <h3 className={`sub-heading ${messageSent ? null : 'error'}`}>
              {messageSent
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
          value={inputs.name}
          placeholder="Please enter your name."
          onChange={this.onChange}
          width="22rem"
          required
        />
        <Input
          label="Email"
          id="email"
          type="email"
          value={inputs.email}
          placeholder="Please enter your email."
          onChange={this.onChangeEmail}
          error={!validEmail(inputs.email) && inputs.email ? 'Please enter a valid email.' : null}
          width="20rem"
          required
        />
        <Input
          label="Subject"
          id="subject"
          type="text"
          value={inputs.subject}
          placeholder="How can I help you?"
          onChange={this.onChange}
          width="25rem"
          required
        />
        <TextArea
          label="Message"
          id="message"
          value={inputs.message}
          onChange={this.onChange}
          width="30rem"
          required
        />
        <Button
          width="30rem"
          className={messageSending ? 'processing' : null}
        >
          {messageSending ? 'Sending Message...' : 'Make Contact'}
        </Button>
      </form>
    );
  }
}

export default ContactForm;
