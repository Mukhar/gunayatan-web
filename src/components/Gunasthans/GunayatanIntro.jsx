import React from 'react'
import gunpic from "./../../assets/icons/Gunayatan_Main_Mandir-half.png"
export default function GunayatanIntro() {
    return (
        <div id='Gunayatan_Intro' className='GunayatanIntro radial-bg-black'>
            <div className='gun-heading'>What is Gunayatan</div>

            <div className='gunImg-half'>
                <img src={gunpic} alt="gunpic"></img>
            </div>
            <div className='gun-btn-row'>
                <a href='#14gunasthan'>
                    <div className='gun-button br-1'> Explore More</div>

                    <div className='gun-button br-2'><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg>
                    </div>
                </a>
            </div>

        </div>
    )
}
