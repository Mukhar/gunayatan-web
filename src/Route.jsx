import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Gunasthan from "./components/Gunasthans/Gunasthan"
import NavbarMain from './components/NavbarMain';
import Home from './Home';
import Schemes from "./components/Schemes/Schemes"
import Prabandh from "./components/Prabandh/Prabandh"
export default function RouteMain() {
    return (
        <Router>
            <NavbarMain />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about1" element={<Gunasthan />} />
                <Route path="/schemes" element={<Schemes />} />
                <Route path="/about" element={<Gunasthan />} />
                <Route path="/donate" element={<Gunasthan />} />
                <Route path=":postSlug" element={<Gunasthan />} />

                <Route path="/prabandh" element={<Prabandh />} />

            </Routes>
            <Footer />
        </Router>
    )
}
