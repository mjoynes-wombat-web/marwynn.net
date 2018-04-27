import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../consts/colors';

const UnstyledProjectCard = ({
  title,
  text,
  imgs,
  className,
}) => (
  <div className={`project-card ${className}`}>
    <div className="image-wrapper">
      <img
        src={`https://res.cloudinary.com/design-bright/image/upload/c_limit,w_300,h_250/v1524792633/portfolio/${imgs[0]}`}
        alt={title}
      />
    </div>
    <div className="text">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  </div>
);

UnstyledProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imgs: PropTypes.arrayOf(PropTypes.string).isRequired,
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

  :hover {
    background-color: ${colors.navy()};
    box-shadow: inset 0 0 0.25rem ${colors.lilac(0.25)}, 
    0 0 0.25rem ${colors.lilac(0.5)};

    .text {
      background-color: ${colors.spring(0.65)};
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

    img {
      max-width: 100%;
      border-radius: 0.25rem;
    }
  }

  .text {
    justify-self: flex-end;
    padding: 1rem;
    background-color: ${colors.spring(0.5)};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: all 0.5s;

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
        min-height: 46px;
        font-size: 1.25rem;
      }
    }

    p {
      /* display: none; */
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
