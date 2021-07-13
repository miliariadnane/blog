import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { SocialLinkList, SocialLinkItem } from './styles';

const SocialLinks = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          socialLinks {
            name
            url
          }
        }
      }
    }
  `);

  const socialLinks = data.site.siteMetadata.socialLinks.map((link) => {
    return (
      <SocialLinkItem key={link.name}>
        <a href={link.url}>{link.name}</a>
      </SocialLinkItem>
    );
  });

  return <SocialLinkList>{socialLinks}</SocialLinkList>;
};

export default SocialLinks;