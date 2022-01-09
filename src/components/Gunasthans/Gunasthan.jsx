import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import img1 from "./1.png"
import img2 from "./2.png"
// import img3 from "./3.png"

export default function Gunasthan() {
    return (
        <Container fluid className='px-0'>
            <section className='px-0'>
                <img src={img1} alt='demo' />
            </section>

            <section className='px-0'>
                <img src={img2} alt='demo' />
            </section>

            {/* <section className='px-0'>
                <img src={img3} alt='demo' />
            </section> */}
        </Container>
    )
}
