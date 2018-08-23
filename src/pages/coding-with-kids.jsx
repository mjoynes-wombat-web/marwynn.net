import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Layout from '../layouts';

const CodingWithKids = ({ title }) => (
  <Layout>
    <main>
      <Helmet>
        <title>{`Coding With Kids - ${title}`}</title>
      </Helmet>
      <div className="page-content">
        <h1>Coding With Kids</h1>
        <h2 className="sub-heading">UNDER CONSTRUCTION</h2>
        <p>Welcome to my blog about coding fun little web apps for my kids to play with.</p>
      </div>
    </main>
  </Layout>
);

CodingWithKids.propTypes = {
  title: PropTypes.string,
};

CodingWithKids.defaultProps = {
  title: 'SimeonSmith.me',
};

export default CodingWithKids;
