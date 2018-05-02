import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faArrowCircleRight from '@fortawesome/fontawesome-free-solid/faArrowCircleUp';

import colors from '../consts/colors';

class UnstyledBackToTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showToTopLink: false,
    };

    this.checkScroll = this.checkScroll.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this.backToTop = this.backToTop.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.checkScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkScroll);
  }

  checkScroll() {
    const scrollY = window.pageYOffset;
    if (scrollY > 200) return this.setState({ showToTopLink: true });

    return this.setState({ showToTopLink: false });
  }

  backToTop(e, duration = 600) {
    const   scrollHeight = window.scrollY;
    const scrollStep = Math.PI / (duration / 15);
    const cosParameter = scrollHeight / 2;
    let scrollCount = 0;
    let scrollMargin;
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        scrollCount += 1;
        scrollMargin = cosParameter - (cosParameter * Math.cos(scrollCount * scrollStep));
        window.scrollTo(0, (scrollHeight - scrollMargin));
      } else clearInterval(scrollInterval);
    }, 15);
    return this.setState({ showToTopLink: false });
  }

  render() {
    return (
      <button onClick={this.backToTop} className={`${this.props.className} ${this.state.showToTopLink ? 'visible' : null}`} href="./#">
        <FontAwesomeIcon icon={faArrowCircleRight} />
        <span>
          To Top
        </span>
      </button>
    );
  }
}

UnstyledBackToTop.propTypes = {
  className: PropTypes.string,
};

UnstyledBackToTop.defaultProps = {
  className: '',
};

const BackToTop = styled(UnstyledBackToTop)`
  position: fixed;
  opacity: 0;
  transition: all 1s;
  bottom: 0.75rem;
  right: 0.75rem;
  z-index: 10;
  pointer-events: none;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.625rem;
  border-radius: 0.5rem;
  background-color: ${colors.lilacBright(0.75)};
  box-shadow: inset 0 0 0.5rem ${colors.lilacDeep(0.65)};
  border: none;
  outline: none;


  &:hover {
    background-color: ${colors.lilacBright()};
    box-shadow: inset 0 0 0.625rem ${colors.lilacDeep()},
      0 0 0.625rem ${colors.lilac(1)};
  }

  span {
    color: ${colors.navy()};
    font-weight: bold;
  }
  

  &.visible {
    opacity: 1;
    pointer-events: initial;
    cursor: pointer;
  }

  .fa-arrow-circle-up {
    height: 18px;
    width: 17px;
    margin-right: 0.375rem;
    color: ${colors.navy()};
  }
`;

export default BackToTop;
