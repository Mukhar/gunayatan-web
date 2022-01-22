import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import Facebook from './social/Facebook'
import Instagram from './social/Instagram'
import Twitter from './social/Twitter'
export default function JoinUs() {
    return (
        <div id='joinus'>
            <Container className='my-2' >
                <div className='heading'>Join Gunayatan Parivar</div>
                <div className='d-flex justify-content-center ' >
                    <Button variant="warning" size="lg" className='mx-2 px-4'>
                        Join Now
                    </Button>
                    <div className="vr"></div>
                    <div className='d-flex justify-content-center joinus mx-2'>
                        <Facebook />
                        <Twitter />
                        <Instagram />
                    </div>
                </div>

            </Container>
        </div>
    )
}
