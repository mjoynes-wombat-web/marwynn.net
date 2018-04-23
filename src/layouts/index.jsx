import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Menu from '../components/menu';

import Background720 from '../assets/img/background_720.jpg';
import Background768 from '../assets/img/background_768.jpg';
import Background1080 from '../assets/img/background_1080.jpg';
import BackgroundRetina from '../assets/img/background_retina.jpg';

import './index.scss';

const Layout = ({ children, data }) => (
  <div className="wrapper">
    <div className="background-wrapper">
      <img
        id="background"
        srcSet={`${Background720} 675w,
          ${Background768} 720w ,
          ${Background1080} 1012w,
          ${BackgroundRetina} 1687w`}
        size="(max-height: 768px) 675px,
          (max-height: 900px) 720px,
          (max-height: 1200px) 1012px,
          1687px"
        src={Background1080}
        alt="Blue Geode Background"
      />
    </div>
    <div className="background-gradient" />
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
      ]}
    />
    {children()}
    <Menu />
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string,
  }),
};

Layout.defaultProps = {
  children: null,
  data: {
    title: 'SimeonSmith.me',
    description: 'Simeon Smith\'s Portfolio Website',
    keywords: 'simeon, smith, graphic, designer, artist, web, developer',
  },
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title,
        description,
        keywords
      }
    }
  }
`;
