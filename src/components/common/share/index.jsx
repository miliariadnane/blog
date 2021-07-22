import React from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  TelegramIcon,
} from 'react-share';
import config from '../../../../config/config';
import { 
    ShareWrapper,
    ShareSpan
} from './styles';

const Share = ({ title, path, iconSize = 32 }) => {
    return (
    <ShareWrapper>
        <span>Share article </span>
        <ShareSpan>👉</ShareSpan>
        <TwitterShareButton url={`${config.siteUrl}${path}`} title={title}>
        <TwitterIcon round size={iconSize} />
        </TwitterShareButton>
        <LinkedinShareButton
        url={`${config.siteUrl}${path}`}
        title={title}
        description={title}
        >
        <LinkedinIcon round size={iconSize} />
        </LinkedinShareButton>
        <TelegramShareButton url={`${config.siteUrl}${path}`}>
        <TelegramIcon round size={iconSize} />
        </TelegramShareButton>
        <FacebookShareButton url={`${config.siteUrl}${path}`} quote={title}>
        <FacebookIcon round size={iconSize} />
        </FacebookShareButton>
    </ShareWrapper>
  );
};

export default Share;