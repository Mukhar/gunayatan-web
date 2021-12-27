import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'

export default function JoinUs() {
    return (
        <div>
            <Container className='my-2'>
                <div className='heading'>Join Gunayatan Parivar</div>
                <div className='d-flex justify-content-center' >
                    <Button variant="warning">
                        Join Now
                    </Button>
                </div>
            </Container>
        </div>
    )
}
