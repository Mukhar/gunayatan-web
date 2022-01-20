import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import gunasthanImage from "./../../assets/images/FourteenGunasthan.png"
import kevli from "./../../assets/images/kevli.PNG"
export default function FourteenGunasthans() {
    return (
        <div id="14gunasthan" className='radial-bg-black'>
            <Row>
                <Col>
                    <div className='gun-heading'>What are 14 Gunasthans</div>

                </Col>
                <Col>
                    <Row className="kevli"><img src={kevli} alt='kevli' /></Row>
                    <Row span><img src={gunasthanImage} alt='14gunasthan' />
                    </Row>
                </Col>
            </Row>
        </div >
    )
}
