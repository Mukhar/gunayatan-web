import { motion } from "framer-motion"
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import "../assets/css/SectionComp.css"
import mainMandir from "./../assets/images/Gunayatan_Main_Mandir.png"
import img1 from "./../assets/images/Picture9.png"

export default function SectionComp(props) {
    // eslint-disable-next-line
    const [cardarray, setcardarray] = useState([
        {
            img: img1,
            cardTitle: "SahasraKoot Jin Mandir",
            class: "",
            cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        }, {
            img: mainMandir,
            cardTitle: "Main Mandir",
            class: "radient-gradient-grey",
            cardText: "Some quick example text to build on the card title and make up the bulk of the card's content."
        }, {
            img: img1,
            cardTitle: "Chaubisi Jin Mandir",
            class: "",
            cardText: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
    ]);
    return (
        <Container id='schemes' className='pattern-bg' fluid>
            <Container >
                <div className='mt-5'></div>
                <div className='heading'>  {props.heading}</div>
                <div className='subheading'>  {props.subHeading}</div>

                <div className='d-flex justify-content-center card-container'>

                    {cardarray.map((obj, i) =>
                        <motion.div key={`Compcard` + i}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Card style={{
                                width: '18rem',
                                borderRadius: "10px 10px 5px 5px",
                                marginLeft: "15px"
                            }} className="text-center card-comp">
                                <Card.Img variant="top" src={obj.img} className={obj.class} />
                                <Card.Body text="true">
                                    <Card.Title>{obj.cardTitle}</Card.Title>
                                    <Card.Text>
                                        {obj.cardText}
                                    </Card.Text>
                                    <Button variant="primary " name="ButtonExplore" >Explore More</Button>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    )}

                </div>
                <div className='mt-5'> </div>
            </Container >
        </Container>
    )
}
