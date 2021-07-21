import React from 'react';
import PropTypes from 'prop-types';
import { LinkImg } from './styles';

function RotateLinkImg({ href, size, src, ...restProps }) {
    return (
      <LinkImg href={href} target="_blank" rel="noopener noreferrer" {...restProps}>
        <img src={src} alt="RotateLinkImg-icon" width={size} height={size} role="presentation" />
      </LinkImg>
    );
  }
  
  RotateLinkImg.propTypes = {
    src: PropTypes.string.isRequired,
    href: PropTypes.string,
    size: PropTypes.number,
  };
  
  RotateLinkImg.defaultProps = {
    href: null,
    size: 24,
  };
  
  export default RotateLinkImg;