import React, { useRef } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import Facebook from './social/Facebook'
import Twitter from './social/Twitter'
import Instagram from './social/Instagram'
export default function JoinUs() {
    const joinus = useRef("joinus");
    return (
        <div>
            <Container className='my-2' ref={joinus}>
                <div className='heading'>Join Gunayatan Parivar</div>
                <div className='d-flex justify-content-center ' >
                    <Button variant="warning" size="lg" className='mx-2 px-4'>
                        Join Now
                    </Button>
                    <div class="vr"></div>
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
