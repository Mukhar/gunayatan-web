import React from 'react'
import { useLayoutEffect } from 'react';
import FourteenGunasthans from '../Gunasthans/FourteenGunasthans';
import GunayatanIntro from '../Gunasthans/GunayatanIntro'
import "./ExploreLayout.css"
export default function ExploreLayout() {
    useLayoutEffect(() => {
        window.scroll(0, 0);
    }, [])

    return (
        <>
            <GunayatanIntro />
            <FourteenGunasthans />
        </>
    )
}
