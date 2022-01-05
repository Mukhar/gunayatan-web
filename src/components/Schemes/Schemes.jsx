import React, { useEffect } from 'react'
import Container from 'react-bootstrap/esm/Container'
import img1 from "./1.jpg"
import img2 from "./2.jpg"
import img3 from "./3.jpg"
import img4 from "./4.jpg"
import img5 from "./5.jpg"
import img6 from "./6.jpg"
export default function Schemes() {
    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])

    return (
        <Container fluid className='px-0'>
            <section className='px-0'>
                <img src={img1} alt='demo' />
            </section>

            <section className='px-0'>
                <img src={img2} alt='demo' />
            </section>

            <section className='px-0'>
                <img src={img3} alt='demo' />
            </section>
            <section className='px-0'>
                <img src={img4} alt='demo' />
            </section>

            <section className='px-0'>
                <img src={img5} alt='demo' />
            </section>

            {/* <section className='px-0'>
                <img src={img6} alt='demo' />
            </section> */}
        </Container>
    )
}
