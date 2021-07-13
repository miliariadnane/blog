import React from 'react';
import SocialLinks from '../../common/socialShare';
import {
    StyledFooter,
    FooterWrapper,
    FooterAttribution,
} from './styles';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterWrapper>
        <SocialLinks />

        <FooterAttribution>
        {`${new Date().getFullYear()} `}
          Built with
          <a href="https://www.gatsbyjs.org" rel="noopener noreferrer" target="_blank"></a>
          Open sourced on
          <a href="https://github.com/miliariadnane/miliari.me" rel="noopener noreferrer" target="_blank"></a>
        </FooterAttribution>
      </FooterWrapper>
    </StyledFooter>
  );
};

export default Footer;