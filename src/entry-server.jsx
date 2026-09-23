import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { Writable } from 'node:stream';
import { StaticRouter } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoutes } from './App.jsx';

/**
 * Streaming SSR. `renderToPipeableStream` + `onAllReady` means React waits for
 * lazy route chunks and any Suspense boundaries, so the prerendered HTML is
 * complete (not the fallback) while still allowing route-level code splitting
 * on the client.
 */
export function render(url) {
    const helmetContext = {};
    return new Promise((resolve, reject) => {
        let html = '';
        const sink = new Writable({
            write(chunk, _enc, cb) { html += chunk.toString(); cb(); },
        });
        const { pipe, abort } = renderToPipeableStream(
            <React.StrictMode>
                <HelmetProvider context={helmetContext}>
                    <StaticRouter location={url}>
                        <AppRoutes />
                    </StaticRouter>
                </HelmetProvider>
            </React.StrictMode>,
            {
                onAllReady() {
                    pipe(sink);
                    sink.on('finish', () => resolve({ html, helmet: helmetContext.helmet }));
                },
                onError(err) { reject(err); },
            }
        );
        // Safety valve so a hung render doesn't stall the whole prerender.
        setTimeout(() => abort(), 20000);
    });
}
