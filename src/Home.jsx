import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import "./assets/css/common.css";
import CardWhite from './components/Card';
import CarouselBody from './components/Carousel';
import Dharma from './components/Dharma';
import Divider from './components/Divider';
import FullscreenTextImage from './components/FullscreenTextImage';
import JoinUs from './components/JoinUs';
import SectionComp from './components/SectionComp';
import SectionScheme from './components/SectionScheme';
import Slick from './components/Slick';
import SubscribeNews from './components/SubscribeNews';
function Home() {
  return (<>
    {/* <NavbarMain /> */}
    <CarouselBody />
    <CardWhite />
    <Dharma />
    <Divider />
    {/* <img src={divider} style={{
      width: "20%",
      textAlign: 'center',
      margin: "10px auto 10px auto",
      display: 'block'
    }} /> */}
    <FullscreenTextImage />
    <SectionComp heading="Gunayatan Gyan Mandir" />
    <Slick />
    <SectionScheme heading="...towards achieving the ultimate goal" />
    <JoinUs />
    <SubscribeNews />
    {/* <Footer /> */}
  </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default Home;
