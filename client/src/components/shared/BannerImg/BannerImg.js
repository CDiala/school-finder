import React from 'react';
import BannerCard from '../BannerCard/BannerCard';
import { BannerContianer, BannerWrapper } from './BannerImg.style';

const BannerImg = ({ bgImg, bgGradient, heading, smallText }) => {
  return (
    <BannerContianer bgImg={bgImg} bgGradient={bgGradient}>
      <BannerWrapper>
        <section className="main-content">
          <div className="banner-text">
            <h1>{heading}</h1>
            <p>{smallText}</p>
          </div>
        </section>

        <BannerCard />
      </BannerWrapper>
    </BannerContianer>
  );
};

export default BannerImg;
