import React, { useState } from 'react';
import { BannerCardContianer } from './BannerCard.style';
import { toggleCard } from './BannerServices';
import { FiChevronDown } from 'react-icons/fi';
import Button from '../Button/Button';

const BannerCard = () => {
  const [toggle, setToggle] = useState({
    explore: true,
    find: false,
    compare: false,
  });

  const handleToggle = (value) => {
    setToggle((prevState) => toggleCard(value));
  };

  const handleSubmit = (event, type) => {
    event.preventDefault();
  };
  return (
    <BannerCardContianer>
      <nav>
        <button
          type="button"
          className={toggle.explore ? 'line' : ''}
          onClick={() => handleToggle('explore')}
        >
          Explore schools
        </button>

        <button
          type="button"
          className={toggle.compare ? 'line' : ''}
          onClick={() => handleToggle('compare')}
        >
          Compare schools{' '}
        </button>

        <button
          type="button"
          className={toggle.find ? 'line' : ''}
          onClick={() => handleToggle('find')}
        >
          Find scholarship
        </button>
      </nav>
      <hr />

      {toggle.explore && (
        <form
          className="card-option-container"
          onSubmit={(e) => handleSubmit(e, 'explore')}
        >
          <div className="card-wrapper">
            <div className="item-container">
              <div className="item-group">
                <p>Program</p>
                <input
                  type="text"
                  name="program"
                  placeHolder="Undergraduate"
                  className="input-field"
                />
              </div>
              <FiChevronDown />
            </div>

            <div className="item-container">
              <div className="item-group">
                <p>Course</p>
                <input
                  type="text"
                  name="program"
                  placeHolder="Choose Course"
                  className="input-field"
                />
              </div>
              <FiChevronDown />
            </div>

            <div className="item-container">
              <div className="item-group">
                <p>Location</p>
                <input
                  type="text"
                  name="program"
                  placeHolder="Location"
                  className="input-field"
                />
              </div>
              <FiChevronDown />
            </div>
          </div>

          <button type="submit">Find school</button>
        </form>
      )}

      {toggle.compare && (
        <form
          className="card-option-container"
          onSubmit={(e) => handleSubmit(e, 'compare')}
        >
          <div className="card-wrapper">
            <div className="item-container">
              <div className="item-group">
                <p>School 1</p>
                <input
                  type="text"
                  name="program"
                  placeHolder="School name"
                  className="input-field"
                />
              </div>
              <FiChevronDown />
            </div>

            <div className="item-container">
              <div className="item-group">
                <p>School 2</p>
                <input
                  type="text"
                  name="program"
                  placeHolder="School name"
                  className="input-field"
                />
              </div>
              <FiChevronDown />
            </div>
          </div>
          <Button type="submit" width="120" text="Compare" />
        </form>
      )}

      {toggle.find && (
        <form
          className="card-option-container"
          onSubmit={(e) => handleSubmit(e, 'find')}
        >
          <div className="card-wrapper">
            <div className="item-container">
              <div className="item-group">
                <p>Course</p>
                <input
                  type="text"
                  name="program"
                  placeHolder="Course of Study"
                  className="input-field"
                />
              </div>
              <FiChevronDown />
            </div>
          </div>
          <Button type="submit" width="120" text="Scholarship" />
        </form>
      )}
    </BannerCardContianer>
  );
};

export default BannerCard;
