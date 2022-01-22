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
            <Row>
                <Col><img src={munipramansagar} alt="mps" srcset="" /></Col>
                <Col><div className='px-2'>
                    <div className='subheading-left'>Muni Praman Sagar Ji</div>
                    <div>brief content</div>
                    <ButtonCustom content="Read More" link="/explore" />

                </div></Col>
            </Row>
        </Container>
    );
}
