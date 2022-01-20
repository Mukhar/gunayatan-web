import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Accordion from 'react-bootstrap/Accordion'
export default function DonationFaq(props) {
    const faq = [
        { "q": "Question 1", "a": "Answer 1", },
        { "q": "Question 2", "a": "Answr1" },
        {
            "q": "Question 3",
            "a": `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea` },
        { "q": "Question 4", "a": "Answer 4" }];
    return (
        <div id="donationFaq" className='DonationFaq py-3'>
            <Container>
                <div className='heading mb-2'>  {props.heading}</div>
                <Accordion defaultActiveKey={['0']} >
                    {faq.map((obj, i) =>
                        < Accordion.Item eventKey={i.toString()} >
                            <Accordion.Header>{obj.q}</Accordion.Header>
                            <Accordion.Body>
                                {obj.a}
                            </Accordion.Body>
                        </Accordion.Item>
                    )}
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div >
    )
}
