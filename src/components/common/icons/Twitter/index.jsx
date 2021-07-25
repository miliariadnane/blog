import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../../providers/ThemeProvider';
import RotateLinkImg from '../../RotateLinkImg';
import light from '../../../../assets/social/twitter/dark.png';
import dark from '../../../../assets/social/twitter/light.png';

function Twitter({ username, size }) {

  const { theme } = useContext(ThemeContext);

  if (!username) return null;

  return (
    <RotateLinkImg
      href={`https://twitter.com/${username}`}
      src={theme === 'light' ? light : dark }
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