import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import throttle from 'lodash/throttle';

import ProjectCard from '../../components/project-card';
import BackToTop from '../../components/back-to-top';

import projects from './projects.json';

class UnstyledMyWork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectsHeight: null,
      images: [],
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this.throttleResizeProjects = throttle(this.resizeProjects.bind(this), 32);
    this.resizeProjects = this.resizeProjects.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.throttleResizeProjects);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.throttleResizeProjects);
  }

  resizeProjects() {
    if (window.innerWidth <= 700) return null;

    const images = (this.state.images.length > 0
      ? this.state.images
      : Array.from(document
        .getElementsByClassName('project-card'))
        .reduce(
          (newImgs, cards) => {
            newImgs.push(...Array
              .from(cards.getElementsByTagName('img')));
            return newImgs;
          },
          [],
        )
    );

    const projectsHeight = images
      .reduce(
        (prevHeight, img) => (img.height > prevHeight ? img.height : prevHeight),
        0,
      );

    return this.setState({ projectsHeight, images });
  }

  render() {
    return (
      <main className={this.props.className}>
        <Helmet>
          <title>My Work - {this.props.title}</title>
        </Helmet>
        <div className="page-content">
          <h1>My Work</h1>
          <p>
            I have been a graphic designer for ten years and a
            web designer for three. My clean design and stunning
            visuals create easy to read and intriguing work.
          </p>
          <h2 id="web-design">Web Design Projects</h2>
          <section className="web projects">
            {Object.entries(projects.web).map(project =>
              (<ProjectCard
                projectsHeight={this.state.projectsHeight}
                resizeProjects={this.resizeProjects}
                projectType="web"
                key={`graphic${project[1].id}`}
                projectId={project[1].id}
                title={project[0]}
                text={project[1].text}
                imgs={project[1].imgs}
                links={project[1].links}
                techs={project[1].techs}
              />))}
          </section>
          <h2 id="graphic-design">Graphic Design Projects</h2>
          <section className="graphic projects">
            {Object.entries(projects.graphic).map(project =>
              (<ProjectCard
                projectsHeight={this.state.projectsHeight}
                resizeProjects={this.resizeProjects}
                projectType="graphic"
                key={`graphic${project[1].id}`}
                projectId={project[1].id}
                title={project[0]}
                text={project[1].text}
                imgs={project[1].imgs}
              />))}
          </section>
          <BackToTop />
        </div>
      </main>
    );
  }
}

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
  }
`;

export default MyWork;
