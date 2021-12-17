import React from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import buddha from './../assets/images/buddha.png'
import elephant from './../assets/images/elephant.png'
import om from './../assets/images/om.png'
import line from './../assets/icons/line.png'
import "./cardWhite.css"
import { motion } from "framer-motion"

export default function CardWhite() {

    return (
        <div className='cardwhite'>
            <CardGroup>

                <Card className='border-0'>
                    <Card.Body>
                        <div className='d-flex justify-content-center'>
                            <div className='imagegroup'>
                                <motion.div whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}><img src={buddha} alt="IMG" />
                                </motion.div    >
                                <div className='subtitles'>This is the Text</div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <img src={line} alt="divider" srcset="" />

                <Card className='border-0'>
                    <Card.Body>
                        <div className='d-flex justify-content-center'>
                            <div className='imagegroup'>
                                <motion.div whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}>
                                    <img src={elephant} alt="IMG" />
                                </motion.div>
                                <div className='subtitles'>This is the Text</div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <img src={line} alt="divider" srcset="" />
                <Card className='border-0'>
                    <Card.Body><div className='d-flex justify-content-center'>
                        <div className='imagegroup'>
                            <motion.div whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}>
                                <img src={om} alt="IMG" />
                            </motion.div>
                            <div className='subtitles'>This is the Text</div>
                        </div></div></Card.Body>
                </Card>
            </CardGroup>
        </div>
    )
}
