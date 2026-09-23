import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Home stays eager (landing page, prerendered + hydrated directly). Everything
// else is route-split; the streaming SSR entry waits for lazy chunks so the
// prerendered HTML is complete (see src/entry-server.jsx).
import Home from './pages/Home';

const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const HowWeWork = lazy(() => import('./pages/HowWeWork'));
const Problems = lazy(() => import('./pages/Problems'));
const Insights = lazy(() => import('./pages/Insights'));
const Agents = lazy(() => import('./pages/Agents'));
const AgentPage = lazy(() => import('./pages/agents/AgentPage'));
const AgentGuide = lazy(() => import('./pages/agents/AgentGuide'));
const Learn = lazy(() => import('./pages/Learn'));
const Offerings = lazy(() => import('./pages/Offerings'));
const Wiki = lazy(() => import('./pages/Wiki'));
const Playbooks = lazy(() => import('./pages/wiki/Playbooks'));
const PlaybookPost = lazy(() => import('./pages/wiki/PlaybookPost'));
const Glossary = lazy(() => import('./pages/wiki/Glossary'));
const WikiHome = lazy(() => import('./pages/wiki/Home').then((m) => ({ default: m.Home })));
const WikiLayer = lazy(() => import('./pages/wiki/Layer'));
const WikiProcess = lazy(() => import('./pages/wiki/Process'));
const WikiTools = lazy(() => import('./pages/wiki/Tools').then((m) => ({ default: m.Tools })));
const WikiAgents = lazy(() => import('./pages/wiki/Agents').then((m) => ({ default: m.Agents })));
const WikiAbout = lazy(() => import('./pages/wiki/About').then((m) => ({ default: m.About })));
const DiagnosticScore = lazy(() => import('./pages/DiagnosticScore'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Engagement
const StartHere = lazy(() => import('./pages/StartHere'));

// Problem detail pages
const StalledGrowth = lazy(() => import('./pages/problems/StalledGrowth'));
const PipelineConversion = lazy(() => import('./pages/problems/PipelineConversion'));
const ForecastVolatility = lazy(() => import('./pages/problems/ForecastVolatility'));

// Service detail pages
const GTMOperatingModel = lazy(() => import('./pages/services/GTMOperatingModel'));
const PipelineQuality = lazy(() => import('./pages/services/PipelineQuality'));
const ForecastingGovernance = lazy(() => import('./pages/services/ForecastingGovernance'));
const GTMSignalsAI = lazy(() => import('./pages/services/GTMSignalsAI'));

// Legal + utility
const InsightPost = lazy(() => import('./pages/insights/InsightPost'));
const CaseStudyPost = lazy(() => import('./pages/insights/CaseStudyPost'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const ThankYou = lazy(() => import('./pages/ThankYou'));
const GTMConsulting = lazy(() => import('./pages/GTMConsulting'));
const B2BSalesConsulting = lazy(() => import('./pages/B2BSalesConsulting'));
const SeriesBGTM = lazy(() => import('./pages/SeriesBGTM'));
const GTMDiagnosticChecklist = lazy(() => import('./pages/resources/GTMDiagnosticChecklist'));

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

const RouteFallback = <div className="min-h-[60vh] flex items-center justify-center text-slate-400" />;

// AppRoutes is exported separately so SSR entry can use StaticRouter
export function AppRoutes() {
    return (
        <>
            <ScrollToTop />
            <Header />
            <Suspense fallback={RouteFallback}>
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
            </Suspense>
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
