import { useEffect, useRef, useState } from 'react';

/**
 * Agent story video embed for the website — a marketing-quality MP4 that tells
 * the agent's story: the problem, the one job, the handoff, how it stays honest.
 * Lazy-loads on scroll-into-view, autoplays muted when visible, respects
 * prefers-reduced-motion. Renders nothing if no source is provided, so the
 * master agent template works for all agents today and fills in as videos ship.
 */
const AgentVideo = ({ src, label, className = '' }) => {
    const wrapRef = useRef(null);
    const videoRef = useRef(null);
    const [loaded, setLoaded] = useState(false);
    const [inView, setInView] = useState(false);
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        const el = wrapRef.current;
        if (!el) return;
        setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
        const io = new IntersectionObserver(
            (entries) => {
                for (const e of entries) setInView(e.isIntersecting);
            },
            { threshold: 0.3 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    useEffect(() => {
        const v = videoRef.current;
        if (!v || reducedMotion || !loaded) return;
        if (inView) {
            const p = v.play();
            p?.catch(() => undefined);
        } else {
            v.pause();
        }
    }, [inView, reducedMotion, loaded]);

    if (!src) return null;

    return (
        <div
            ref={wrapRef}
            className={`relative aspect-video overflow-hidden rounded-xl bg-slate-900 shadow-sm ${className}`}
        >
            {loaded ? (
                <video
                    ref={videoRef}
                    src={src}
                    controls
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    aria-label={label}
                    className="w-full h-full object-cover"
                />
            ) : (
                <div
                    className="w-full h-full flex items-center justify-center cursor-pointer"
                    onClick={() => setLoaded(true)}
                    role="button"
                    aria-label={label}
                >
                    <div className="text-center text-slate-300">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center">
                            <svg className="w-7 h-7 text-emerald-400 ml-1" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                        <p className="text-sm font-medium">Watch how it works</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AgentVideo;