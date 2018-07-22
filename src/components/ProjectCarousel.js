import React from 'react';
import Slider from 'react-slick';

const ProjectCarousel = (props) => {
  const settings = {
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    swipe: true,
    fade: false
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
