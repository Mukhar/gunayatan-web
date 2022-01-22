import React, { useLayoutEffect } from 'react'
import HowToReach from '../Visit/HowToReach'

export default function VisitLayout() {
    useLayoutEffect(() => {
        window.scroll(0, 0);
    }, [])
    return (
        <>
            <HowToReach />
        </>
    )
}
