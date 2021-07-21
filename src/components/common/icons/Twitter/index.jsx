import React from 'react';
import PropTypes from 'prop-types';

import RotateLinkImg from '../../RotateLinkImg';
import light from '../../../../assets/social/twitter/dark.png';

function Twitter({ username, size }) {
  if (!username) return null;

  return (
    <RotateLinkImg
      href={`https://twitter.com/${username}`}
      src={light}
      size={size}
    />
  );
}

Twitter.propTypes = {
  username: PropTypes.string,
  size: PropTypes.number,
};

Twitter.defaultProps = {
  username: null,
  size: 24,
};

export default Twitter;