
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/common.css"
import RouteMain from './Route';
import { useLayoutEffect } from 'react';
function App() {
  useLayoutEffect(() => {
    var nav = document.getElementById("navbar");
    window.onscroll = () => {
      if (window.scrollY > 100 && !nav.classList.contains("shrink")) {
        nav.classList.add("shrink");
        console.log("shrink added ");
      } else if (window.scrollY === 0 && nav.classList.contains("shrink")) {
        nav.classList.remove("shrink");
        console.log("Scroll removed ");
      }
    }
  }, []);
  return (<>
    <RouteMain />
  </>

  );
}

export default App;
