import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faArrowCircleRight from '@fortawesome/fontawesome-free-solid/faArrowCircleRight';
import faArrowCircleLeft from '@fortawesome/fontawesome-free-solid/faArrowCircleLeft';

import colors from '../consts/colors';

const UnstyledImgBullets = ({
  imgs,
  activeImg,
  projectId,
  className,
}) => (
  <nav className={className} >
    {imgs.map(img => (
      <span
        className={activeImg === img.id ? 'active' : null}
        key={`project${projectId}img${img.id}`}
      >
        •
      </span>
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
};

UnstyledImgBullets.defaultProps = {
  className: '',
};

const ImgBullets = styled(UnstyledImgBullets)`
  position: absolute;
  bottom: -0.125rem;
  z-index: 1;

  span {
    color: ${colors.lilacBright(0.5)};
    transition: all 0.5s;
    font-size: 1.5rem;
    line-height: 0;
    font-family: 'Josefin Slab', 'Arial', sans-serif;

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
      width: 20px;
      height: 19px;
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

  render() {
    return (
      <article className={`project-card ${this.props.className}`}>
        <div className="image-wrapper">
          {this.props.imgs.length > 1
            ? <ImgButtons
              onClick={this.changeImg}
              activeImg={this.state.activeImg}
              imgsLength={this.state.imgs.length}
            />
            : null}
          <img
            src={`https://res.cloudinary.com/design-bright/image/upload//q_auto:good,c_limit,w_300,h_250/v1524792633/portfolio/${this.state.imgs[this.state.activeImg].url}`}
            alt={this.props.title}
          />
          {this.props.imgs.length > 1
            ? <ImgBullets
              imgs={this.props.imgs}
              activeImg={this.state.activeImg}
              projectId={this.props.projectId}
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

  .image-wrapper:hover {
    button {
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
    padding: 1rem;
    position: relative;

    img {
      max-width: 100%;
      border-radius: 0.25rem;
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
