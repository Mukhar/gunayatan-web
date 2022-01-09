import React from 'react'
import { motion } from 'framer-motion'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/esm/Container'
export default function Queries() {
    return (
        <Container className='my-5 py-2 card border-0 grey-box-shadow'>
            <h3>Enter your Query Here</h3>
            <form>

                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Query</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
                    <div id="QueryHelp" className="form-text">Please enter your query in detail to help us server you better</div>
                </div>


                <div class="row g-2">
                    <div class="col-md">
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                    </div>
                    <div class="col-md">
                        <div className="mb-3">
                            <label for="phoneNumber" className="form-label">Mobile Number</label>
                            <input type="phone" className="form-control" id="PhoneNumber" aria-describedby="phoneHelp" required />
                            {/* <div id="phonehelp" className="form-text"></div> */}
                        </div>
                    </div>
                </div>
                <motion.button
                    whileHover={{ scale: [1.1, 1, 1.1, 1] }}
                    whileTap={{ scale: 0.9 }}
                    class="btn btn-success" type="button" id="button-addon2">Submit</motion.button>
            </form>
        </Container>
    )
}
