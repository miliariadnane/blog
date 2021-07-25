import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../../providers/ThemeProvider';
import RotateLinkImg from '../../RotateLinkImg';
import light from '../../../../assets/social/medium/dark.png';
import dark from '../../../../assets/social/medium/light.png';

function Medium({ username, size }) {

  const { theme } = useContext(ThemeContext);

  if (!username) return null;

  return (
    <RotateLinkImg
      href={`https://medium.com/@${username}`}
      src={theme === 'light' ? light : dark }
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