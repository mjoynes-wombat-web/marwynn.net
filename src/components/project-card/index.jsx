import React from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash/debounce';

import colors from '../../consts/colors';

import ImgBullets from './img-bullets';
import ImgButtons from './img-buttons';
import Logos from '../logos';

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeImg: 0,
      imgs: props.imgs,
    };

    this.changeImg = this.changeImg.bind(this);
    this.selectImg = this.selectImg.bind(this);
    this.swipeImgStart = this.swipeImgStart.bind(this);
    this.swipeImgMove = this.swipeImgMove.bind(this);
    this.swipeImgEnd = this.swipeImgEnd.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.resizeProject = this.resizeProject.bind(this);
    this.throttleResizeProject = throttle(this.resizeProject.bind(this), 32);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.throttleResizeProject);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.throttleResizeProject);
  }

  resizeProject(e) {
    const { projectType, projectId, resizeProjects } = this.props;
    const { imgs } = this.state;

    const project = document.querySelector(`[data-key=${projectType}${projectId}]`);
    const projectImgWrap = project.querySelector('.image-wrapper');

    if (window.innerWidth <= 700) {
      const maxImgHeight = imgs.reduce((prevImgHeight, img) => {
        const currentImgHeight = project.querySelector(`[data-key=${projectType}${projectId}img${img.id}]`).height;

        return prevImgHeight > currentImgHeight ? prevImgHeight : currentImgHeight;
      }, 0);

      projectImgWrap.style.height = `${maxImgHeight}px`;
      return null;
    } if (e.type === 'load' && window.innerWidth > 700) {
      resizeProjects();
    }

    projectImgWrap.style.height = null;
    return null;
  }

  changeImg(e) {
    const { direction } = e.currentTarget.dataset;
    let { activeImg } = this.state;
    const { imgs } = this.state;

    if (direction === 'right') {
      activeImg = imgs.length - 1 === activeImg ? 0 : activeImg + 1;
    } else if (direction === 'left') {
      activeImg = activeImg === 0 ? imgs.length - 1 : activeImg - 1;
    }
    return this.setState({ activeImg });
  }

  selectImg(e, id) {
    return this.setState({ activeImg: id });
  }

  swipeImgStart(e) {
    const { imgs } = this.state;
    if (imgs.length <= 1) return null;

    return this.setState({ lastSwipedX: e.changedTouches[0].clientX });
  }

  swipeImgMove(e) {
    const { imgs, lastSwipedX, activeImg } = this.state;
    if (imgs.length <= 1) return null;

    const swipedImg = e.currentTarget;
    const movement = e.changedTouches[0].clientX - lastSwipedX;

    if (Math.abs(movement) > 75) {
      const nextImgId = movement < 0 ? activeImg - 1 : activeImg + 1;
      if (nextImgId < 0) {
        this.setState({ nextImg: (imgs.length - 1) });
      } else if (nextImgId > imgs.length - 1) {
        this.setState({ nextImg: 0 });
      } else {
        this.setState({ nextImg: nextImgId });
      }
    } else {
      this.setState({ nextImg: null });
    }
    swipedImg.style.transition = 'none';
    swipedImg.style.transform = `translate(${movement}px, 0)`;
    return null;
  }

  swipeImgEnd(e) {
    const { imgs, lastSwipedX, activeImg: currentActiveImg } = this.state;
    this.setState({ nextImg: null });

    if (imgs.length <= 1) return null;

    const swipedImg = e.currentTarget;
    if (lastSwipedX) {
      const movement = e.changedTouches[0].clientX - lastSwipedX;

      let activeImg = currentActiveImg;

      if (activeImg > 0 && movement < 0) {
        activeImg -= 1;
      } else if (activeImg + 1 < imgs.length && movement > 0) {
        activeImg += 1;
      } else if (movement < 0) {
        activeImg = imgs.length - 1;
      } else if (movement > 0) {
        activeImg = 0;
      }

      if (Math.abs(movement) < 75) {
        swipedImg.style.transform = null;
        swipedImg.style.transition = null;
        return null;
      }

      this.setState({ lastSwipedX: null, activeImg });
    }
    swipedImg.style.transition = null;
    swipedImg.style.transform = null;
    return null;
  }

  render() {
    const {
      projectType, projectId, title, text, links, techs, projectsHeight,
    } = this.props;
    const { imgs, activeImg, nextImg } = this.state;
    return (
      <article className="project-card" data-key={`${projectType}${projectId}`}>
        <div className="image-wrapper">
          {imgs.length > 1
            ? (
              <ImgButtons
                onClick={this.changeImg}
                activeImg={activeImg}
                imgsLength={imgs.length}
              />
            )
            : null}
          {imgs.map(img => (
            <img
              data-key={`${projectType}${projectId}img${img.id}`}
              key={`${projectType}${projectId}img${img.id}`}
              className={`${img.id === activeImg ? 'active' : ''}${nextImg === img.id ? 'next' : ''}`}
              src={`https://res.cloudinary.com/design-bright/image/upload/c_limit,w_300,h_250/v1524792633/portfolio/${img.url}`}
              alt={title}
              onTouchStart={this.swipeImgStart}
              onTouchMove={this.swipeImgMove}
              onTouchEnd={this.swipeImgEnd}
              onLoad={this.resizeProject}
            />
          ))}
          {imgs.length > 1
            ? (
              <ImgBullets
                imgs={imgs}
                activeImg={activeImg}
                projectId={projectId}
                onClick={this.selectImg}
              />
            )
            : null}
        </div>
        <div className="text">
          <h2>{title}</h2>
          <p>{text}</p>
          {projectType === 'web'
            ? (
              <div className="web-details">
                <p className="links">
                  {links.site
                    ? (
                      <a href={links.site}>
                          Website
                      </a>
                    )
                    : null}
                  {links.repo
                    ? (
                      <a href={links.repo}>
                        Code Repo
                      </a>
                    )
                    : null}
                </p>
                <h3>Made with:</h3>
                <div className="logos">
                  {techs.map(tech => <Logos key={`${projectType}${projectId}tech${tech.id}`} type={tech.type} />)}
                </div>
              </div>
            )
            : null}
        </div>
        <style jsx>
          {`
            .project-card {
              .image-wrapper {
                height: ${projectsHeight}px;

                @media screen and (max-width: 700px) {
                  height: initial;
                }
              }
            }
            `}
        </style>
        <style jsx>
          {`
          .project-card {
            box-sizing: border-box;
            background-color: ${colors.navy(0.3)};
            box-shadow: inset 0 0 0.25rem ${colors.lilac(0.5)};
            border-radius: 0.25rem;
            display: flex;
            flex-direction: column;
            width: calc(25% - 1.5rem);
            transition: all 0.5s;
            overflow: hidden;
            margin: 1rem 0;

            @media screen and (max-width: 1500px) {
              width: calc(33.3333% - 1.5rem);
            }

            @media screen and (max-width: 1000px) {
              width: calc(50% - 1.5rem);
            }

            @media screen and (max-width: 700px) {
              width: 100%;
            }

            .image-wrapper {
              display: flex;
              justify-content: center;
              justify-self: flex-start;
              align-items: center;
              padding: 1.375rem;
              position: relative;
              transition: height 0.25s;
            }

            .image-wrapper :global(img) {
              max-width: calc(100% - 2.75rem);
              border-radius: 0.25rem;
              position: absolute;
              opacity: 0.35;
              transform: translate(0.375rem, 0.375rem);
              transition: transform 0.25s, opacity 0.25s, box-shadow 0.25s;
              pointer-events: none;
            }

            .image-wrapper :global(img.active) {
              max-width: 100%;
              z-index: 2;
              opacity: 1;
              top: 0;
              margin: 0;
              position: relative;
              transform: none;
              border: 1px solid ${colors.lilacBright()};
              box-shadow: 0 0 0.5rem ${colors.navy()};
              display: block;
              pointer-events: all;

            }

            .image-wrapper :global(img.next) {
              opacity: 0.85;
              z-index: 1;
            }

            .image-wrapper:hover :global(.img-buttons button) {
              opacity: 1;
            }

            .text {
              padding: 1rem;
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
              transition: all 0.5s;
              box-sizing: border-box;
              flex: 1;

              h2 {
                margin: 0;
                min-height: 4rem;
                display: flex;
                align-items: center;
                font-size: 1.75rem;

                @media screen and (max-width: 700px) {
                  min-height: initial;
                  margin-top: 0.5rem;
                }
              }

              h3 {
                margin: 0.5rem 0;
                display: flex;
                align-items: center;
                font-size: 1.625rem;
              }

              p {
                padding: 0 1rem;
                margin: 0.5rem 0;
                color: white;
                display: inline-block;
                display: flex;
                align-items: center;
              }

              .web-details {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-end;
                flex: 1;

                .links {
                  width: 100%;
                  display: flex;
                  justify-content: space-evenly;
                  min-height: initial;
                  margin: 0.5rem 0 1rem 0;
                }

                .logos {
                  display: flex;
                  align-items: flex-end;
                  flex-wrap: wrap;
                  min-width: 100%;
                  justify-content: space-around;
                }
              }
            }
          }
          `}
        </style>
      </article>
    );
  }
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  projectId: PropTypes.number.isRequired,
  projectType: PropTypes.string.isRequired,
  projectsHeight: PropTypes.number,
  links: PropTypes.shape({
    site: PropTypes.string,
    repo: PropTypes.string,
  }),
  techs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  })),
  imgs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    url: PropTypes.string,
  })).isRequired,
  resizeProjects: PropTypes.func.isRequired,
};

ProjectCard.defaultProps = {
  links: null,
  techs: null,
  projectsHeight: 250,
};

export default ProjectCard;
