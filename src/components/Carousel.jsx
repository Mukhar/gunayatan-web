import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import "./../assets/css/carousel.css";
// import slide1 from './../assets/images/01_home_slide-1.jpg';
import slide1 from './../assets/images/gunayatan-bg1.jpg';

import slide2 from './../assets/images/02_home_slide-1.jpg';
import slide3 from './../assets/images/03_home_slide-1.jpg';
export default function CarouselBody() {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src={slide1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100 "
                        src={slide2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100 "
                        src={slide3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div >
    )
}
