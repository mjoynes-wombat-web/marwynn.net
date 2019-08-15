import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const MakeContact = ({ title }) => (
  <main>
    <Helmet>
      <title>{`Thank You - Make Contact - ${title}`}</title>
    </Helmet>
    <div className="page-content">
      <h1>Thank You!</h1>
      <div className="make-contact-text">
        <p>
          {"Thank you for contacting me. I'll get back to you shortly."}
        </p>
      </div>
    </div>
  </main>
);

MakeContact.propTypes = {
  title: PropTypes.string,
};

MakeContact.defaultProps = {
  title: 'SimeonSmith.dev',
};

export default MakeContact;
