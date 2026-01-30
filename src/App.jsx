import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Insights from './pages/Insights';
import Partners from './pages/Partners';
import Problems from './pages/Problems';
import HowWeWork from './pages/HowWeWork';
import Tools from './pages/Tools';

// Legal
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

// Tools
// import Diagnostic from './pages/Diagnostic';
// import ContentMultiplier from './pages/ContentMultiplier';
// import RevenueCalculator from './pages/RevenueCalculator';

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/problems" element={<Problems />} />
                <Route path="/how-we-work" element={<HowWeWork />} />
                <Route path="/tools" element={<Tools />} />

                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
