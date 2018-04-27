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
      <h1>How Can I Help You?</h1>
      <div className="make-contact-text">
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
    max-width: 100%;
    h1 {
      flex: 1 0 100%;
    }

    .make-contact-text {
      flex: 1 1 35rem;
      /* max-width: 45rem;

      @media screen and (max-width: 1700px) {
          max-width: 35rem;
      }

      @media screen and (max-width: 925px) {
       max-width: 30rem;
      }

      @media screen and (min-width: 1216px) {
          margin-right: 2rem;
      } */

      > p:first-child {
        margin-top: 0;
      }
    }

    form {
      flex: 0 2;

      > h2:first-child {

        @media screen and (min-width: 1248px) {
          margin-top: 0;
        }
      }
    }
  }
`;

export default MakeContact;
