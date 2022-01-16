import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import gunasthanImage from "./../../assets/images/FourteenGunasthan.png"
export default function FourteenGunasthans() {
    return (
        <div id="14gunasthan" className='radial-bg-black'>
            <Row>
                <Col>    <div > 14 Gunasthan</div>
                </Col>
                <Col><img src={gunasthanImage} />
                </Col>
            </Row>
        </div>
    )
}
