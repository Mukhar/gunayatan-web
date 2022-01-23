import React, { useLayoutEffect } from 'react'
import Blessings from '../AboutUs/Blessings'
import ManagingComittee from '../AboutUs/ManagingComittee'
import "./../AboutUs/AboutUs.css"
export default function AboutUsLayout() {
    useLayoutEffect(() => {
        window.scroll(0, 0);
    }, [])
    return (
        <>
            <Blessings />
            <ManagingComittee />
        </>
    )
}
