import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../../providers/ThemeProvider';
import RotateLinkImg from '../../RotateLinkImg';
import light from '../../../../assets/social/github/dark.png';
import dark from '../../../../assets/social/github/light.png';

function Github({ username, size }) {

  const { theme } = useContext(ThemeContext);

  if (!username) return null;

  return (
    <RotateLinkImg
      href={`https://github.com/${username}`}
      src={theme === 'light' ? light : dark }
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