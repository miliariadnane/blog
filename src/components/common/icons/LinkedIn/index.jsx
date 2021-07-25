import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../../providers/ThemeProvider';
import RotateLinkImg from '../../RotateLinkImg';
import light from '../../../../assets/social/linkedIn/dark.png';
import dark from '../../../../assets/social/linkedIn/light.png';

function LinkedIn({ username, size }) {

  const { theme } = useContext(ThemeContext);

  if (!username) return null;

  return (
    <RotateLinkImg
      href={`https://linkedin.com/in/${username}`}
      src={theme === 'light' ? light : dark }
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