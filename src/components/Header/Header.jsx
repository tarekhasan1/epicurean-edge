import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./Header.css";
import { Carousel } from "react-bootstrap";
import corousel1 from "../../assets/corousel1.jpg";
import corousel2 from "../../assets/corousel2.jpg";
import corousel3 from "../../assets/corousel3.jpg";

const Header = () => {
  return (
    <div>
      <div className="corousel-container">
        <Carousel>
          <Carousel.Item>
            <LazyLoadImage
              height={500}
              className="d-block img-fluid"
              src={corousel1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h1 className="corousel-title">Epicurean Edge Will Serve You The Best</h1>
              <p className="corousel-description">There is no sincerer love than the love of food</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="bg-dark">
            <LazyLoadImage
              className="d-block img-fluid"
              src={corousel2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h1 className="corousel-title">Food For Your Soul</h1>
              <p className="corousel-description">Food for the body is not enough. There must be food for the soul.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <LazyLoadImage
              className="d-block img-fluid"
              src={corousel3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h1 className="corousel-title">You Will Get The Best Chefs Of Thailand in Epicurean Edge</h1>
              <p className="corousel-description">
              If Epicurean Edge cooks Thai food, why should you go to anywhere else?
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Header;
