import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import ContactForm from '../components/contact-form';

const UnstyledMakeContact = ({ className, title }) => (
  <main className={className}>
    <Helmet>
      <title>Make Contact - {title}</title>
    </Helmet>
    <div className="page-content">
      <div className="make-contact-text">
        <h1>How Can I Help You?</h1>
        <p>
          Interested in hiring me or have questions about my work? Please feel free to contact me.
          I'll get back to you within 24 hours.
        </p>
      </div>
      <ContactForm />
    </div>
  </main>
);

UnstyledMakeContact.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};

UnstyledMakeContact.defaultProps = {
  className: '',
  title: 'SimeonSmith.me',
};

const MakeContact = styled(UnstyledMakeContact)`
  max-width: none;
  
  .page-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .make-contact-text {
      flex: 0 1 66.66%;
      max-width: 35rem;
    }

    form {
      flex: 0 2;
    }
  }
`;

export default MakeContact;
