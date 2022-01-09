import React from 'react'
import { motion } from 'framer-motion';
import "./../assets/css/common.css"
import { useState } from 'react';
import { useLayoutEffect } from 'react';
export default function ScrollToTop() {
    function scrollup() {
        window.scrollTo(0, 0);
        setscrollThresh(false);
    }
    const [scrollThresh, setscrollThresh] = useState(false)
    useLayoutEffect(() => {
        window.onscroll = () => {
            console.log(window.scrollY);
            console.log(scrollThresh);
            if (window.scrollY > 200 && !scrollThresh) {

                setscrollThresh(true);
                console.log("Thresh set true");
            }

        }
    }, []);
    return (
        <>
            {scrollThresh && <motion.div whileTap={{ scale: 0.9 }} onClick={scrollup} >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-up-square" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                </svg>
            </motion.div >}
        </>
    )
}