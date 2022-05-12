import React from 'react';
import "./Banner.css";
import { Carousel, Container } from 'react-bootstrap';
import banner1 from "./img/banner-1.jpg";
import banner2 from "./img/banner-2.jpg";
import banner4 from "./img/banner-4.jpg";

const Banner = () => {
    return (
        <Container id='banner' className='my-5'>
            < Carousel >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Sports End</h3>
                        <p>Sports End is a Sports related products WareHouse</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>What does Sports End?</h3>
                        <p>Sports End has millions of sports items in collection.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner4}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>We deal with the company officials</h3>
                        <p>We have all our products is official.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel >
        </Container >
    );
};

export default Banner;