import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const NotFoundPage = ({ title }) => (
  <main>
    <Helmet>
      <title>{title} - Home</title>
    </Helmet>
    <div className="page-content">
      <h1>Page Not Found</h1>
      <p>
        Oh No! You've wondered off and gotten lost. Please choose from the pages in the menu to
        find your way back.
      </p>
    </div>
  </main>
);

NotFoundPage.propTypes = {
  title: PropTypes.string,
};

NotFoundPage.defaultProps = {
  title: 'SimeonSmith.me',
};

export default NotFoundPage;
