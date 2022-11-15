import React from 'react';
import { BannerCardContianer } from './BannerCard.style';

const BannerCard = () => {
  return (
    <BannerCardContianer>
      <nav>
        <button type="button" className="line">
          Explore schools
        </button>

        <button type="button">Compare schools </button>

        <button type="button">Find scholarship</button>
      </nav>
      <hr />
    </BannerCardContianer>
  );
};

export default BannerCard;
