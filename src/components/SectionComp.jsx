import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "../assets/css/SectionComp.css"
import img3 from "./../assets/images/image-25-copyright-600x463.jpg"
import img2 from "./../assets/images/image-26-copyright-600x463.jpg"
import img1 from "./../assets/images/image-27-copyright-600x463.jpg"


export default function SectionComp(props) {
    const [cardarray, setcardarray] = useState([{ img: img1 }, { img: img2 }, { img: img3 }]);
    return (
        <Container>
            <div className='heading'>  {props.heading}</div>
            <div className='subheading'>  {props.heading}</div>

            <div className='d-flex justify-content-center'>

                {cardarray.map((obj, i) =>
                    <Card style={{ width: '18rem' }} className="text-center">
                        <Card.Img variant="top" src={obj.img} />
                        <Card.Body text>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary ">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                )}
            </div>
        </Container >
    )
}
