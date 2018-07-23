import React from 'react';
import Slider from 'react-slick';

const ProjectCarousel = (props) => {
  const settings = {
    arrows: window.innerWidth > 599,
    dots: window.innerWidth < 600,
    infinite: window.innerWidth > 599,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    swipe: true,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {props.images.map(image => (
          <div key={image} className="project-image">
            <img src={image} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectCarousel;
