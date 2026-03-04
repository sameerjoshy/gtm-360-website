import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';

// Core pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import HowWeWork from './pages/HowWeWork';
import Problems from './pages/Problems';
import Insights from './pages/Insights';

// Engagement
import Diagnostic from './pages/Diagnostic';
import StartHere from './pages/StartHere';
import AgentWorkbench from './pages/AgentWorkbench';

// Service detail pages
import GTMOperatingModel from './pages/services/GTMOperatingModel';
import PipelineQuality from './pages/services/PipelineQuality';
import ForecastingGovernance from './pages/services/ForecastingGovernance';
import GTMSignalsAI from './pages/services/GTMSignalsAI';

// Problem detail pages
import StalledGrowth from './pages/problems/StalledGrowth';
import PipelineConversion from './pages/problems/PipelineConversion';
import ForecastVolatility from './pages/problems/ForecastVolatility';

// Legal
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import ThankYou from './pages/ThankYou';

// Layout
import Header from './components/Header';
import Footer from './components/Footer';

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Header />
            <Routes>
                {/* Core */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/how-we-work" element={<HowWeWork />} />
                <Route path="/problems" element={<Problems />} />
                <Route path="/problems/stalled-growth" element={<StalledGrowth />} />
                <Route path="/problems/pipeline-conversion" element={<PipelineConversion />} />
                <Route path="/problems/forecast-volatility" element={<ForecastVolatility />} />
                <Route path="/insights" element={<Insights />} />

                {/* Engagement */}
                <Route path="/start-here" element={<StartHere />} />
                <Route path="/diagnostic" element={<Diagnostic />} />
                <Route path="/agents" element={<AgentWorkbench />} />

                {/* Service detail */}
                <Route path="/services/gtm-operating-model" element={<GTMOperatingModel />} />
                <Route path="/services/pipeline-quality" element={<PipelineQuality />} />
                <Route path="/services/forecasting-governance" element={<ForecastingGovernance />} />
                <Route path="/services/gtm-signals-and-ai" element={<GTMSignalsAI />} />

                {/* Legal */}
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/thank-you" element={<ThankYou />} />

                {/* Redirects — legacy URLs */}
                <Route path="/workbench" element={<Navigate to="/agents" replace />} />
                <Route path="/services" element={<Navigate to="/how-we-work" replace />} />
                <Route path="/playbooks" element={<Navigate to="/insights" replace />} />
                <Route path="/platform" element={<Navigate to="/agents" replace />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
