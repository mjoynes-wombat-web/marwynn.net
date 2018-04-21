import React from 'react';
import Link from 'gatsby-link';

const IndexPage = () => (
  <div>
    <h1>Simeon Smith</h1>
    <h2 className="sub-heading">Problem Solver, Graphic Designer & Web Developer</h2>
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
      Please <Link to="/my-work.">check out my work</Link> and feel free to <Link to="/make-contact/">contact me</Link> with any questions.
    </p>
  </div>
);

export default IndexPage;
