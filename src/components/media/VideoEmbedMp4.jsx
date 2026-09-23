import { useEffect, useRef, useState } from 'react';

/**
 * MP4 embed for the marketing site: lazy-loads the source when the frame nears
 * the viewport, autoplays muted on scroll-into-view, and respects
 * prefers-reduced-motion (falls back to a static frame + native controls).
 */
const VideoEmbed = ({ src, poster, label, autoplay = false, loop = false, className = '' }) => {
    const wrapRef = useRef(null);
    const videoRef = useRef(null);
    const [loaded, setLoaded] = useState(false);
    const [inView, setInView] = useState(false);
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        const el = wrapRef.current;
        if (!el) return;
        const io = new IntersectionObserver(
            (entries) => {
                if (entries.some((e) => e.isIntersecting)) {
                    setLoaded(true);
                    io.disconnect();
                }
            },
            { rootMargin: '400px 0px' }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    useEffect(() => {
        const el = wrapRef.current;
        if (!el) return;
        setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
        const io = new IntersectionObserver(
            (entries) => {
                for (const e of entries) setInView(e.isIntersecting);
            },
            { threshold: 0.35 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    useEffect(() => {
        const v = videoRef.current;
        if (!v || !autoplay || reducedMotion || !loaded) return;
        if (inView) {
            const p = v.play();
            p?.catch(() => undefined);
        } else {
            v.pause();
        }
    }, [inView, autoplay, reducedMotion, loaded]);

    return (
        <div ref={wrapRef} className={`relative aspect-video overflow-hidden rounded-xl bg-slate-900 ${className}`}>
            {loaded ? (
                <video
                    ref={videoRef}
                    src={src}
                    poster={poster}
                    controls
                    loop={loop}
                    muted={autoplay}
                    playsInline
                    preload={autoplay ? 'auto' : 'metadata'}
                    aria-label={label}
                    className="w-full h-full object-cover"
                />
            ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-500 text-sm" aria-hidden="true">
                    Loading video…
                </div>
            )}
        </div>
    );
};

export default VideoEmbed;