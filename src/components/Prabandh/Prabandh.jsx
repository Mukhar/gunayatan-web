import React, { useEffect } from 'react'
import Container from 'react-bootstrap/esm/Container'
import { motion } from 'framer-motion'
import "./Prabandh.css"
const buttonMotion = {
    hover: {
        scale: 1.5,
        originX: 0,
        textShadow: "0px 0px 8px #d13900 ",
        BoxShadow: "0px 0px 8px #ff01Ce ",

    }
}
export default function Prabandh() {
    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])
    return (
        <Container className='prabandh'>
            <div id="content">
                <div ClassName="mps-content">
                    <motion.h1
                        variants={buttonMotion}
                        whileHover="hover"
                    >गुणायतन प्रबन्धकारिणी</motion.h1>

                    <hr />

                    <span ClassName="style4">निर्देशक</span>
                    <hr />
                    श्री अशोक जी पाटनी, किशनगढ़<hr />

                    <span ClassName="style4">सहनिर्देशक</span>
                    <hr />
                    श्री भागचंद जी पहाड़िया, कोलकाता <hr />
                    श्री राजेश जी जैन (पारस चैनल), दिल्ली <hr />
                    श्री पदम जी पाण्ड्या, राँची <hr />
                    श्री गजराज जी गंगवाल, दिल्ली <hr />
                    श्री महेश जी बिलहरा, सागर <hr />


                    <span ClassName="style4">अध्यक्ष</span>
                    <hr />
                    श्री विनोद जी काला, कोलकाता<hr />

                    <span ClassName="style4">कार्याध्यक्ष</span>
                    <hr />
                    श्री नेमिचंद जी जैन, दिल्ली<hr />

                    <span ClassName="style4">समन्वयक</span>
                    <hr />
                    श्री पन्नालाल बैनाड़ा, आगरा<hr />

                    <span ClassName="style4">उपाध्यक्ष</span>
                    <hr />
                    1. श्री अनिल जी जैन, दुर्गापुर<hr />
                    2. श्री महावीर जी सोगनी, राँची<hr />
                    3. श्री विनोद जी जैन, देहारादून<hr />
                    4. श्री ताराचंद जी जैन, अलवर<hr />
                    5. श्री रमेश जी सरावगी, कोलकाता<hr />
                    6. श्री अनिल कुमार सेठी, हजारीबाग<hr />
                    7. श्री प्रदीप जी चूड़ीवाल, जयपुर<hr />
                    8. श्री प्रदीप जी भदोरा, टीकमगढ़<hr />


                    <span ClassName="style4">महामंत्री</span>
                    <hr />
                    श्री कन्हैया लाल जी सेठी, औरंगाबाद<hr />
                    श्री अशोक जी पाण्ड्या, गिरिडीह<hr />

                    <span ClassName="style4">संयुक्त महामंत्री एवं मुख्य कार्यवाहक</span>
                    <hr />
                    श्री सुभाष चन्द्र जी जैन<hr />

                    <span ClassName="style4">संयुक्त महामंत्री </span>
                    <hr />
                    श्री सुनील जी अजमेरा, हजारीबाग<hr />

                    <span ClassName="style4">कोषाध्यक्ष </span>
                    <hr />  श्री नंदलाल जी जैन, जयपुर<hr />

                    <span ClassName="style4">सह-कोषाध्यक्ष </span>
                    <hr />
                    श्री देवेंद्र जी अजमेरा, गया<hr />

                    <span id="hiu" ClassName="style4">विधि सलाहकार</span>
                    <hr />
                    श्री एम. पी. अजमेरा, रांची<hr />

                    <span ClassName="style4">निर्माण मंत्री</span>
                    <hr />
                    1. श्री पूरनमल जी सेठी, राँची<hr />
                    2. श्री मुकेश जी जैन, दिल्ली<hr />
                    3. श्री कमल जी पाटोदी, साड़म<hr />
                    4. इंजी. श्री रमेश जी जैन, सतना<hr />
                    5. श्री सुनील जी पहाड़िया, जयपुर<hr />

                    <span ClassName="style4">प्रचार मंत्री</span>
                    <hr />
                    श्री अनुभव सर्राफ, भोपाल<hr />

                    <span ClassName="style4">मंत्री</span>
                    <hr />
                    1. श्री अरविंद कुमार जी राजा, जबलपुर<hr />
                    2. श्रीमती चंद्रकला जी पाटनी, राँची<hr />
                    3. श्रीमती लता विजय जी गंगवाल, गया<hr />
                    4. श्री ललितेश जी जैन, फ़िरोज़ाबाद<hr />
                    5. श्री ऋषभ जी जैन, मिर्ज़ापुर<hr />
                    6. श्री रायसेठ चन्द्र कुमार जी जैन, जबलपुर<hr />

                    <span ClassName="style4">संयुक्त मंत्री</span>
                    <hr />
                    1. श्री विक्रम जी काला, राँची<hr />
                    2. श्री संजय जी गोधा, धनबाद<hr />
                    3. श्री शरदजी जैन, दिल्ली<hr />
                    4. श्री आशिष जी जैन, दिल्ली<hr />
                    5. श्री विजय जी सरावगी, कोलकाता<hr />

                    <span ClassName="style4">निधि संरक्षक</span>
                    <hr />
                    श्री बिजय जी कासलीवाल (डब्बू), गया<hr />

                    <span ClassName="style4">प्रवक्ता</span>
                    <hr />
                    श्री कमलेश जी जैन, फ़रीदाबाद<hr />

                    <span ClassName="style4">प्रबंधकारिणी सदस्य</span>
                    <hr />
                    1. श्री अजय जी जैनको, भोपाल<hr />
                    2. श्री राजेश जी जैन, जमशेदपुर<hr />
                    3. श्री विजय जी गंगवाल, गुवाहाटी<hr />
                    4. श्री  इंदर कुमार जी जैन, जयपुर<hr />

                    <span ClassName="style4"> स्थायी आमंत्रित</span>
                    <hr />
                    1. श्री विपिन जी जैन, दुर्गापुर<hr />
                    2. श्री बिनोद जी गंगवाल (पप्पू), साड़म<hr />
                    3. श्री  प्रेमचंद जी जैन, सागर<hr />
                    4. श्री प्रमोद जी भारल, नवी मुंबई<hr />

                </div>
            </div>
        </Container>
    )
}
