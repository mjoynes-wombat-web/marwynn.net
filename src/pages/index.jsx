import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import SignatureLarge from '../assets/img/signature_large.png';
import SignatureMedium from '../assets/img/signature_medium.png';
import SignatureSmall from '../assets/img/signature_small.png';

import Layout from '../layouts';

const UnstyledIndexPage = ({ className, title }) => (
  <Layout>
    <main className={className}>
      <Helmet>
        <title>{`${title} - Home`}</title>
      </Helmet>
      <div className="page-content">
        <h1>Simeon Smith</h1>
        <h2 className="sub-heading">Problem Solver, Graphic Designer, & Web Developer</h2>
        <p>
        I am a web developer, graphic designer, and avid problem solver. I have worked in a range
        of jobs and believe I can better myself in any situation.
        </p>
        <p>
        I love clear and concise designs. Finding information should be simple. Visuals should
        enhance messages and guide users to the content they seek.
        </p>
        <p>
        People are complex and surprising. Putting them in boxes does everyone a disservice.
        Viewing individuals complexly helps me come up with unique and effective solutions for
        each challenge.
        </p>
        <p>
          {`Please ${<Link to="/my-work">check out my work</Link>} and feel free to ${<Link to="/make-contact/">contact me</Link>} with any questions.`}
        </p>
        <img
          id="signature"
          srcSet={`${SignatureSmall} 309w,
          ${SignatureMedium} 338w ,
          ${SignatureLarge} 584w`}
          size="(max-width: 411px) 309px,
          (max-width: 768px) 338px,
          584px"
          src={SignatureLarge}
          alt="Simeon Smith's Signature"
        />
      </div>
    </main>
  </Layout>
);

UnstyledIndexPage.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};

UnstyledIndexPage.defaultProps = {
  className: '',
  title: 'SimeonSmith.me',
};

const IndexPage = styled(UnstyledIndexPage)`

  #signature {
    margin: 1.125rem 0 0 1.125rem;
    width: 325px;

    @media screen and (max-width: 1700px) {
      margin: 1rem 0 0 1rem;
      width: 300px;
    }

    @media screen and (max-width: 925px) {
      margin: 0.875rem 0 0 0.875rem;
      width: 250px;
    }

    @media screen and (max-width: 700px) {
      width: 200px;
    }
  }
`;

export default IndexPage;
