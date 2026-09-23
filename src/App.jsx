import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Core pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import HowWeWork from './pages/HowWeWork';
import Problems from './pages/Problems';
import Insights from './pages/Insights';
import Agents from './pages/Agents';
import AgentPage from './pages/agents/AgentPage';
import AgentGuide from './pages/agents/AgentGuide';
import Learn from './pages/Learn';
import Offerings from './pages/Offerings';
import Wiki from './pages/Wiki';
import Playbooks from './pages/wiki/Playbooks';
import PlaybookPost from './pages/wiki/PlaybookPost';
import Glossary from './pages/wiki/Glossary';
import { Home as WikiHome } from './pages/wiki/Home';
import WikiLayer from './pages/wiki/Layer';
import WikiProcess from './pages/wiki/Process';
import { Tools as WikiTools } from './pages/wiki/Tools';
import { Agents as WikiAgents } from './pages/wiki/Agents';
import { About as WikiAbout } from './pages/wiki/About';
import DiagnosticScore from './pages/DiagnosticScore';
import NotFound from './pages/NotFound';

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
import { trackPageView } from './lib/analytics';

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        if (typeof window !== 'undefined') window.scrollTo(0, 0);
        trackPageView(pathname, document.title);
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
                <Route path="/agents/:engine/:agent" element={<AgentPage />} />
                <Route path="/agents/:engine/:agent/guide" element={<AgentGuide />} />
                <Route path="/offerings" element={<Offerings />} />
                {/* Knowledge base (wiki) */}
                <Route path="/wiki" element={<Wiki />} />
                <Route path="/wiki/guides" element={<Learn />} />
                <Route path="/wiki/playbooks" element={<Playbooks />} />
                <Route path="/wiki/playbooks/:slug" element={<PlaybookPost />} />
                <Route path="/wiki/glossary" element={<Glossary />} />
                <Route path="/wiki/method" element={<WikiHome />} />
                <Route path="/wiki/method/layer/:id" element={<WikiLayer />} />
                <Route path="/wiki/method/process/:slug" element={<WikiProcess />} />
                <Route path="/wiki/method/tools" element={<WikiTools />} />
                <Route path="/wiki/method/agents" element={<WikiAgents />} />
                <Route path="/wiki/method/about" element={<WikiAbout />} />
                <Route path="/diagnostic-score" element={<DiagnosticScore />} />
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
                {/* Legacy URLs are 301-redirected in public/_redirects (single source). */}
                <Route path="/b2b-sales-consulting" element={<B2BSalesConsulting />} />
                <Route path="/resources/gtm-diagnostic-checklist" element={<GTMDiagnosticChecklist />} />
                <Route path="/series-b-gtm-strategy" element={<SeriesBGTM />} />
                <Route path="/gtm-consulting" element={<GTMConsulting />} />
                <Route path="*" element={<NotFound />} />
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
