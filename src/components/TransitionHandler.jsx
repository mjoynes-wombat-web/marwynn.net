import React from 'react';
import PropTypes from 'prop-types';

class TransitionHandler extends React.Component {
  shouldComponentUpdate() {
    const { location } = this.props;
    return location.pathname === window.location.pathname;
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

TransitionHandler.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default TransitionHandler;
