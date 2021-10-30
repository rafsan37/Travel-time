import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../img/banner/1.jpg';
import banner2 from '../../../img/banner/2.jpg';
import banner3 from '../../../img/banner/3.jpg';


const Banner = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2} alt=""
    />
    <Carousel.Caption>
      <h3 className="text-white">It's Perfect Time to Travel</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1} alt=""
    />

    <Carousel.Caption>
      <h3 className="text-white">SUMMERTIME ADVENTURES</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3} alt=""
    />

    <Carousel.Caption>
      <h3 className="text-dark bg-white">UNFORGETTABLE JOURNEY</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;