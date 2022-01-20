import React from 'react'
import DonateNow from '../Donation/DonateNow'
import DonationFaq from '../Donation/DonationFaq'
import DonationSchemes from '../Donation/DonationSchemes'

export default function DonationLayout() {
    return (
        <div className='mb-4'>
            <DonationSchemes heading="Donation" />
            <DonateNow heading="Donate Now" />
            <DonationFaq heading="FAQ " />
        </div>
    )
}
