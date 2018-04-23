import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SignatureLarge from '../assets/img/signature_large.png';
import SignatureMedium from '../assets/img/signature_medium.png';
import SignatureSmall from '../assets/img/signature_small.png';

const UnstyledIndexPage = ({ className }) => (
  <main className={className}>
    <div className="page-content">
      <h1>Simeon Smith</h1>
      <h2 className="sub-heading">Problem Solver, Graphic Designer, & Web Developer</h2>
      <p>
        I am a web developer, graphic designer, and avid problem solver. I have worked in a range
        of jobs and believe that I can learn and better myself from any situation. My experience
        from past works have formed the skills I have today.
      </p>
      <p>
        I have a love for clear and concise designs. It should be simple for people to find the
        information they are looking for. Visuals should enhance and help guide the users to the
        content they seek.
      </p>
      <p>
        I don’t believe in putting people in boxes. You limit others or yourself by defining a
        person so rigidly. I believe that people are complex and surprising, and that we do
        ourselves a disservice by boxing them in.  Thinking complexly about the people using the
        designs I create helps me come up with unique and effective solutions.
      </p>
      <p>
        Please <Link to="/my-work">check out my work</Link> and feel free to <Link to="/make-contact/">contact me</Link> with any questions.
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
);

UnstyledIndexPage.propTypes = {
  className: PropTypes.string,
};

UnstyledIndexPage.defaultProps = {
  className: '',
};

const IndexPage = styled(UnstyledIndexPage)`

  #signature {
    margin: 1rem 0 0 1rem;
    width: 300px;

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
