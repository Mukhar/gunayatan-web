import React from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import buddha from './../assets/images/buddha.png'
import elephant from './../assets/images/elephant.png'
import om from './../assets/images/om.png'
import line from './../assets/icons/line.png'
import "./cardWhite.css"

export default function CardWhite() {

    return (
        <div className='cardwhite'>
            <CardGroup>
                <Card className='border-0'>
                    <Card.Body>
                        <div className='d-flex justify-content-center'>
                            <div className='imagegroup'>
                                <img src={buddha} alt="IMG" />
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
                                <img src={elephant} alt="IMG" />
                                <div className='subtitles'>This is the Text</div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <img src={line} alt="divider" srcset="" />
                <Card className='border-0'>
                    <Card.Body><div className='d-flex justify-content-center'><div className='imagegroup'><img src={om} alt="IMG" /> <div className='subtitles'>This is the Text</div></div></div></Card.Body>
                </Card>
            </CardGroup>
        </div>
    )
}
