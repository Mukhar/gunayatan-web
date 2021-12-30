import { motion } from "framer-motion"
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import "../assets/css/SectionComp.css"
import img2 from "./../assets/images/holograph2.png"
import img3 from "./../assets/images/pravachanHall.png"
import img1 from "./../assets/images/sadhanaBasati1.jpg"
import img4 from "./../assets/images/santNivas.jpg"


export default function SectionScheme(props) {
    // eslint-disable-next-line
    const [cardarray, setcardarray] = useState([
        {
            img: img1,
            cardTitle: "Sadhana Basati",
            class: "",
            cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        }, {
            img: img2,
            cardTitle: "Jain Library and Research Center",
            class: "radient-gradient-grey",
            cardText: "Some quick example text to build on the card title and make up the bulk of the card's content."
        }, {
            img: img3,
            cardTitle: "Pravachan Hall",
            class: "",
            cardText: "Some quick example text to build on the card title and make up the bulk of the card's content."
        }, {
            img: img4,
            cardTitle: "Sant Nivas",
            class: "",
            cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        }
    ]);
    return (
        <Container>
            <div className='mt-5'></div>
            <div className='heading'>  {props.heading}</div>
            <div className='subheading'>  {props.heading}</div>

            <div className='d-flex justify-content-center card-container'>

                {cardarray.map((obj, i) =>
                    <motion.div whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>
                        <Card style={{
                            width: '16rem',
                            borderRadius: "10px 10px 5px 5px",
                            marginLeft: "15px"
                        }} className="text-center">
                            <Card.Img variant="top" src={obj.img} className={obj.class} />
                            <Card.Body text>
                                <Card.Title>{obj.cardTitle}</Card.Title>
                                <Card.Text>
                                    {obj.cardText}
                                </Card.Text>
                                <Button variant="primary ">Explore More</Button>
                            </Card.Body>
                        </Card>
                    </motion.div>
                )}

            </div>
            <div className='mt-5'> </div>
        </Container >
    )
}
