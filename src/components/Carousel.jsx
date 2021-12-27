import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import "./../assets/css/carousel.css";
// import slide1 from './../assets/images/01_home_slide-1.jpg';
// import slide1 from './../assets/images/gunayatan-bg1.jpg';

import slide1 from "./../assets/images/ol/1.jpg";
import slide2 from "./../assets/images/ol/2.jpg";

import slide3 from "./../assets/images/ol/3.jpg";
import slide4 from "./../assets/images/carousel/4.jpg";
import slide5 from "./../assets/images/carousel/5.jpg";
// import slide2 from './../assets/images/02_home_slide-1.jpg';
// import slide2 from './../assets/images/01.jpg'
// import slide3 from './../assets/images/03_home_slide-1.jpg';
// import slide4 from "./../assets/images/04.jpg";
export default function CarouselBody() {
    // eslint-disable-next-line
    const [img1, setimg1] = useState([
        { img: slide1, label: "Gunayatan Label 1", caption: "Some Magnificent view of Gunayatan" },
        { img: slide2, label: "Gunayatan Label 2", caption: "Some Magnificent view of Gunayatan" },
        { img: slide3, label: "Gunayatan Label 3", caption: "Some Magnificent view of Gunayatan" },
        { img: slide4, label: "Gunayatan Label 4", caption: "Some Magnificent view of Gunayatan" },
        { img: slide5, label: "Gunayatan Label 5", caption: "Some Magnificent view of Gunayatan" },
    ]);
    return (
        <div>
            <Carousel fade className="TopCarousel">
                {img1.map((element, i) => (
                    <Carousel.Item interval={5000} >
                        <img
                            className="d-block w-100"
                            src={element.img}
                            alt={element.label}
                        />
                        <Carousel.Caption>
                            <h3>{element.label}</h3>
                            <p>{element.caption}</p>                        </Carousel.Caption>
                    </Carousel.Item>
                ))
                }</Carousel>
        </div >
    )
}
