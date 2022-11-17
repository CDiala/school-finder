import React from 'react';
import { CardArrowContaier } from './CardArrow.style';
import { FiArrowRight } from 'react-icons/fi';

const CardArrow = ({ list }) => {
  return (
    <CardArrowContaier>
      <div className="find-best-heading">
        <h2>Find The Best</h2>
        <p>Begin your research here now, and make the best decision ever!</p>
      </div>
      <div className="card-container">
        {list.map(({ image, text, id }) => (
          <div className="card-item" id={id}>
            <img src={image} alt="Card profile" />

            <div className="card-content">
              <p>{text}</p>
              <FiArrowRight />
            </div>
          </div>
        ))}
      </div>
    </CardArrowContaier>
  );
};

export default CardArrow;
