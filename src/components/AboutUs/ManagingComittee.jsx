import React from 'react';
import ProfileCard from './ProfileCard';
import pr from './../../assets/images/Muni_Pramansagar_ji.jpg'
import Container from 'react-bootstrap/esm/Container';
export default function ManagingComittee() {
    var DonationSchemes = [{
        image: pr,
        name: "Subhash Jain",
        designation: "CEO",
    }, {
        image: pr,
        name: "Vinod Kala Jain",
        designation: "Adhyaksh",
    }, {
        image: pr,
        name: "Sunil Jain",
        designation: "CFO",
    }]

    return <Container id="organisation" className='d-flex justify-content-center'>
        {
            DonationSchemes.map((obj, keyy) =>
                (<ProfileCard profile={obj} />)

            )}
    </Container>;
}
