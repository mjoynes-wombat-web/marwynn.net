import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const NotFoundPage = ({ title }) => (
  <main>
    <Helmet
      meta={[
        { name: 'description', content: 'This page cannot be found.' },
        { name: 'keywords', content: 'web, designer, developer, graphic, production, devops, development, design, portfolio, samples, 404' },
      ]}
    >
      <title>{`Page Not Found - ${title}`}</title>
    </Helmet>
    <div className="page-content">
      <h1>Page Not Found</h1>
      <p>
        {'Oh No! You\'ve wondered off and gotten lost. Please choose from the pages in the menu to find your way back.'}
      </p>
    </div>
  </main>
);

NotFoundPage.propTypes = {
  title: PropTypes.string,
};

NotFoundPage.defaultProps = {
  title: 'SimeonSmith.dev',
};

export default NotFoundPage;
