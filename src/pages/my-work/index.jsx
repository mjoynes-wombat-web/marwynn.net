import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import ProjectCard from '../../components/project-card';

import projects from './projects.json';

const UnstyledMyWork = ({ title, className }) => (
  <main className={className}>
    <Helmet>
      <title>My Work - {title}</title>
    </Helmet>
    <div className="page-content">
      <h1>My Work</h1>
      <h2 className="sub-heading">UNDER CONSTRUCTION</h2>
      <p>
        I have been a graphic designer for 10 years and a
        web designer for 3. My clean design and stunning
        visuals create easy to read and intriguing work.
      </p>
      <section className="projects">
        {Object.entries(projects).map(project =>
          <ProjectCard key={`project${project[1].id}`} projectId={project[1].id} title={project[0]} text={project[1].text} imgs={project[1].imgs} />)}
      </section>
    </div>
  </main>
);

UnstyledMyWork.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};

UnstyledMyWork.defaultProps = {
  title: 'SimeonSmith.me',
  className: '',
};

const MyWork = styled(UnstyledMyWork)`
  .projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    /* .project-card-wrapper {
      flex: 0 1 calc(350px + 2rem);
      display: flex;
      justify-content: center; */

      /* @media screen and (max-width: 1200px) {
        flex-basis: 50%;
      } */

      /* @media screen and (max-width: 700px) {
        flex-basis: 100%;
      }
    } */
  }
`;

export default MyWork;
