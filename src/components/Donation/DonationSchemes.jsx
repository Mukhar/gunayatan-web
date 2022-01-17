import React from 'react'
import Card from 'react-bootstrap/Card'
import { motion } from 'framer-motion'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
export default function DonationSchemes(props) {
    var DonationSchemes = [["Shiromani Sanrakshak", "25L"],
    ["Param Sanrakshak", "25L"],
    ["Sanrakshak", "25L"],
    ["Sansthapak Sadasya", "25L"],
    ["Nirman Nayak", "25L"],
    ["Stambh", "25L"],
    ["Sootradhar", "25L"],
    ["Nirman Sarthi", "25L"],
    ["Nirman Mitra", "25L"],
    ["Nirman Nidhi", "25L"],]
    return (
        <Container id="DanSchemes">
            <div className='my-5'></div>
            <div className='heading'>  {props.heading}</div>
            <div className='subheading'>  {props.heading}</div>

            <div className='d-flex justify-content-center card-container'>

                {DonationSchemes.map((obj, i) =>
                    <motion.div whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}>
                        <Card style={{
                            width: '16rem',
                            borderRadius: "10px 10px 5px 5px",
                            marginLeft: "15px"
                        }} className="text-center h-100">
                            {/* <Card.Img variant="top" src={obj.img} className={obj.class} /> */}
                            <Card.Body text>
                                <Card.Title>{obj[0]}</Card.Title>
                                <Card.Text>
                                    {obj[1]}
                                </Card.Text>
                                <Button variant="primary ">Explore More</Button>
                            </Card.Body>
                        </Card>
                    </motion.div>
                )}
            </div>
        </Container>
    )
}
