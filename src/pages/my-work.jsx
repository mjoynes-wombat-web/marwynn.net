import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const MyWork = ({ title }) => (
  <main>
    <Helmet>
      <title>My Work - {title}</title>
    </Helmet>
    <div className="page-content">
      <h1>My Work</h1>
      <h2 className="sub-heading">UNDER CONSTRUCTION</h2>
      <p>Check out my work below.</p>
    </div>
  </main>
);

MyWork.propTypes = {
  title: PropTypes.string,
};

MyWork.defaultProps = {
  title: 'SimeonSmith.me',
};

export default MyWork;
