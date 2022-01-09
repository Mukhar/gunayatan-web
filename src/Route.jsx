import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Gunasthan from "./components/Gunasthans/Gunasthan"
import NavbarMain from './components/NavbarMain';
import Home from './Home';
import Schemes from "./components/Schemes/Schemes"
import Prabandh from "./components/Prabandh/Prabandh"
import FeedbackForm from './components/Forms/FeedbackForm';
import Queries from './components/Forms/Queries';
import HowToReach from './components/Visit/HowToReach';
import ScrollToTop from './components/Utils';
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
                <Route path="/feedback" element={<FeedbackForm />} />
                <Route path="/prabandh" element={<Prabandh />} />
                <Route path="/queries" element={<Queries />} />
                <Route path="visit" >
                    <Route path="howToReach" element={<HowToReach />}></Route>
                    <Route path="Accomodation" />
                    <Route path="facilities" />
                    <Route path="facilities" />
                    <Route path="Tickets" />
                    <Route path="facilities" />
                </Route>
                <Route path="/feedback" element={<FeedbackForm />} />

                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
            <ScrollToTop />
            <Footer />
        </Router>
    )
}
