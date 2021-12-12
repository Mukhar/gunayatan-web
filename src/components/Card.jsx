import React from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import buddha from './../assets/images/buddha.webp'
import elephant from './../assets/images/elephant.webp'
import om from './../assets/images/om.webp'
import "./cardWhite.css"

export default function CardWhite() {

    return (
        <div className='cardwhite'>
            <CardGroup>
                <Card >
                    <Card.Body>
                        <div className='d-flex justify-content-center'>
                            <div className='imagegroup'>
                                <img src={buddha} alt="IMG" />
                                <div className='subtitles'>This is the Text</div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <div className='d-flex justify-content-center'>
                            <div className='imagegroup'>
                                <img src={elephant} alt="IMG" />
                                <div className='subtitles'>This is the Text</div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body><div className='d-flex justify-content-center'><div className='imagegroup'><img src={om} alt="IMG" /> <div className='subtitles'>This is the Text</div></div></div></Card.Body>
                </Card>
            </CardGroup>
        </div>
    )
}
