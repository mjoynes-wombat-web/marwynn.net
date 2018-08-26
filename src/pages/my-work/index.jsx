import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import throttle from 'lodash/throttle';

import ProjectCard from '../../components/project-card';
import BackToTop from '../../components/back-to-top';

import projects from './projects.json';

class MyWork extends React.Component {
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
    const { images } = this.state;

    const imgs = (images.length > 0
      ? images
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

    const projectsHeight = imgs
      .reduce(
        (prevHeight, img) => (img.height > prevHeight ? img.height : prevHeight),
        0,
      );

    return this.setState({ projectsHeight, images: imgs });
  }

  render() {
    const { title } = this.props;
    const { projectsHeight } = this.state;
    return (
      <main>
        <style jsx>
          {`
          .projects {
            width: calc(100% - 4.5rem);
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            @media screen and (max-width: 725px) {
              width: 100%;
            }
          }
          `}
        </style>
        <Helmet>
          <title>
My Work -
            {' '}
            {title}
          </title>
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
            {Object.entries(projects.web).map(project => (
              <ProjectCard
                projectsHeight={projectsHeight}
                resizeProjects={this.resizeProjects}
                projectType="web"
                key={`graphic${project[1].id}`}
                projectId={project[1].id}
                title={project[0]}
                text={project[1].text}
                imgs={project[1].imgs}
                links={project[1].links}
                techs={project[1].techs}
              />
            ))}
          </section>
          <h2 id="graphic-design">Graphic Design Projects</h2>
          <section className="graphic projects">
            {Object.entries(projects.graphic).map(project => (
              <ProjectCard
                projectsHeight={projectsHeight}
                resizeProjects={this.resizeProjects}
                projectType="graphic"
                key={`graphic${project[1].id}`}
                projectId={project[1].id}
                title={project[0]}
                text={project[1].text}
                imgs={project[1].imgs}
              />
            ))}
          </section>
          <BackToTop />
        </div>
      </main>
    );
  }
}

MyWork.propTypes = {
  title: PropTypes.string,
};

MyWork.defaultProps = {
  title: 'SimeonSmith.me',
};

export default MyWork;
