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
import Social from './components/Layouts/Social';
import VisitLayout from './components/Layouts/VisitLayout';
import ExploreLayout from './components/Layouts/ExploreLayout';
import DonationLayout from './components/Layouts/DonationLayout';
import AboutUsLayout from './components/Layouts/AboutUsLayout';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
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
                <Route path="/queries" element={<Queries />} />
                <Route path="visit" element={<VisitLayout />}>
                    <Route path="howToReach" element={<HowToReach />}></Route>
                    <Route path="Accomodation" />
                    <Route path="facilities" />
                    <Route path="facilities" />
                    <Route path="Tickets" />
                    <Route path="facilities" />
                </Route>
                <Route path="donation" element={<DonationLayout />} />
                <Route path="explore" element={<ExploreLayout />} />
                <Route path="aboutUs" element={<AboutUsLayout />} />

                <Route path="/prabandh" element={<Prabandh />} />
                <Route path="Social" element={<Social />} />
                <Route path="/feedback" element={<FeedbackForm />} />

                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p className='heading'>There's nothing here!</p>
                            <Link to="/" className='d-flex justify-content-center'><Button>Home</Button></Link>
                        </main>
                    }
                />
            </Routes>
            <ScrollToTop />
            <Footer />
        </Router >
    )
}
