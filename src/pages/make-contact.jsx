import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import ContactForm from '../components/contact-form';

import Layout from '../layouts';

const MakeContact = ({ title }) => (
  <Layout>
    <main>
      <Helmet>
        <title>{`Make Contact - ${title}`}</title>
      </Helmet>
      <div className="page-content">
        <h1>How Can I Help You?</h1>
        <div className="make-contact-text">
          <p>
            {'Interested in hiring me or have questions about my work? Please feel free to contact me. I\'ll get back to you within 24 hours.'}
          </p>
        </div>
        <ContactForm />
      </div>
    </main>
  </Layout>
);

MakeContact.propTypes = {
  title: PropTypes.string,
};

MakeContact.defaultProps = {
  title: 'SimeonSmith.me',
};

export default MakeContact;
