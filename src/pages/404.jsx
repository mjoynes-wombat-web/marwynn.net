import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Layout from '../layouts';

const NotFoundPage = ({ title }) => (
  <Layout>
  <main>
    <Helmet>
      <title>Page Not Found - {title}</title>
    </Helmet>
    <div className="page-content">
      <h1>Page Not Found</h1>
      <p>
        Oh No! You've wondered off and gotten lost. Please choose from the pages in the menu to
        find your way back.
      </p>
    </div>
  </main>
  </Layout>
);

NotFoundPage.propTypes = {
  title: PropTypes.string,
};

NotFoundPage.defaultProps = {
  title: 'SimeonSmith.me',
};

export default NotFoundPage;
