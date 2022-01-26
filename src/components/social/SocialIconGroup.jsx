import React from 'react';
import Facebook from './Facebook';
import Instagram from './Instagram';
import Twitter from './Twitter';
import Email from './Email'
export default function SocialIconGroup() {
    return <div className='d-flex justify-content-center joinus '>
        <Facebook />
        <Twitter />
        <Instagram />
        <Email />
    </div>;
}
