
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/common.css"
import RouteMain from './Route';
import { useEffect } from 'react';
function App() {
  var nav = document.getElementById("navbar");

  useEffect(() => {
    window.onscroll = () => {
      // console.log("hey scrolling:", window.scrollY);
      if (window.scrollY > 100 && !nav.classList.contains("shrink")) {
        nav.classList.add("shrink");
        console.log("shrink added ");
      } else if (window.scrollY == 0) {
        if (nav.classList.contains("shrink"))
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
