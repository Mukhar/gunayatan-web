import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/common.css"
import NavbarMain from './components/NavbarMain';
import CarouselBody from './components/Carousel';
import CardWhite from './components/Card';
import Dharma from './components/Dharma';
import FullscreenTextImage from './components/FullscreenTextImage';
import SectionComp from './components/SectionComp';
import SubscribeNews from './components/SubscribeNews';
import Slick from './components/Slick';
import divider from './assets/icons/divider.png'
import Footer from './components/Footer';
function App() {
  return (<>
    <NavbarMain />
    <CarouselBody />
    <CardWhite />
    <Dharma />
    <img src={divider} style={{
      width: "20%",
      textAlign: 'center',
      margin: "10px auto 10px auto",
      display: 'block'
    }} />
    <FullscreenTextImage />

    <SectionComp heading="Heading1" />

    <Slick />
    <SectionComp heading="Heading2" />
    <SubscribeNews />
    <Footer />
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

export default App;
