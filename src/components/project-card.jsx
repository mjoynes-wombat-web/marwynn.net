import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faArrowCircleRight from '@fortawesome/fontawesome-free-solid/faArrowCircleRight';
import faArrowCircleLeft from '@fortawesome/fontawesome-free-solid/faArrowCircleLeft';

import colors from '../consts/colors';
import { ENGINE_METHOD_DIGESTS } from 'constants';

const UnstyledImgBullets = ({
  imgs,
  activeImg,
  projectId,
  className,
  onClick,
}) => (
  <nav className={className} >
    {imgs.map(img => (
      <button
        className={activeImg === img.id ? 'active' : null}
        key={`project${projectId}img${img.id}bullet`}
        onClick={e => onClick(e, img.id)}
      >
        •
      </button>
    ))}
  </nav>
);

UnstyledImgBullets.propTypes = {
  activeImg: PropTypes.number.isRequired,
  projectId: PropTypes.number.isRequired,
  imgs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    url: PropTypes.string,
  })).isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

UnstyledImgBullets.defaultProps = {
  className: '',
};

const ImgBullets = styled(UnstyledImgBullets)`
  position: absolute;
  bottom: -0.125rem;
  z-index: 1;

  button {
    color: ${colors.lilacBright(0.5)};
    transition: all 0.5s;
    font-size: 1.5rem;
    line-height: 0;
    font-family: 'Josefin Slab', 'Arial', sans-serif;
    border: none;
    padding: 0;
    outline: none;

    &.active {
      color: ${colors.lilacBright(1)};
    }
  }
`;

const UnstyledImgButtons = ({
  onClick,
  activeImg,
  imgsLength,
  className,
}) => (
  <div className={`img-buttons ${className}`}>
    <button
      className="left"
      data-direction="left"
      onClick={onClick}
      disabled={activeImg === 0}
    >
      <FontAwesomeIcon icon={faArrowCircleLeft} />
    </button>
    <button
      className="right"
      data-direction="right"
      onClick={onClick}
      disabled={activeImg + 1 === imgsLength}
    >
      <FontAwesomeIcon icon={faArrowCircleRight} />
    </button>
  </div>
);

UnstyledImgButtons.propTypes = {
  onClick: PropTypes.func.isRequired,
  activeImg: PropTypes.number.isRequired,
  imgsLength: PropTypes.number.isRequired,
  className: PropTypes.string,
};

UnstyledImgButtons.defaultProps = {
  className: '',
};

const ImgButtons = styled(UnstyledImgButtons)`
  button {
    position: absolute;
    top: calc(50% - 8px);
    overflow: visible;
    background: transparent;
    appearance: none;
    outline: none;
    border: none;

    .fa-arrow-circle-left, .fa-arrow-circle-right {
      color: transparent;
      filter: none;
      width: 25px;
      height: 24px;
      transition: all 0.5s;
      cursor: pointer;

      :hover {
        color: ${colors.spring()};
        transform: scale(1.125);
      }
    }

    :disabled {
      .fa-arrow-circle-left, .fa-arrow-circle-right {
        :hover {
          transform: none;
          cursor: not-allowed;
        }
      }
    }
  }

  button.left {
    left: 0.625rem;
  }

  button.right {
    right: 0.625rem;
  }
`;

class UnstyledProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeImg: 0,
      imgs: this.props.imgs,
    };

    this.changeImg = this.changeImg.bind(this);
    this.selectImg = this.selectImg.bind(this);
    this.swipeImgStart = this.swipeImgStart.bind(this);
    this.swipeImgMove = this.swipeImgMove.bind(this);
    this.swipeImgEnd = this.swipeImgEnd.bind(this);
  }

  changeImg(e) {
    const { direction } = e.currentTarget.dataset;
    let { activeImg } = this.state;

    if (direction === 'right') {
      activeImg += 1;
    } else if (direction === 'left') {
      activeImg -= 1;
    }
    return this.setState({ activeImg });
  }

  selectImg(e, id) {
    return this.setState({ activeImg: id });
  }

  swipeImgStart(e) {
    this.setState({ lastSwipedX: e.changedTouches[0].clientX });
  }

  swipeImgMove(e) {
    const swipedImg = e.currentTarget;
    const movement = e.changedTouches[0].clientX - this.state.lastSwipedX;

    if (Math.abs(movement) > 50) {
      const currentImgKey = e.currentTarget.dataset.key;
      const nextImgId = movement < 0 ? this.state.activeImg - 1 : this.state.activeImg + 1;
      const beginningKey = currentImgKey.substr(0, currentImgKey.length - 1);
      let nextImg;

      console.log(`${nextImgId}`);

      if (nextImgId < 0) {
        nextImg = document.querySelector(`[data-key=${beginningKey}${this.state.imgs.length - 1}]`);
      } else if (nextImgId > this.state.imgs.length - 1) {
        nextImg = document.querySelector(`[data-key=${beginningKey}0]`);
      } else {
        nextImg = document.querySelector(`[data-key=${beginningKey}${nextImgId}]`);
      }
      nextImg.style.opacity = '0.85';
      nextImg.style.zIndex = '1';
    }
    swipedImg.style.transform = `translate(${movement}px, 0)`;
  }

  swipeImgEnd(e) {
    const swipedImg = e.currentTarget;
    if (this.state.lastSwipedX) {
      const movement = e.changedTouches[0].clientX - this.state.lastSwipedX;

      if (Math.abs(movement) < 50) {
        swipedImg.style.transform = null;
        return null;
      }

      let { activeImg } = this.state;

      if (activeImg > 0 && movement < 0) {
        activeImg -= 1;
      } else if (activeImg + 1 < this.state.imgs.length && movement > 0) {
        activeImg += 1;
      } else if (movement < 0) {
        activeImg = this.state.imgs.length - 1;
      } else if (movement > 0) {
        activeImg = 0;
      }
      const newActiveImg = document.querySelector(`[data-key=${swipedImg.dataset.key.substr(0, swipedImg.dataset.key.length - 1)}${activeImg}]`);
      newActiveImg.style.opacity = null;
      newActiveImg.style.zIndex = null;
      this.setState({ lastSwipedX: null, activeImg });
    }
    swipedImg.style.transform = null;
    return null;
  }

  render() {
    return (
      <article className={`project-card ${this.props.className}`}>
        <div
          className="image-wrapper"
        >
          {this.state.imgs.length > 1
            ? <ImgButtons
              onClick={this.changeImg}
              activeImg={this.state.activeImg}
              imgsLength={this.state.imgs.length}
            />
            : null}
          {this.state.imgs.map(img => (
            <img
              data-key={`project${this.props.projectId}img${img.id}`}
              key={`project${this.props.projectId}img${img.id}`}
              className={img.id === this.state.activeImg ? 'active' : ''}
              src={`https://res.cloudinary.com/design-bright/image/upload/c_limit,w_300,h_250/v1524792633/portfolio/${img.url}`}
              alt={this.props.title}
              onTouchStart={this.swipeImgStart}
              onTouchMove={this.swipeImgMove}
              onTouchEnd={this.swipeImgEnd}
            />
          ))}
          {this.state.imgs.length > 1
            ? <ImgBullets
              imgs={this.state.imgs}
              activeImg={this.state.activeImg}
              projectId={this.props.projectId}
              onClick={this.selectImg}
            />
            : null}
        </div>
        <div className="text">
          <h2>{this.props.title}</h2>
          <p>{this.props.text}</p>
        </div>
      </article>
    );
  }
}

UnstyledProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  projectId: PropTypes.number.isRequired,
  imgs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    url: PropTypes.string,
  })).isRequired,
  className: PropTypes.string,
};

UnstyledProjectCard.defaultProps = {
  className: '',
};

const ProjectCard = styled(UnstyledProjectCard)`
  box-sizing: border-box;
  background-color: ${colors.navy(0.3)};
  box-shadow: inset 0 0 0.25rem ${colors.lilac(0.5)};
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: calc(25% - 1.5rem);
  transition: all 0.5s;
  overflow: hidden;
  margin: 1rem 0;

  @media screen and (max-width: 1500px) {
    width: calc(33.3333% - 1.3333rem);
  }

  @media screen and (max-width: 1000px) {
    width: calc(50% - 1rem);
  }

  @media screen and (max-width: 700px) {
    width: 100%;
  }

  .image-wrapper {
    width: 100%;
    box-sizing: border-box;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 1rem 1.25rem 1rem;
    position: relative;

    &:hover {
      button {
        z-index: 10;
        :disabled {
          .fa-arrow-circle-left, .fa-arrow-circle-right {
            color: ${colors.navy(0.25)};
            filter: drop-shadow(0 0 0.125rem ${colors.navy(0.75)});
          }
        }
        .fa-arrow-circle-left, .fa-arrow-circle-right {
          color: ${colors.spring(0.75)};
          filter: drop-shadow(0 0 0.125rem ${colors.navy(0.75)});
        }
      }
    }

    img {
      max-width: calc(100% - 2rem);
      border-radius: 0.25rem;
      position: absolute;
      opacity: 0.35;
      transform: translate(0.25rem, 0.25rem);
      transition: transform 0.25s, opacity 0.25s;

      &.active {
        max-width: 100%;
        z-index: 2;
        opacity: 1;
        margin: 0;
        position: relative;
        transform: none;
      }
    }
  }

  .text {
    justify-self: flex-end;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: all 0.5s;
    box-sizing: border-box;

    h2 {
      margin: 0;
      min-height: 64px;
      display: flex;
      align-items: center;
      font-size: 1.75rem;

      @media screen and (max-width: 1700px) {
        min-height: 54px;
        font-size: 1.5rem;
      }

      @media screen and (max-width: 925px) {
        min-height: 50px;
        font-size: 1.375rem;
      }

      @media screen and (max-width: 700px) {
        min-height: initial;
        font-size: 1.25rem;
        margin-top: 0.5rem;
      }
    }

    p {
      padding: 0 1rem;
      margin: 0.5rem 0;
      color: white;
      display: inline-block;
      min-height: 44px;
      display: flex;
      align-items: center;

      @media screen and (max-width: 1982px) {
        min-height: 66px;
      }

      @media screen and (max-width: 1700px) {
        min-height: 60px;
      }

      @media screen and (max-width: 1500px) {
        min-height: 40px;
      }

      @media screen and (max-width: 1401px) {
        min-height: 60px;
      }
      @media screen and (max-width: 1165px) {
        min-height: 80px;
      }
      @media screen and (max-width: 1000px) {
        min-height: 40px;
      }
      @media screen and (max-width: 982px) {
        min-height: 60px;
      }
      @media screen and (max-width: 982px) {
        min-height: 60px;
      }
      @media screen and (max-width: 925px) {
        min-height: 36px;
      }
      @media screen and (max-width: 901px) {
        min-height: 54px;
      }
      @media screen and (max-width: 900px) {
        min-height: 36px;
      }
      @media screen and (max-width: 869px) {
        min-height: 54px;
      }
      @media screen and (max-width: 731px) {
        min-height: 72px;
      }
      @media screen and (max-width: 700px) {
        min-height: 34px;
      }
      @media screen and (max-width: 418px) {
        min-height: 51px;
      }
    }
  }
`;

export default ProjectCard;
