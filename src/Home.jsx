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
// import Updown from "./components/Utils/Updown";
function Home() {
  useEffect(() => {
    window.scroll(0, 0);

  }, [])
  return (<>
    {/* <NavbarMain /> */}
    <CarouselBody />
    {/* <Updown up='menu' down='muniraj' /> */}
    <CardWhite />
    {/* <Updown up='carousel-top' down='about' /> */}
    <Dharma />
    <Divider />
    {/* <Updown up='carousel-top' down='card' /> */}
    <FullscreenTextImage />
    {/* <Updown up='carousel' down='slick' /> */}
    <SectionComp heading="Gunayatan Gyan Mandir" />
    {/* <Updown up='carousel' down='card' /> */}
    <Slick />
    {/* <Updown up='carousel' down='scheme-extended' /> */}
    <SectionScheme heading="...towards achieving the ultimate goal" />
    {/* <Updown up='carousel' down='card' /> */}
    <JoinUs />
    <SubscribeNews />
  </>

  );
}

export default Home;
