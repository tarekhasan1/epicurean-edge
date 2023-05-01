import React from "react";
import "./Header.css";
import { Carousel } from "react-bootstrap";
import corousel1 from "../../assets/corousel1.jpg";
import corousel2 from "../../assets/corousel2.jpg";
import corousel3 from "../../assets/corousel3.jpg";

const Header = () => {
  return (
    <div>
      <div className="h-50">
        <Carousel variant="dark" fade>
          <Carousel.Item>
            <img
              height={500}
              className="d-block img-fluid"
              src={corousel1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block img-fluid"
              src={corousel2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block img-fluid"
              src={corousel3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Header;
