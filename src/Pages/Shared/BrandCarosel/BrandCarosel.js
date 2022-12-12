import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import B1 from '../../../assets/brands/img1.PNG'
import B2 from '../../../assets/brands/img2.PNG'
import B3 from '../../../assets/brands/img3.PNG'

const BrandCarosel = () => {
    return (
        <div>
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={B3}
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={B1}
          alt="Second slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={B2}
          alt="Third slide"
        />

        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default BrandCarosel;