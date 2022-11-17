import React from 'react';
import { Link } from 'react-router-dom';
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

        <div className="related-container">
          <p>Related searches:</p>

          <div className="related-link-container">
            <ul className="related-link-items">
              <li>
                <Link to="none">University of Ibandan</Link>
              </li>
              <li>
                <Link to="none">Univeristy of Ilorin</Link>
              </li>
              <li>
                <Link to="none">Lagos State University</Link>
              </li>
            </ul>

            <ul className="related-link-items">
              <li>
                <Link to="none">Babcock University</Link>
              </li>
              <li>
                <Link to="none">University of Benin</Link>
              </li>
              <li>
                <Link to="none">Osun State Polytechnic</Link>
              </li>
            </ul>
          </div>
        </div>
      </BannerWrapper>
    </BannerContianer>
  );
};

export default BannerImg;
