import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import ProjectCard from '../../components/project-card';
import BackToTop from '../../components/back-to-top';

import projects from './projects.json';

class UnstyledMyWork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgHeight: null,
      images: [],
    };

    this.setImgHeight = this.setImgHeight.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.setImgHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setImgHeight);
  }

  setImgHeight() {
    if (this.state.images.length === 0) {
      const projectCards = Array.from(document.getElementsByClassName('project-card'));

      const images = projectCards.reduce((newImgs, cards) => {
        newImgs.push(...Array.from(cards.getElementsByTagName('img')));
        return newImgs;
      }, []);

      this.setState({ images });
    }
    const imgHeight = this.state.images
      .reduce(
        (prevHeight, img) => (img.height > prevHeight ? img.height : prevHeight),
        0,
      );

    this.setState({ imgHeight });
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
          <h2>Web Design Projects</h2>
          <section className="web projects">
            {Object.entries(projects.web).map(project =>
              (<ProjectCard
                minImgHeight={this.state.imgHeight}
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
          <h2>Graphic Design Projects</h2>
          <section className="graphic projects">
            {Object.entries(projects.graphic).map(project =>
              (<ProjectCard
                minImgHeight={this.state.imgHeight}
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
