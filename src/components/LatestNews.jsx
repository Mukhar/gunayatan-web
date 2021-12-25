import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import "../assets/css/SectionComp.css"
import img3 from "./../assets/images/image-25-copyright-600x463.jpg"
import img2 from "./../assets/images/image-26-copyright-600x463.jpg"
import img1 from "./../assets/images/image-27-copyright-600x463.jpg"


export default function LatestNews(props) {
    // eslint-disable-next-line
    const [cardarray, setcardarray] = useState([{ img: img1 }, { img: img2 }, { img: img3 }]);
    return (
        <Container>
            <div className='mt-5'></div>
            <div className='heading'>  {props.heading}</div>
            <div className='subheading'>  {props.heading}</div>

            <div className='d-flex justify-content-center card-container'>

                {cardarray.map((obj, i) =>
                    <Card style={{
                        width: '18rem',
                        borderRadius: "10px 10px 5px 5px",
                        marginLeft: "15px"
                    }} className="text-center">
                        <Card.Img variant="top" src={obj.img} />
                        <Card.Body text>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary ">Explore More</Button>
                        </Card.Body>
                    </Card>
                )}

            </div>
            <div className='mt-5'> </div>
        </Container >
    )
}
