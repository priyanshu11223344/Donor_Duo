import React from 'react';
import './Review.css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import data from '../../utils/slider.json';
import { sliderSettings } from '../../utils/common';

const Review = () => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Number of full stars
    const halfStar = rating % 1 !== 0; // Check for half star
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="star">★</span>);
    }
    if (halfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }
    return stars;
  };

  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Top Picks</span>
          <span className="primaryText">Most Popular Reviews:</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="review" />
                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>
                    {renderStars(card.rating)}
                  </span>
                  <span>{card.rating}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.feedback}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Review;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
