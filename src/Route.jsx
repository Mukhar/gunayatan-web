import React from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Gunasthan from "./components/Gunasthans/Gunasthan"
import NavbarMain from './components/NavbarMain';
import Home from './Home';

export default function RouteMain() {
    return (
        <Router>
            <NavbarMain />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Gunasthan />} />
                {/* <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />}>
                    <Route path="" element={<Posts />} />
                    <Route path=":postSlug" element={<Post />} />
                </Route> */}
            </Routes>
            <Footer />
        </Router>
    )
}
