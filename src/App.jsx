import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

// Core pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import HowWeWork from './pages/HowWeWork';
import Problems from './pages/Problems';
import Insights from './pages/Insights';
import Agents from './pages/Agents';

// Engagement
import StartHere from './pages/StartHere';

// Problem detail pages
import StalledGrowth from './pages/problems/StalledGrowth';
import PipelineConversion from './pages/problems/PipelineConversion';
import ForecastVolatility from './pages/problems/ForecastVolatility';

// Service detail pages
import GTMOperatingModel from './pages/services/GTMOperatingModel';
import PipelineQuality from './pages/services/PipelineQuality';
import ForecastingGovernance from './pages/services/ForecastingGovernance';
import GTMSignalsAI from './pages/services/GTMSignalsAI';

// Legal + utility
import InsightPost from './pages/insights/InsightPost';
import CaseStudyPost from './pages/insights/CaseStudyPost';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import ThankYou from './pages/ThankYou';
import GTMConsulting from './pages/GTMConsulting';
import B2BSalesConsulting from './pages/B2BSalesConsulting';
import SeriesBGTM from './pages/SeriesBGTM';
import GTMDiagnosticChecklist from './pages/resources/GTMDiagnosticChecklist';

// Layout
import Header from './components/Header';
import Footer from './components/Footer';

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        if (typeof window !== 'undefined') window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

// AppRoutes is exported separately so SSR entry can use StaticRouter
export function AppRoutes() {
    return (
        <>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/how-we-work" element={<HowWeWork />} />
                <Route path="/problems" element={<Problems />} />
                <Route path="/problems/stalled-growth" element={<StalledGrowth />} />
                <Route path="/problems/pipeline-conversion" element={<PipelineConversion />} />
                <Route path="/problems/forecast-volatility" element={<ForecastVolatility />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/agents" element={<Agents />} />
                <Route path="/insights/case-studies/:slug" element={<CaseStudyPost />} />
                <Route path="/insights/:slug" element={<InsightPost />} />
                <Route path="/start-here" element={<StartHere />} />
                <Route path="/services/gtm-operating-model" element={<GTMOperatingModel />} />
                <Route path="/services/pipeline-quality" element={<PipelineQuality />} />
                <Route path="/services/forecasting-governance" element={<ForecastingGovernance />} />
                <Route path="/services/gtm-signals-and-ai" element={<GTMSignalsAI />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/thank-you" element={<ThankYou />} />
                {/* Redirects */}
                <Route path="/services" element={<Navigate to="/how-we-work" replace />} />
                <Route path="/b2b-sales-consulting" element={<B2BSalesConsulting />} />
                <Route path="/resources/gtm-diagnostic-checklist" element={<GTMDiagnosticChecklist />} />
                <Route path="/series-b-gtm-strategy" element={<SeriesBGTM />} />
                <Route path="/gtm-consulting" element={<GTMConsulting />} />
                <Route path="/playbooks" element={<Navigate to="/insights" replace />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Footer />
        </>
    );
}

// Default export wraps with BrowserRouter for client-side use
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
}

export default App;
