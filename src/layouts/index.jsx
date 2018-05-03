import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Menu from '../components/menu';

import Background720 from '../assets/img/background_720.jpg';
import Background768 from '../assets/img/background_768.jpg';
import Background1080 from '../assets/img/background_1080.jpg';
import BackgroundRetina from '../assets/img/background_retina.jpg';

import './index.scss';

import favicon from '../assets/img/favicon.png';

function scrollContent(e) {
  const main = document.querySelector('main');
  main.scrollTop += e.deltaY;
}

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    window.addEventListener('wheel', scrollContent);
  }

  render() {
    return (
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
        <p className="bg-photo-credit">
          <a href="https://www.flickr.com/photos/136594255@N06/23696957286/in/photolist-RjVgij-49MV9f-8fh3H9-3EjPyR-zDWxv-8uEN47-bq4KFB-9n8Ynd-6D2qUY-8Lypuv-8Fm1wP-49HJ3T-8GLDMJ-49MDjm-49ME4A-C726P5-pNjEgX-8fhH1A-8AwJi7-p5FtS3">
            Background photo by Lisa Ann Yount.
          </a>
        </p>
        <Helmet
          title={this.props.data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: this.props.data.site.siteMetadata.description },
            { name: 'keywords', content: this.props.data.site.siteMetadata.keywords },
          ]}
        >
          <link rel="icon" type="image/png" href={favicon} sizes="110x110" />
          <link rel="preload" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" />
          <link rel="preload" type="text/css" href="https://fonts.googleapis.com/css?family=Josefin+Sans:400,300,300i|Josefin+Slab:600|Open+Sans:300" />
        </Helmet>
        {this.props.children()}
        <Menu />
      </div>
    );
  }
}

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
