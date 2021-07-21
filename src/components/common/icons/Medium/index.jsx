import React from 'react';
import PropTypes from 'prop-types';

import RotateLinkImg from '../../RotateLinkImg';
import light from '../../../../assets/social/medium/dark.png';

function Medium({ username, size }) {
  if (!username) return null;

  return (
    <RotateLinkImg
      href={`https://medium.com/@${username}`}
      src={light}
      size={size}
    />
  );
}

Medium.propTypes = {
  username: PropTypes.string,
  size: PropTypes.number,
};

Medium.defaultProps = {
  username: null,
  size: 24,
};

export default Medium;