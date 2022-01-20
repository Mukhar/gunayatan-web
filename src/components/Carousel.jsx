import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import "./../assets/css/carousel.css";
import slide1 from "./../assets/images/ol/1.jpg";
import slide2 from "./../assets/images/ol/2.jpg";
// import slide3 from "./../assets/images/ol/3.jpg";
import slide3 from "./../assets/images/carousel/theme7_1280x720.png";
import slide5 from "./../assets/images/carousel/theme8_1280x720.png";
import slide4 from "./../assets/images/carousel/theme9_1280x720.png";
import slide6 from "./../assets/images/carousel/banner2_1280x720.png";
import slide7 from "./../assets/images/carousel/banner3_1280x720.png";
import slide8 from "./../assets/images/carousel/banner4_1280x720.png";



export default function CarouselBody() {
    // eslint-disable-next-line
    const [img1, setimg1] = useState([
        // { img: slide1, label: "Gunayatan Label 1", caption: "Some Magnificent view of Gunayatan" },
        // { img: slide2, label: "Gunayatan Label 2", caption: "Some Magnificent view of Gunayatan" },
        { img: slide3, label: "Gunayatan Label 3", caption: "Some Magnificent view of Gunayatan" },
        { img: slide4, label: "Gunayatan Label 4", caption: "Some Magnificent view of Gunayatan" },
        { img: slide5, label: "Gunayatan Label 5", caption: "Some Magnificent view of Gunayatan" },
        { img: slide6, label: "Gunayatan Label 5", caption: "Some Magnificent view of Gunayatan" },
        { img: slide7, label: "Gunayatan Label 5", caption: "Some Magnificent view of Gunayatan" },
        { img: slide8, label: "Gunayatan Label 5", caption: "Some Magnificent view of Gunayatan" },
    ]);
    return (
        <div id='carousel-top'>
            <Carousel fade className="TopCarousel">
                {img1.map((element, i) => (
                    <Carousel.Item interval={20000} key={`Carousel` + i} >
                        <picture>
                            <img
                                className="d-block w-100"
                                src={element.img}
                                alt={element.label}
                            />

                        </picture>
                        <Carousel.Caption>
                            <h3>{element.label}</h3>
                            <p>{element.caption}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
                }</Carousel>
        </div >
    )
}
