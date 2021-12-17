import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import "./../assets/css/carousel.css";
// import slide1 from './../assets/images/01_home_slide-1.jpg';
// import slide1 from './../assets/images/gunayatan-bg1.jpg';
import slide1 from "./../assets/images/carousel/1.jpg";
import slide2 from "./../assets/images/carousel/2.jpg";
import slide3 from "./../assets/images/carousel/3.jpg";
import slide4 from "./../assets/images/carousel/4.jpg";
import slide5 from "./../assets/images/carousel/5.jpg";
// import slide2 from './../assets/images/02_home_slide-1.jpg';
// import slide2 from './../assets/images/01.jpg'
// import slide3 from './../assets/images/03_home_slide-1.jpg';
// import slide4 from "./../assets/images/04.jpg";
export default function CarouselBody() {
    const [img1, setimg1] = useState([slide1, slide2, slide3, slide4, slide5]);
    return (
        <div>
            <Carousel fade>
                {img1.map((element, i) => (
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100"
                            src={element}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
                }
            </Carousel>
        </div >
    )
}
