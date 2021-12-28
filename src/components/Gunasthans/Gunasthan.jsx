import React from 'react'
import img1 from "./1.png"
import img2 from "./2.png"
import img3 from "./3.png"

export default function Gunasthan() {
    return (
        <div>
            <section>
                <img src={img1} />
            </section>

            <section>
                <img src={img2} />
            </section>

            <section>
                <img src={img3} />
            </section>
        </div>
    )
}
