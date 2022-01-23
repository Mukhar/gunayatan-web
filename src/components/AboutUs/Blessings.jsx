import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import ButtonCustom from '../Buttons/ButtonCustom';
import munipramansagar from './../../assets/images/220px-Muni_Pramansagar_ji.jpg'
export default function Blessings(props) {
    return (
        <Container id="blessings">
            <div className='mt-5'></div>
            <div className='heading'>  {props.heading}</div>
            <Row className='py-3'>
                <Col>
                    <div className='p-2 '>
                        <div className='text-center image-overlay'>
                            <img src={munipramansagar} alt="mps" srcset="" />
                            <div className='after'></div>
                        </div>
                    </div>
                </Col>
                <Col><div className='px-2'>
                    <div className='subheading-left'>Muni Praman Sagar Ji</div>
                    <div className="info-paragraph">‘यथा नाम तथा गुणः’ की उक्ति का जीवन्त रूप दिखाने वाले, बहुमुखी प्रतिभा के धनी मुनिश्री 108 प्रमाणसागर जी महाराज युगसाधक सन्तशिरोमणि दिगम्बर जैनाचार्य श्री108 विद्यासागर जी महाराज के सुयोग्य शिष्य हैं। उनका गहन-गम्भीर ज्ञान, निर्दोष-निस्पृह चर्या और सहज-सरल वृत्ति सहज ही सभी को अपनी ओर खींच लेते हैं। धर्म और दर्शन जैसे गूढ़ विषयों की सरल और सरस प्रस्तुति उनका अनुपम वैशिष्टय है। उन्होंने धर्म को पारम्परिक जटिलताओं से मुक्त करते हुए जीवन-व्यवहारोपयोगी रूप में प्रस्तुत किया है। यही कारण है कि एक बार उनके सम्पर्क में आने वाला व्यक्ति, उनसे अभिभूत होकर उनका ही हो जाता है। मुनिश्री की वाणी में ओज, लालित्य और सहज आकर्षण है। वे अपनी बात को बड़ी सहजता और सरलता से श्रोताओं के हृदय में उतार देने में सिद्धहस्त हैं, यही कारण है कि उनके प्रवचनों में हजारों-हजार श्रोताओं के मध्य भी सूचीपात नीरवता रहती है।</div>
                    <ButtonCustom content="Read More" link="/explore" />

                </div></Col>
            </Row>
        </Container>
    );
}
