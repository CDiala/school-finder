import React from 'react';
import BannerImg from '../../components/shared/BannerImg/BannerImg';
import { LandingPageContianer, LandingPageWrapper } from './LandingPage.style';
import BgImg from '../../images/landing_page_img.svg';
import { bgGradient, heading, smallText } from './LandingPageServices';

// Props to recieve (Found in Landing page services)
//  --> Bg Img , Gradient , text

const LandingPage = () => {
  return (
    <LandingPageContianer>
      <LandingPageWrapper>
        <BannerImg
          bgImg={BgImg}
          bgGradient={bgGradient}
          heading={heading}
          smallText={smallText}
        />
      </LandingPageWrapper>
    </LandingPageContianer>
  );
};

export default LandingPage;
