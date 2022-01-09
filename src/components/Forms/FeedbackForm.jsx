import React from 'react'
import { motion } from 'framer-motion'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/esm/Container'
export default function FeedbackForm() {
    return (
        <Container className='my-5 py-2 card border-0 grey-box-shadow'>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address(optional)</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Feedback</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </Container>
    )
}
