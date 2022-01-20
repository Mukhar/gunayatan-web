import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// import img3 from "./../assets/images/image-25-copyright-600x463.jpg";
// import img2 from "./../assets/images/image-26-copyright-600x463.jpg";
// import img1 from "./../assets/images/image-27-copyright-600x463.jpg";
import img1 from "./../assets/images/wall1.jpg";
import img2 from "./../assets/images/slick2.jpg";
import img3 from "./../assets/images/slick3.jpg";
export default function Slick() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };
    // eslint-disable-next-line
    const [cardarray, setcardarray] = useState([{ img: img1 }, { img: img2 }, { img: img3 }]);

    return (
        <Container id="slick">
            <Slider {...settings}>
                {cardarray.map((obj, i) =>
                    <Card style={{
                        width: "18rem",
                        borderRadius: "10px !important",
                        marginLeft: "15px"
                    }} className="text-center" key={`Slickcard` + i}>
                        <Card.Img variant="top" src={obj.img}
                            style={{ maxHeight: "600px", objectFit: "cover", border: "none" }} />
                        {/* <Card.Body text>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary ">Explore More</Button>
                    </Card.Body> */}
                    </Card>
                )}
            </Slider>
        </Container>
    )
}
