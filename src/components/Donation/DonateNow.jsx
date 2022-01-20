import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import DonationQR from './../../assets/images/gunayatanDonation.png'
export default function DonateNow(props) {
    return (
        <Container id="donateNow" className='mb-3'>
            <div className='heading'>  {props.heading}</div>
            <div className='subheading'>  {props.heading}</div>
            <div className='d-flex justify-content-evenly card-container'>
                <div className='d-flex text-center align-items-center'>You can now donate To gunayatan by scanning the QR code</div>
                <div className='card'><img src={DonationQR} alt="qr code" /></div>
            </div>
        </Container>
    )
}
