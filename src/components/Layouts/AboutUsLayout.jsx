import React, { useLayoutEffect } from 'react'
import Blessings from '../AboutUs/Blessings'
import ContactUs from '../AboutUs/ContactUs'
import ManagingComittee from '../AboutUs/ManagingComittee'
import MembersLogin from '../AboutUs/MembersLogin'
import "./../AboutUs/AboutUs.css"
export default function AboutUsLayout() {
    useLayoutEffect(() => {
        window.scroll(0, 0);
    }, [])
    return (
        <>
            <Blessings />
            <ManagingComittee />
            <MembersLogin heading="Members Login" />
            <ContactUs />
        </>
    )
}
