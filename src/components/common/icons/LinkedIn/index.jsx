import React from 'react';
import PropTypes from 'prop-types';

import RotateLinkImg from '../../RotateLinkImg';
import light from '../../../../assets/social/linkedIn/dark.png';

function LinkedIn({ username, size }) {
  if (!username) return null;

  return (
    <RotateLinkImg
      href={`https://linkedin.com/in/${username}`}
      src={light}
      size={size}
    />
  );
}

LinkedIn.propTypes = {
  username: PropTypes.string,
  size: PropTypes.number,
};

LinkedIn.defaultProps = {
  username: null,
  size: 24,
};

export default LinkedIn;