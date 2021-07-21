import React from 'react';
import PropTypes from 'prop-types';

import RotateLinkImg from '../../RotateLinkImg';
import light from '../../../../assets/social/github/dark.png';

function Github({ username, size }) {
  if (!username) return null;

  return (
    <RotateLinkImg
      href={`https://github.com/${username}`}
      src={light}
      size={size}
    />
  );
}

Github.propTypes = {
  username: PropTypes.string,
  size: PropTypes.number,
};

Github.defaultProps = {
  username: null,
  size: 24,
};

export default Github;