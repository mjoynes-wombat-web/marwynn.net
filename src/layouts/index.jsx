import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Menu from '../components/menu';
import PageTransition from '../components/PageTransition';

import Background720 from '../assets/img/background_720.jpg';
import Background768 from '../assets/img/background_768.jpg';
import Background1080 from '../assets/img/background_1080.jpg';
import BackgroundRetina from '../assets/img/background_retina.jpg';

import 'normalize.css';

import layoutStyle from './style';

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
    const { children, location } = this.props;
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
          <div className="background-gradient" />
        </div>
        <Helmet>
          <link rel="icon" type="image/png" href={favicon} sizes="110x110" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Josefin+Slab:600,400|Open+Sans:300,400" />
        </Helmet>
        <PageTransition location={location}>
          <div className="page-wrapper">
            {children}
            <p className="bg-photo-credit">
              <a href="https://www.flickr.com/photos/136594255@N06/23696957286/in/photolist-RjVgij-49MV9f-8fh3H9-3EjPyR-zDWxv-8uEN47-bq4KFB-9n8Ynd-6D2qUY-8Lypuv-8Fm1wP-49HJ3T-8GLDMJ-49MDjm-49ME4A-C726P5-pNjEgX-8fhH1A-8AwJi7-p5FtS3">
                Background photo by Lisa Ann Yount.
              </a>
            </p>
          </div>
        </PageTransition>
        <Menu location={location} />
        <style jsx global>
          {layoutStyle}
        </style>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Layout;
