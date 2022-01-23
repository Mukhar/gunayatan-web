import React from 'react';
import Card from 'react-bootstrap/esm/Card'
export default function ProfileCard(props) {
    var profile = props.profile;
    return <div className='p-2'>
        <Card style={{ width: '18rem' }} className='border-0'>
            <Card.Img variant="top" src={profile.image} />
            <Card.Body >
                <Card.Text className='ProfileName' >
                    {profile.name}
                    <div className='ProfileDesignation'>{profile.designation}</div>
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
}
