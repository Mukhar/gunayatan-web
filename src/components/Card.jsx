import { motion } from "framer-motion"
import React from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
// import shikharjee from './../assets/images/parasnath_tonk.jpg'
import shikharjee from './../assets/images/6.jpg'
// import pramansagar from './../assets/images/Muni_Pramansagar_ji.jpg'
import pramansagar from './../assets/images/pramansagar-2.jpg'
import vidyasagar from './../assets/images/Vidyasagar1.jpg'
import "./cardWhite.css"


export default function CardWhite() {

    return (
        <div id="muniraj" className='cardwhite'>
            <CardGroup>
                <Card className='border-0'>
                    <Card.Body>
                        <div className='d-flex justify-content-center'>
                            <div className='imagegroup'>
                                <motion.div whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }} style={{ textAlign: "center" }}>
                                    <img src={vidyasagar} alt="IMG" />
                                </motion.div    >
                                <div className='subtitles'>Acharya Vidyasagarji</div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='border-0'>
                    <Card.Body>
                        <div className='d-flex justify-content-center'>
                            <div className='imagegroup'>
                                <motion.div whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }} style={{ textAlign: "center" }}>
                                    <img src={pramansagar} alt="IMG" />
                                </motion.div>
                                <div className='subtitles'>Muni Pramansagar Ji</div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <Card className='border-0'>
                    <Card.Body><div className='d-flex justify-content-center'>
                        <div className='imagegroup'>
                            <motion.div whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }} style={{ textAlign: "center" }}>
                                <img src={shikharjee} alt="IMG" />
                            </motion.div>
                            <div className='subtitles'>Shree Sammed ShikharJee</div>
                        </div></div></Card.Body>
                </Card>
            </CardGroup>
        </div>
    )
}
