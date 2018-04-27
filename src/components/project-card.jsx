import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const UnstyledProjectCard = ({
  title,
  text,
  imgs,
  className,
}) => (
  <div className={`project-card-wrapper ${className}`}>
    <div className="project-card">
      <h2>{title}</h2>
      <div className="image-wrapper">
        <img
          src={`http://res.cloudinary.com/design-bright/image/upload/c_limit,w_350,h_350/v1524792633/portfolio/${imgs[0]}`}
          alt={title}
        />
      </div>
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

  @media screen and (max-width: 700px) {
    padding: 0;
  }

  .project-card {
    .image-wrapper {
      width: 100%;
      box-sizing: border-box;
    }

    img {
      max-width: 100%;
      border-radius: 0.25rem;
    }

    p {
      display: none;
    }
  }
`;

export default ProjectCard;
