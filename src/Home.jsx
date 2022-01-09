import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import "./assets/css/common.css";
import { useEffect } from "react";
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
  useEffect(() => {
    window.scroll(0, 0);

  }, [])
  return (<>
    {/* <NavbarMain /> */}
    <CarouselBody />
    <CardWhite />
    <Dharma />
    <Divider />
    <FullscreenTextImage />
    <SectionComp heading="Gunayatan Gyan Mandir" />
    <Slick />
    <SectionScheme heading="...towards achieving the ultimate goal" />
    <JoinUs />
    <SubscribeNews />
    {/* <Footer /> */}
  </>

  );
}

export default Home;
